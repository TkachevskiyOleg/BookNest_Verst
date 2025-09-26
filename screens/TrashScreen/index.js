import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import styles from './styles';

const deletePng = require('../../assets/Delete_Colection.png');
const emptyPng = require('../../assets/Corzina.png');

const seedRemovedBooks = [
  {
    id: 'd1',
    title: 'Що приховує пил',
    author: 'Кейт',
    cover: 'https://example.com/remove1.jpg',
    progress: 15,
    currentPage: 199,
    totalPages: 784,
    removedAgo: '2 дні назад',
  },
  {
    id: 'd2',
    title: 'Фіалки в березні',
    author: 'Сара Джіо',
    cover: 'https://example.com/remove2.jpg',
    progress: 15,
    currentPage: 199,
    totalPages: 784,
    removedAgo: '2 дні назад',
  },
];

const TrashScreen = ({ navigation }) => {
  const [items, setItems] = useState(seedRemovedBooks);
  const [toast, setToast] = useState({ visible: false, text: '', mode: 'success' });
  const toastOpacity = useRef(new Animated.Value(0)).current;
  const toastProgress = useRef(new Animated.Value(0)).current;
  const [toastTrackWidth, setToastTrackWidth] = useState(0);

  const ACTION_BUTTON_WIDTH = 120;
  const ACTION_PEEK_WIDTH = 96;
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const showToast = (text, mode = 'success') => {
    setToast({ visible: true, text, mode });
    const trackWidth = toastTrackWidth || 260;
    toastOpacity.setValue(0);
    toastProgress.setValue(trackWidth);
    Animated.timing(toastOpacity, { toValue: 1, duration: 160, useNativeDriver: true }).start();
    Animated.timing(toastProgress, { toValue: 0, duration: 2000, easing: Easing.linear, useNativeDriver: false }).start(() => {
      Animated.timing(toastOpacity, { toValue: 0, duration: 160, useNativeDriver: true }).start(() => {
        setToast({ visible: false, text: '', mode });
      });
    });
  };

  const restoreItem = (item) => {
    setItems(prev => prev.filter(b => b.id !== item.id));
    showToast(`Книгу відновлено\n«${item.title}» відновлено в вашій бібліотеці`, 'success');
  };

  const deleteForever = (item) => {
    setItems(prev => prev.filter(b => b.id !== item.id));
    showToast(`Книгу видалено назавжди\n«${item.title}» видалено назавжди`, 'danger');
  };

  const renderRightActions = (item, progress, dragX) => {
    const opacity = progress.interpolate({ inputRange: [0, 0.25, 1], outputRange: [0, 0.7, 1], extrapolate: 'clamp' });
    const scale = dragX.interpolate({ inputRange: [-ACTION_PEEK_WIDTH, -20, 0], outputRange: [1, 0.97, 0.9], extrapolate: 'clamp' });
    const translateX = dragX.interpolate({ inputRange: [-ACTION_PEEK_WIDTH, 0], outputRange: [0, ACTION_PEEK_WIDTH * 0.3], extrapolate: 'clamp' });
    return (
      <Animated.View style={[styles.rightActionContainer, { width: ACTION_PEEK_WIDTH, flex: 0, marginLeft: 0, marginRight: 0, transform: [{ translateX }] }]}> 
        <AnimatedTouchable
          style={[styles.deleteAction, { width: ACTION_BUTTON_WIDTH, opacity, transform: [{ scale }] }]}
          onPress={() => deleteForever(item)}
          activeOpacity={0.9}
        >
          <Image source={deletePng} style={{ width: 24, height: 24, tintColor: '#fff', resizeMode: 'contain', marginBottom: 8 }} />
          <Text style={styles.deleteActionText}>Видалити</Text>
        </AnimatedTouchable>
      </Animated.View>
    );
  };

  const renderItem = ({ item }) => (
    <Swipeable
      renderRightActions={(progress, dragX) => renderRightActions(item, progress, dragX)}
      overshootRight={false}
      friction={1.2}
      rightThreshold={40}
    >
      <View style={styles.card}>
        <Image source={{ uri: item.cover }} style={styles.cover} defaultSource={require('../../assets/placeholder-cover.png')} />
        <View style={styles.info}>
          <View style={styles.titleRow}>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <TouchableOpacity style={styles.restoreBtn} onPress={() => restoreItem(item)}>
              <Ionicons name="refresh" size={14} color="#2E8B57" />
              <Text style={styles.restoreBtnText}>Відновити</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.pageInfo}>Сторінка {item.currentPage} з {item.totalPages}</Text>
          <View style={styles.progressBarWrapper}>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${item.progress}%` }]} />
            </View>
            <Text style={styles.progressText}>{item.progress}%</Text>
          </View>
          <Text style={styles.removedAgo}>Видалено {item.removedAgo}</Text>
        </View>
      </View>
    </Swipeable>
  );

  const clearAll = () => setItems([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.backButton}>
          <Ionicons name="menu" size={22} color="#0F0F0F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Корзина</Text>
        <TouchableOpacity onPress={clearAll} style={styles.headerRight}>
          <Image source={require('../../assets/trash.png')} style={{ width: 20, height: 20, tintColor: '#0F0F0F', resizeMode: 'contain' }} />
        </TouchableOpacity>
      </View>

      <Text style={styles.autoCleanText}>Автоматичне очищення через 30 днів</Text>

      {items.length === 0 ? (
        <View style={styles.emptyWrapper}>
          <Image source={emptyPng} style={styles.emptyImage} />
          <Text style={styles.emptyTitle}>Корзина порожня</Text>
          <Text style={styles.emptySubtitle}>Тут з'являться ваші видалені книги</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      )}

      {toast.visible && (
        <Animated.View style={[styles.toast, { opacity: toastOpacity }]}> 
          <View style={styles.toastProgressTrack} onLayout={(e) => setToastTrackWidth(e.nativeEvent.layout.width)} />
          <Animated.View style={[styles.toastProgressFill, { width: toastProgress, backgroundColor: toast.mode === 'danger' ? '#e11d48' : '#2E8B57' }]} />
          <Text style={styles.toastText}>{toast.text}</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default TrashScreen;


