import React, { useMemo, useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Modal,
  TextInput,
  Animated,
  Dimensions,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const tabs = ['Книги', 'Аудіокниги'];
const filters = ['Усі книги', 'Читаю', 'Прочитано', 'Не прочитано'];

const mockItems = Array.from({ length: 8 }).map((_, i) => ({
  id: String(i + 1),
  title: `Назва книги ${i + 1}`,
  author: 'Автор',
  format: 'pdf',
}));

const LibraryScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Книги');
  const [activeFilter, setActiveFilter] = useState('Усі книги');
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Назва книги (за алфавітом)');
  const [isLangPickerVisible, setIsLangPickerVisible] = useState(false);
  const [isPublisherPickerVisible, setIsPublisherPickerVisible] = useState(false);
  const [isGenrePickerVisible, setIsGenrePickerVisible] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedPublishers, setSelectedPublishers] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [pickerQuery, setPickerQuery] = useState('');
  const [isActionsVisible, setIsActionsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMarkedRead, setIsMarkedRead] = useState(false);
  const coverScale = useRef(new Animated.Value(1)).current;
  const sheetOpacity = useRef(new Animated.Value(0)).current;
  const scaledItemIdRef = useRef(null);
  const [scaledItemId, setScaledItemId] = useState(null);
  const [modalPos, setModalPos] = useState({ top: 0, left: 0 });
  const cardRefs = useRef(new Map());
  const SCREEN_WIDTH = Dimensions.get('window').width;

  useEffect(() => {
    if (isActionsVisible) {
      Animated.parallel([
        Animated.timing(coverScale, { toValue: 1.5, duration: 200, useNativeDriver: true }),
        Animated.timing(sheetOpacity, { toValue: 1, duration: 180, useNativeDriver: true }),
      ]).start();
    } else {
      coverScale.setValue(1);
      sheetOpacity.setValue(0);
      scaledItemIdRef.current = null;
      setScaledItemId(null);
    }
  }, [isActionsVisible]);

  const ALL_LANGUAGES = ['Українська','English','Deutsch','Polski','Español','Français','Italiano','中文','日本語'];
  const ALL_PUBLISHERS = ['Віхола','Vivat','Yakaboo','КСД','Nebo BookLab','ArtHuss','Project Gutenberg','READBERRY'];
  const ALL_GENRES = ['Детектив','Фантастика','Фентезі','Романтика','Трилер','Нон-фікшн','Мемуари','Пригоди','Історія'];

  const filteredPickerData = useMemo(() => {
    const q = pickerQuery.trim().toLowerCase();
    const list = isLangPickerVisible ? ALL_LANGUAGES : isPublisherPickerVisible ? ALL_PUBLISHERS : ALL_GENRES;
    if (!q) return list;
    return list.filter(x => x.toLowerCase().includes(q));
  }, [pickerQuery, isLangPickerVisible, isPublisherPickerVisible, isGenrePickerVisible]);

  const renderItem = ({ item }) => (
    <View style={styles.card}
      ref={(node) => { if (node) cardRefs.current.set(item.id, node); }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Reading', { book: { title: item.title, author: item.author } })}
        delayLongPress={350}
        onLongPress={() => {
          const ref = cardRefs.current.get(item.id);
          if (ref && ref.measureInWindow) {
            ref.measureInWindow((x, y, w, h) => {
              const containerWidth = Math.min(SCREEN_WIDTH * 0.86, 320);
              const left = Math.max(12, Math.min(x + w / 2 - containerWidth / 2, SCREEN_WIDTH - containerWidth - 12));
              setModalPos({ top: y + h + 10, left });
              setSelectedItem(item);
              scaledItemIdRef.current = item.id;
              setScaledItemId(item.id);
              setIsActionsVisible(true);
            });
          } else {
            setSelectedItem(item);
            setIsActionsVisible(true);
          }
        }}
      >
        <Animated.Image source={require('../../assets/placeholder-cover.png')} style={[styles.cardCover, scaledItemId === item.id && [ { transform: [{ scale: coverScale }] }, styles.coverRaised ]]} />
        <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
        <View style={styles.cardMetaRow}>
          <View style={styles.dot} />
          <Text style={styles.cardMetaText}>0%</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={26} color="#222" />
        </TouchableOpacity>
        <View style={styles.searchStub}>
          <Ionicons name="search" size={18} color="#666" />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Пошук"
            placeholderTextColor="#9e9e9e"
            returnKeyType="search"
          />
        </View>
        <View style={styles.topIcons}>
          <TouchableOpacity onPress={() => setIsSortVisible(true)}>
            <Ionicons name="swap-vertical-outline" size={20} color="#222" style={styles.topIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFilterVisible(true)}>
            <Ionicons name="funnel-outline" size={20} color="#222" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.segmentTrack}>
        {tabs.map((t, idx) => (
          <TouchableOpacity
            key={t}
            style={[
              styles.segmentPill,
              activeTab === t && styles.segmentPillActive,
              idx === 0 && styles.segmentPillFirst,
              idx === tabs.length - 1 && styles.segmentPillLast,
            ]}
            onPress={() => setActiveTab(t)}
            activeOpacity={0.9}
          >
            <Text style={[styles.segmentLabel, activeTab === t && styles.segmentLabelActive]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersRow}>
        {filters.map(f => (
          <TouchableOpacity key={f} style={[styles.filterChip, activeFilter === f && styles.filterChipActive]} onPress={() => setActiveFilter(f)}>
            <Text style={[styles.filterText, activeFilter === f && styles.filterTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Динамічний заголовок списку згідно вибраного фільтра */}
      <View style={styles.listHeaderRow}>
        <Text style={styles.listHeaderTitle}>
          {activeFilter === 'Усі книги' ? 'Усі' : activeFilter}
        </Text>
      </View>

      <FlatList
        data={mockItems}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.grid}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomSpacer} />

      {/* Actions modal on long press */}
      <Modal visible={isActionsVisible} transparent animationType="fade" onRequestClose={() => setIsActionsVisible(false)}>
        <View style={styles.actionsOverlay}>
          <BlurView style={styles.blurFill} intensity={40} tint="dark" />
          <TouchableOpacity style={styles.blurFill} activeOpacity={1} onPress={() => setIsActionsVisible(false)} />
          {selectedItem && (
            <View style={styles.actionsStack}>
              <Animated.View style={[styles.actionsContainer, { opacity: sheetOpacity, position: 'absolute', top: modalPos.top, left: modalPos.left, width: Math.min(SCREEN_WIDTH * 0.86, 320) }]}>
                  <View style={styles.actionsHeaderTitle}>
                    <Text style={styles.actionsTitle} numberOfLines={1}>{selectedItem.title}</Text>
                    <Text style={styles.actionsSubtitle}>{selectedItem.format?.toUpperCase() || 'PDF'}</Text>
                  </View>
                  <View style={styles.actionsList}>
                  {[
                    { key: 'info', label: 'Інформація', icon: ['information-circle-outline', '#222'] },
                    { key: 'read', label: 'Читати', icon: ['book-outline', '#222'], onPress: () => { setIsActionsVisible(false); navigation.navigate('Reading', { book: selectedItem }); } },
                    { key: 'mark', label: 'Позначити як прочитане', renderRight: () => (isMarkedRead ? <Ionicons name="checkmark" size={18} color="#2E8B57" /> : <Ionicons name="ellipse-outline" size={18} color="#999" />), onPress: () => setIsMarkedRead(prev => !prev) },
                    { key: 'collections', label: 'Колекції', icon: ['chevron-forward', '#222'] },
                    { key: 'share', label: 'Поділитись', icon: ['share-social-outline', '#222'] },
                    { key: 'delete', label: 'Видалити', icon: ['trash-outline', '#d62f2f'], destructive: true },
                  ].map((row, index, arr) => {
                    const isLast = index === arr.length - 1;
                    return (
                      <TouchableOpacity
                        key={row.key}
                        style={[styles.actionRow, isLast && styles.actionRowLast]}
                        onPress={row.onPress}
                        activeOpacity={0.8}
                      >
                        <Text style={[styles.actionText, row.destructive && styles.actionTextDestructive]}>{row.label}</Text>
                        {row.renderRight ? row.renderRight() : <Ionicons name={row.icon[0]} size={18} color={row.icon[1]} />}
                      </TouchableOpacity>
                    );
                  })}
                  </View>
                </Animated.View>
              {/* Scale only the real card underlaying; nothing to render here */}
            </View>
          )}
        </View>
      </Modal>

      {/* Sort bottom sheet */}
      <Modal visible={isSortVisible} transparent animationType="slide" onRequestClose={() => setIsSortVisible(false)}>
        <View style={styles.sheetOverlay}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => setIsSortVisible(false)} />
          <View style={styles.sheetContainer}>
            <View style={styles.sheetHandle} />
            <View style={styles.sheetHeaderRow}>
              <TouchableOpacity onPress={() => setIsSortVisible(false)}>
                <Ionicons name="chevron-back" size={22} color="#222" />
              </TouchableOpacity>
              <Text style={styles.sheetTitle}>Сортування</Text>
              <Ionicons name="swap-vertical-outline" size={18} color="#2E8B57" />
            </View>
            {['Назва книги (за алфавітом)', 'Автор (за алфавітом)', 'За датою додавання', 'За кількістю сторінок'].map(option => {
              const active = sortBy === option;
              return (
                <View key={option} style={styles.rowBlock}>
                  <TouchableOpacity style={styles.optionRow} onPress={() => setSortBy(option)}>
                    <Text style={styles.optionText}>{option}</Text>
                    <View style={[styles.radioOuter, active && { borderColor: '#2E8B57' }]}>
                      {active && <View style={styles.radioInner} />}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </Modal>

      {/* Filter bottom sheet */}
      <Modal visible={isFilterVisible} transparent animationType="slide" onRequestClose={() => setIsFilterVisible(false)}>
        <View style={styles.sheetOverlay}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => setIsFilterVisible(false)} />
          <View style={styles.sheetContainer}>
            <View style={styles.sheetHandle} />
            <View style={styles.sheetHeaderRow}>
              <TouchableOpacity onPress={() => setIsFilterVisible(false)}>
                <Ionicons name="chevron-back" size={22} color="#222" />
              </TouchableOpacity>
              <Text style={styles.sheetTitle}>Фільтр</Text>
              <TouchableOpacity onPress={() => { setSelectedLanguages([]); setSelectedGenres([]); setSelectedPublishers([]); }}>
                <Text style={styles.clearText}>Очистити</Text>
              </TouchableOpacity>
            </View>
            {/* Три окремі блоки */}
            <View style={styles.rowBlock}>
              <TouchableOpacity style={styles.optionRow} onPress={() => { setIsLangPickerVisible(true); setPickerQuery(''); }}>
                <Text style={styles.optionText}>Мова</Text>
                <View style={styles.optionRight}>
                  <Text numberOfLines={1} style={styles.optionValue}>
                    {selectedLanguages.length ? `${selectedLanguages.slice(0, 2).join(', ')}${selectedLanguages.length > 2 ? '…' : ''}` : '—'}
                  </Text>
                  <Ionicons name="chevron-forward" size={18} color="#888" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.rowBlock}>
              <TouchableOpacity style={styles.optionRow} onPress={() => { setIsGenrePickerVisible(true); setPickerQuery(''); }}>
                <Text style={styles.optionText}>Жанр</Text>
                <View style={styles.optionRight}>
                  <Text numberOfLines={1} style={styles.optionValue}>
                    {selectedGenres.length ? `${selectedGenres.slice(0, 2).join(', ')}${selectedGenres.length > 2 ? '…' : ''}` : '—'}
                  </Text>
                  <Ionicons name="chevron-forward" size={18} color="#888" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.rowBlock}>
              <TouchableOpacity style={styles.optionRow} onPress={() => { setIsPublisherPickerVisible(true); setPickerQuery(''); }}>
                <Text style={styles.optionText}>Видавництво</Text>
                <View style={styles.optionRight}>
                  <Text numberOfLines={1} style={styles.optionValue}>
                    {selectedPublishers.length ? `${selectedPublishers.slice(0, 2).join(', ')}${selectedPublishers.length > 2 ? '…' : ''}` : '—'}
                  </Text>
                  <Ionicons name="chevron-forward" size={18} color="#888" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Language/Genre/Publisher pickers */}
      {(isLangPickerVisible || isGenrePickerVisible || isPublisherPickerVisible) && (
        <Modal visible transparent animationType="slide" onRequestClose={() => { setIsLangPickerVisible(false); setIsPublisherPickerVisible(false); setIsGenrePickerVisible(false); }}>
          <View style={styles.sheetOverlay}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => { setIsLangPickerVisible(false); setIsPublisherPickerVisible(false); setIsGenrePickerVisible(false); }} />
            <View style={styles.sheetContainer}>
              <View style={styles.sheetHandle} />
              <View style={styles.sheetHeaderRow}>
                <TouchableOpacity onPress={() => { setIsLangPickerVisible(false); setIsPublisherPickerVisible(false); setIsGenrePickerVisible(false); }}>
                  <Ionicons name="chevron-back" size={22} color="#222" />
                </TouchableOpacity>
                <Text style={styles.sheetTitle}>{isLangPickerVisible ? 'Мова' : isPublisherPickerVisible ? 'Видавництво' : 'Жанр'}</Text>
                <View style={{ width: 24 }} />
              </View>
              <View style={styles.searchBar}>
                <Ionicons name="search" size={18} color="#666" />
                <TextInput style={styles.searchInputPicker} placeholder="Пошук" value={pickerQuery} onChangeText={setPickerQuery} />
              </View>
              <View style={styles.pickerList}>
                {filteredPickerData.map(item => {
                  const array = isLangPickerVisible ? selectedLanguages : isPublisherPickerVisible ? selectedPublishers : selectedGenres;
                  const setArray = isLangPickerVisible ? setSelectedLanguages : isPublisherPickerVisible ? setSelectedPublishers : setSelectedGenres;
                  const checked = array.includes(item);
                  return (
                    <TouchableOpacity key={item} style={styles.selectRow} onPress={() => {
                      setArray(prev => checked ? prev.filter(x => x !== item) : [...prev, item]);
                    }}>
                      <Text style={styles.selectText}>{item}</Text>
                      <Ionicons name={checked ? 'checkbox' : 'square-outline'} size={20} color={checked ? '#2E8B57' : '#666'} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        </Modal>
      )}
      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="#666" />
          <Text style={styles.navText}>Головна</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="library-outline" size={24} color="#2E8B57" />
          <Text style={styles.navTextActive}>Бібліотека</Text>
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

export default LibraryScreen;