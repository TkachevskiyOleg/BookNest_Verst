import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

// Мокові дані для книг
const mockBooks = [
  {
    id: '1',
    title: 'Tappi Nottep i dinocodcpkKui KaMiHb',
    author: 'O>koau K. Poninr',
    rating: 4.9,
    cover: 'https://example.com/cover1.jpg',
  },
  {
    id: '2',
    title: 'Yci>KaHpn = fleTeKTuB Komegia PomMaHTuk',
    author: 'Bectcenepu',
    rating: 4.8,
    cover: 'https://example.com/cover2.jpg',
  },
  {
    id: '3',
    title: 'Ae Sa) ipyata 3 6nmc. ManeHbkuii npu...',
    author: 'Anica B Kp',
    rating: 5.0,
    cover: 'https://example.com/cover3.jpg',
  },
  {
    id: '4',
    title: 'J\HEPOSKAGAHA ® icropis =',
    author: 'C\'1O3AH HE!',
    rating: 4.7,
    cover: 'https://example.com/cover4.jpg',
  },
  {
    id: '5',
    title: '1984',
    author: 'Faber & Faber:. OWBoBu>KH',
    rating: 4.8,
    cover: 'https://example.com/cover5.jpg',
  },
  {
    id: '6',
    title: '3HmkHeHhha CTedani Meiinep s Koenb',
    author: 'NpogopsxKutu wTaHHA',
    rating: 4.9,
    cover: 'https://example.com/cover6.jpg',
  },
];

// Додаємо дані для книги "Читати далі"
const currentReadingBook = {
  id: 'current',
  title: 'Зникнення Стефані Мейлер',
  author: 'Жоель Діккер',
  progress: 25,
  currentPage: 199,
  totalPages: 784,
  cover: 'https://example.com/current-reading.jpg',
};

// Рекомендована книга на основі поточної
const recommendedBook = {
  id: 'recommended',
  title: 'Гаррі Поттер і філософський камінь',
  author: 'Джоан К. Ролінг',
  rating: 4.8,
  reviews: 20,
  cover: 'https://example.com/recommended.jpg',
};

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Усі Жанри');

  // Категорії для фільтрації
  const categories = ['Усі Жанри', 'Детектив', 'Комедія', 'Романтика', 'Бестселери'];

  // Функція для відображення книги
  const renderBookItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.bookItem}
      onPress={() => navigation.navigate('BookDetail', { book: item })}
    >
      <Image 
        source={{ uri: item.cover }} 
        style={styles.bookCover}
        defaultSource={require('../../assets/placeholder-cover.png')}
      />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.bookAuthor} numberOfLines={1}>{item.author}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Верхня панель з бургер-меню та пошуком */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Пошук книг..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Весь контент */}
      <ScrollView 
        style={styles.contentScroll}
        showsVerticalScrollIndicator={true}
      >
        {/* Рекомендована книга */}
        <View style={styles.recommendedSection}>
          <View style={styles.recommendedCard}>
            <View style={styles.recommendedHeader}>
              <Text style={styles.recommendedLabel}>РЕКОМЕНДОВАНА КНИГА</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Category', { title: 'Рекомендоване' })}>
                <Text style={styles.seeAll}>Більше</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.recommendedContent}>
              <View style={styles.recommendedInfo}>
                <Text style={styles.recommendedTitle} numberOfLines={2}>
                  Гаррі Поттер і філософський камінь
                </Text>
                <Text style={styles.recommendedAuthor}>Джоан К. Ролінг</Text>
                <View style={styles.recommendedRating}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingValue}>4.8</Text>
                  <Text style={styles.reviews}>(20 відгуків)</Text>
                </View>
              </View>
              <Image 
                source={{ uri: recommendedBook.cover }} 
                style={styles.recommendedCover}
                defaultSource={require('../../assets/placeholder-cover.png')}
              />
            </View>
          </View>
        </View>

        {/* Категорії */}
        <View style={styles.categoriesWrapper}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContent}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.categoryTextActive
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Новинки */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Новинки</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Category', { title: 'Новинки' })}>
            <Text style={styles.seeAll}>Більше</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={mockBooks.slice(2, 4)}
          renderItem={renderBookItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalBooksContainer}
        />

        {/* Блок "Читати далі" */}
        <View style={styles.currentReadingSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Читати далі</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ReadNext')}>
              <Text style={styles.seeAll}>Більше</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.currentReadingCard}>
            <Image 
              source={{ uri: currentReadingBook.cover }} 
              style={styles.currentReadingCover}
              defaultSource={require('../../assets/placeholder-cover.png')}
            />
            <View style={styles.currentReadingInfo}>
              <Text style={styles.currentReadingTitle} numberOfLines={2}>{currentReadingBook.title}</Text>
              <Text style={styles.currentReadingAuthor}>{currentReadingBook.author}</Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: `${currentReadingBook.progress}%` }]} />
                </View>
                <Text style={styles.progressText}>{currentReadingBook.progress}%</Text>
              </View>
              <Text style={styles.pageInfo}>Сторінка {currentReadingBook.currentPage} з {currentReadingBook.totalPages}</Text>
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Продовжити читання</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        {/* Популярне */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Популярне Зараз</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Category', { title: 'Популярне Зараз' })}>
            <Text style={styles.seeAll}>Більше</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={mockBooks.slice(4, 6)}
          renderItem={renderBookItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalBooksContainer}
        />
      </ScrollView>

      {/* Нижня панель навігації */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#2E8B57" />
          <Text style={styles.navTextActive}>Головна</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="library-outline" size={24} color="#666" />
          <Text style={styles.navText}>Бібліотека</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="download-outline" size={24} color="#666" />
          <Text style={styles.navText}>Імпорт</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#666" />
          <Text style={styles.navText}>Профіль</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="diamond-outline" size={24} color="#666" />
          <Text style={styles.navText}>Преміум</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;