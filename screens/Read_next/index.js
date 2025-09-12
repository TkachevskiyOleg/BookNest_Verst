import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const readingBooks = [
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

const ReadNextScreen = ({ navigation }) => {
    const renderBook = ({ item }) => (
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
      <TouchableOpacity style={styles.continueButton} onPress={() => Alert.alert('Читання', `Відкрити книгу: ${item.title}`)}>
        <Text style={styles.continueButtonText}>Продовжити читання</Text>
      </TouchableOpacity>
    </View>
  </View>
);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={22} color="#0F0F0F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Читати далі</Text>
        <View style={{ width: 24 }} />
      </View>
      <FlatList
        data={readingBooks}
        renderItem={renderBook}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default ReadNextScreen;
