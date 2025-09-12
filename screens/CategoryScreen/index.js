import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const mockBooks = [
  {
    id: '1',
    title: 'Хімія смерті. Перше розслідування',
    author: 'Саймон Бекетт',
    cover: 'https://example.com/chemistry.jpg',
    rating: 4.9,
    price: 175,
  },
  {
    id: '2',
    title: 'Ніколи не бреши',
    author: 'Фріда Мак-Фадден',
    cover: 'https://example.com/neverlie.jpg',
    rating: 4.7,
    price: 230,
  },
  {
    id: '3',
    title: 'Роза Мелдер',
    author: 'Стівен Кінг',
    cover: 'https://example.com/rose.jpg',
    rating: 5.0,
    price: 240,
  },
  {
    id: '4',
    title: 'Довга хода',
    author: 'Стівен Кінг',
    cover: 'https://example.com/longwalk.jpg',
    rating: 4.7,
    price: 195,
  },
  {
    id: '5',
    title: 'Грішна',
    author: 'Тесс Геррітсен',
    cover: 'https://example.com/sinner.jpg',
    rating: 4.8,
    price: 175,
  },
  {
    id: '6',
    title: 'Двійник',
    author: 'Тесс Геррітсен',
    cover: 'https://example.com/twin.jpg',
    rating: 4.7,
    price: 175,
  },
];

