import React, { useMemo, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import styles from './styles';

const readingBooksSeed = [
  {
    id: '1',
    title: 'Зникнення Стефані Мейлер',
    author: 'Жоель Діккер',
    cover: 'https://example.com/current-reading.jpg',
    progress: 25,
    currentPage: 199,
    totalPages: 784,
  },
  {
    id: '2',
    title: 'Інститут',
    author: 'Стівен Кінг',
    cover: 'https://example.com/king.jpg',
    progress: 82,
    currentPage: 501,
    totalPages: 608,
  },
  {
    id: '3',
    title: 'Пасажири',
    author: 'Джон Маррс',
    cover: 'https://example.com/passengers.jpg',
    progress: 91,
    currentPage: 380,
    totalPages: 416,
  },
  {
    id: '4',
    title: 'Ведмеже місто',
    author: 'Фредрік Бакман',
    cover: 'https://example.com/bear-town.jpg',
    progress: 33,
    currentPage: 141,
    totalPages: 432,
  },
];

const deletePng = require('../../assets/Delete_Colection.png');
const postponedPng = require('../../assets/Vidckad.png');

const ReadNextScreen = ({ navigation }) => {
  const [books, setBooks] = useState(readingBooksSeed);
  const [toast, setToast] = useState({ visible: false, text: '', mode: 'success' });
  const toastOpacity = useRef(new Animated.Value(0)).current;
  const toastProgress = useRef(new Animated.Value(0)).current; // width animation
  const [toastTrackWidth, setToastTrackWidth] = useState(0);
  const ACTION_BUTTON_WIDTH = 120;
  const ACTION_PEEK_WIDTH = 96; 
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const showToast = (text, mode = 'success') => {
    setToast({ visible: true, text, mode });
    const trackWidth = toastTrackWidth || 260; // fallback width
    toastOpacity.setValue(0);
    toastProgress.setValue(trackWidth);
    Animated.timing(toastOpacity, { toValue: 1, duration: 160, useNativeDriver: true }).start();
    Animated.timing(toastProgress, {
      toValue: 0,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(toastOpacity, { toValue: 0, duration: 160, useNativeDriver: true }).start(() => {
        setToast({ visible: false, text: '', mode });
      });
    });
  };

  const addToPostponed = (item) => {
    showToast(`Книгу додано до колекції "Закинуто"\n«${item.title}» у колекції "Закинуто"`, 'success');
  };

  const deleteBook = (item) => {
    setBooks(prev => prev.filter(b => b.id !== item.id));
    showToast(`Книгу видалено назавжди\n«${item.title}» видалено назавжди`, 'danger');
  };

  const renderLeftActions = (item, progress, dragX) => {
    const opacity = progress.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [0, 0.7, 1],
      extrapolate: 'clamp',
    });
    const scale = dragX.interpolate({
      inputRange: [0, 20, ACTION_PEEK_WIDTH],
      outputRange: [0.9, 0.97, 1],
      extrapolate: 'clamp',
    });
    const translateX = dragX.interpolate({
      inputRange: [0, ACTION_PEEK_WIDTH],
      outputRange: [-ACTION_PEEK_WIDTH * 0.3, 0],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View style={[
        styles.leftActionContainer,
        { width: ACTION_PEEK_WIDTH, flex: 0, marginLeft: 0, marginRight: 0, transform: [{ translateX }] },
      ]}> 
        <AnimatedTouchable
          style={[
            styles.pinAction,
            { width: ACTION_BUTTON_WIDTH, opacity, transform: [{ scale }] },
          ]} 
          onPress={() => addToPostponed(item)}
          activeOpacity={0.9}
        >
          <Image source={postponedPng} style={{ width: 22, height: 22, tintColor: '#fff', resizeMode: 'contain', marginBottom: 8 }} />
          <Text style={styles.pinActionText}>Закинути</Text>
        </AnimatedTouchable>
      </Animated.View>
    );
  };

  const renderRightActions = (item, progress, dragX) => {
    const opacity = progress.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [0, 0.7, 1],
      extrapolate: 'clamp',
    });
    const scale = dragX.interpolate({
      inputRange: [-ACTION_PEEK_WIDTH, -20, 0],
      outputRange: [1, 0.97, 0.9],
      extrapolate: 'clamp',
    });
    const translateX = dragX.interpolate({
      inputRange: [-ACTION_PEEK_WIDTH, 0],
      outputRange: [0, ACTION_PEEK_WIDTH * 0.3],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View style={[
        styles.rightActionContainer,
        { width: ACTION_PEEK_WIDTH, flex: 0, marginLeft: 0, marginRight: 0, transform: [{ translateX }] },
      ]}> 
        <AnimatedTouchable
          style={[
            styles.deleteAction,
            { width: ACTION_BUTTON_WIDTH, opacity, transform: [{ scale }] },
          ]} 
          onPress={() => deleteBook(item)}
          activeOpacity={0.9}
        >
          <Image source={deletePng} style={{ width: 24, height: 24, tintColor: '#fff', resizeMode: 'contain', marginBottom: 8 }} />
          <Text style={styles.deleteActionText}>Видалити</Text>
        </AnimatedTouchable>
      </Animated.View>
    );
  };

  const renderBook = ({ item }) => (
        <Swipeable
          renderLeftActions={(progress, dragX) => renderLeftActions(item, progress, dragX)}
          renderRightActions={(progress, dragX) => renderRightActions(item, progress, dragX)}
          overshootLeft={false}
          overshootRight={false}
          friction={1.2}
          leftThreshold={40}
          rightThreshold={40}
        >
      <View style={styles.card}>
        <Image source={{ uri: item.cover }} style={styles.cover} defaultSource={require('../../assets/placeholder-cover.png')} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.pageInfo}>Сторінка {item.currentPage} з {item.totalPages}</Text>
          <View style={styles.progressBarWrapper}>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${item.progress}%` }]} />
            </View>
            <Text style={styles.progressText}>{item.progress}%</Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.continueButtonText}>Продовжити читання</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.backButton}>
          <Ionicons name="menu" size={22} color="#0F0F0F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Читати далі</Text>
        <View style={{ width: 24 }} />
      </View>
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />

      {toast.visible && (
        <Animated.View style={[styles.toast, { opacity: toastOpacity }]}> 
          <View style={styles.toastProgressTrack} onLayout={(e) => setToastTrackWidth(e.nativeEvent.layout.width)} />
          <Animated.View style={[
            styles.toastProgressFill,
            { width: toastProgress, backgroundColor: toast.mode === 'danger' ? '#e11d48' : '#2E8B57' },
          ]} />
          <Text style={styles.toastText}>{toast.text}</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default ReadNextScreen;
