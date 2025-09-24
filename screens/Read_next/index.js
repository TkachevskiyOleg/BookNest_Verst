import React, { useMemo, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Animated } from 'react-native';
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

  const showToast = (text, mode = 'success') => {
    setToast({ visible: true, text, mode });
    Animated.timing(toastOpacity, { toValue: 1, duration: 160, useNativeDriver: true }).start(() => {
      setTimeout(() => {
        Animated.timing(toastOpacity, { toValue: 0, duration: 160, useNativeDriver: true }).start(() => {
          setToast({ visible: false, text: '', mode });
        });
      }, 1600);
    });
  };

  const addToPostponed = (item) => {
    showToast(`Книгу додано до колекції "Закинуто"\n«${item.title}» у колекції "Закинуто"`, 'success');
  };

  const deleteBook = (item) => {
    setBooks(prev => prev.filter(b => b.id !== item.id));
    showToast(`Книгу видалено назавжди\n«${item.title}» видалено назавжди`, 'danger');
  };

  const renderLeftActions = (item) => (
    <View style={styles.leftActionContainer}>
      <TouchableOpacity style={styles.pinAction} onPress={() => addToPostponed(item)} activeOpacity={0.9}>
        <Image source={postponedPng} style={{ width: 22, height: 22, tintColor: '#fff', resizeMode: 'contain', marginBottom: 8 }} />
        <Text style={styles.pinActionText}>Закинути</Text>
      </TouchableOpacity>
    </View>
  );

  const renderRightActions = (item) => (
    <View style={styles.rightActionContainer}>
      <TouchableOpacity style={styles.deleteAction} onPress={() => deleteBook(item)} activeOpacity={0.9}>
        <Image source={deletePng} style={{ width: 24, height: 24, tintColor: '#fff', resizeMode: 'contain', marginBottom: 8 }} />
        <Text style={styles.deleteActionText}>Видалити</Text>
      </TouchableOpacity>
    </View>
  );

  const renderBook = ({ item }) => (
        <Swipeable
          renderLeftActions={() => renderLeftActions(item)}
          renderRightActions={() => renderRightActions(item)}
          overshootLeft={false}
          overshootRight={false}
          friction={1}
          leftThreshold={80}
          rightThreshold={80}
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
        <Animated.View style={[styles.toast, { opacity: toastOpacity, borderTopColor: toast.mode === 'danger' ? '#e11d48' : '#2E8B57' }]}> 
          <Text style={styles.toastText}>{toast.text}</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default ReadNextScreen;