const CategoryScreen = ({ navigation, route }) => {
  const { title = 'Категорія' } = route.params || {};
  const [sortModal, setSortModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  // Стан фільтра (локально, як заглушка)
  const [bookFormats, setBookFormats] = useState(['eBook']);
  const [docFormats, setDocFormats] = useState(['PDF']);
  const [rating, setRating] = useState(4); // 1..5
  const [languages, setLanguages] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [sort, setSort] = useState({ key: 'popular', direction: 'desc' });

  React.useEffect(() => {
    if (route.params?.languages) setLanguages(route.params.languages);
    if (route.params?.publishers) setPublishers(route.params.publishers);
    if (route.params?.sort) setSort(route.params.sort);
  }, [route.params?.languages, route.params?.publishers, route.params?.sort]);

  const SORT_OPTIONS = [
    { key: 'title', label: 'Назва книги (за алфавітом)' },
    { key: 'author', label: 'Автор (за алфавітом)' },
    { key: 'new', label: 'За новизною' },
    { key: 'popular', label: 'За популярністю' },
    { key: 'pages', label: 'За кількістю сторінок' },
    { key: 'reviews', label: 'За кількістю відгуків' },
  ];

  const [sortKeyDraft, setSortKeyDraft] = useState(sort.key);
  const [sortDirDraft, setSortDirDraft] = useState(sort.direction);

  const openSort = () => {
    setSortKeyDraft(sort.key);
    setSortDirDraft(sort.direction);
    setSortModal(true);
  };

  const applySort = () => {
    setSort({ key: sortKeyDraft, direction: sortDirDraft });
    setSortModal(false);
  };

  const toggleItem = (list, setList, value) => {
    setList(prev => (prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]));
  };

  const clearFilters = () => {
    setBookFormats([]);
    setDocFormats([]);
    setRating(0);
  };

  const renderBook = ({ item }) => (
    <View style={styles.bookCard}>
      <Image source={{ uri: item.cover }} style={styles.bookCover} />
      <Text style={styles.bookTitle} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.author}</Text>
      <View style={styles.bookRow}>
        <Ionicons name="star" size={14} color="#FFD700" />
        <Text style={styles.bookRating}>{item.rating}/5</Text>
        <Text style={styles.bookPrice}>{item.price}грн</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerBack}>
          <Ionicons name="chevron-back" size={22} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity style={styles.headerSearch}>
          <Ionicons name="search" size={22} color="#222" />
        </TouchableOpacity>
      </View>
      {/* Sort & Filter */}
      <View style={styles.topButtons}>
        <TouchableOpacity style={styles.topBtn} onPress={openSort}>
          <Ionicons name="swap-vertical" size={18} color="#0F0F0F" style={{ marginRight: 8 }} />
          <Text style={styles.topBtnText}>Сортування</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.topBtn, { marginRight: 0 }]} onPress={() => setFilterModal(true)}>
          <Ionicons name="filter" size={18} color="#0F0F0F" style={{ marginRight: 8 }} />
          <Text style={styles.topBtnText}>Фільтр</Text>
        </TouchableOpacity>
      </View>
      {/* Books grid */}
      <FlatList
        data={mockBooks}
        renderItem={renderBook}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Filter Modal (покращена заглушка) */}
      <Modal visible={filterModal} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.sheet}>
            <View style={styles.sheetHeader}>
              <TouchableOpacity onPress={() => setFilterModal(false)} style={styles.sheetBack}>
                <Ionicons name="chevron-back" size={22} color="#222" />
              </TouchableOpacity>
              <Text style={styles.sheetTitle}>Фільтр</Text>
              <TouchableOpacity onPress={clearFilters}>
                <Text style={styles.clearText}>Очистити</Text>
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.sheetContent}>
              {/* Формат книги */}
              <View style={styles.block}>
                <Text style={styles.blockTitle}>Формат книги</Text>
                <View style={styles.chipsRow}>
                  {['eBook', 'Аудіокниги'].map(opt => (
                    <TouchableOpacity
                      key={opt}
                      style={[styles.chip, bookFormats.includes(opt) && styles.chipActive]}
                      onPress={() => toggleItem(bookFormats, setBookFormats, opt)}
                    >
                      <Text style={[styles.chipText, bookFormats.includes(opt) && styles.chipTextActive]}>
                        {opt}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Формат документа */}
              <View style={styles.block}>
                <Text style={styles.blockTitle}>Формат документа</Text>
                <View style={styles.chipsRow}>
                  {['PDF', 'EPUB', 'DJVU', 'CBR/CBZ'].map(opt => (
                    <TouchableOpacity
                      key={opt}
                      style={[styles.chip, docFormats.includes(opt) && styles.chipActive]}
                      onPress={() => toggleItem(docFormats, setDocFormats, opt)}
                    >
                      <Text style={[styles.chipText, docFormats.includes(opt) && styles.chipTextActive]}>
                        {opt}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Рейтинг */}
              <View style={styles.block}>
                <Text style={styles.blockTitle}>Рейтинг</Text>
                <View style={styles.starsRow}>
                  {[1,2,3,4,5].map(i => (
                    <TouchableOpacity key={i} onPress={() => setRating(i)}>
                      <Ionicons name={i <= rating ? 'star' : 'star-outline'} size={26} color={i <= rating ? '#2E8B57' : '#FFCC66'} style={{ marginHorizontal: 4 }} />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Мова */}
              <TouchableOpacity style={styles.rowItem} onPress={() => navigation.navigate('FilterLanguage', { selected: languages })}>
                <Text style={styles.rowItemText}>Мова</Text>
                <Text numberOfLines={1} style={{ flex: 1, textAlign: 'right', color: '#999', marginRight: 8 }}>
                  {languages.length ? languages.join(', ') : '—'}
                </Text>
                <Ionicons name="chevron-forward" size={18} color="#999" />
              </TouchableOpacity>

              {/* Видавництво */}
              <TouchableOpacity style={styles.rowItem} onPress={() => navigation.navigate('FilterPublisher', { selected: publishers })}>
                <Text style={styles.rowItemText}>Видавництво</Text>
                <Text numberOfLines={1} style={{ flex: 1, textAlign: 'right', color: '#999', marginRight: 8 }}>
                  {publishers.length ? publishers.join(', ') : '—'}
                </Text>
                <Ionicons name="chevron-forward" size={18} color="#999" />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Sort Modal (шит) */}
      <Modal visible={sortModal} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.sheet}>
            <View style={styles.sheetHeader}>
              <TouchableOpacity onPress={() => setSortModal(false)} style={styles.sheetBack}>
                <Ionicons name="chevron-back" size={22} color="#222" />
              </TouchableOpacity>
              <Text style={styles.sheetTitle}>Сортування</Text>
              <TouchableOpacity onPress={() => setSortDirDraft(prev => (prev === 'asc' ? 'desc' : 'asc'))}>
                <Ionicons name={sortDirDraft === 'asc' ? 'arrow-up' : 'arrow-down'} size={22} color="#2E8B57" />
              </TouchableOpacity>
            </View>
            {SORT_OPTIONS.map(opt => (
              <TouchableOpacity key={opt.key} style={[styles.selectRow, { paddingHorizontal: 16 }]} onPress={() => setSortKeyDraft(opt.key)}>
                <Text style={styles.selectText}>{opt.label}</Text>
                <Ionicons name={sortKeyDraft === opt.key ? 'radio-button-on' : 'radio-button-off'} size={20} color={sortKeyDraft === opt.key ? '#2E8B57' : '#666'} />
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={[styles.primaryBtn, { position: 'relative', margin: 16, left: 0, right: 0, bottom: 0 }]} onPress={applySort}>
              <Text style={styles.primaryBtnText}>Готово</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CategoryScreen;
