import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Modal,
  Switch,
  StyleSheet,
  Dimensions,
  Pressable
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import BottomToolbar from './BottomToolbar';
import SettingsModal from './SettingsModal';
import AutoScrollModal from './AutoScrollModal';
import ChaptersDrawer from './ChaptersDrawer';
import TextSelectionToolbar from './TextSelectionToolbar';
import ColorPickerModal from './ColorPickerModal';
import styles from './styles';

const { height } = Dimensions.get('window');

const leftArrow = require('../../assets/left_arrow.png');
const rightArrow = require('../../assets/right_arrow.png');
const informationCircle = require('../../assets/information-circle.png');
const scrollVertical = require('../../assets/scroll-vertical.png');
const autoScroll = require('../../assets/autoscroll.png');
const sections = require('../../assets/Sections.png');
const search = require('../../assets/search.png');
const sunIcon = require('../../assets/sun-icon.png');
const singlePageIcon = require('../../assets/Book.png');
const scrollModeIcon = require('../../assets/scroll-mode-icon.png');
const fontSizeIncreaseIcon = require('../../assets/font-size-increase-icon.png');
const fontSizeDecreaseIcon = require('../../assets/font-size-decrease-icon.png');

const ReadingScreen = ({ route, navigation }) => {
  const { book } = route.params || {};
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [isAutoScrollVisible, setIsAutoScrollVisible] = useState(false);
  const [isChaptersVisible, setIsChaptersVisible] = useState(false);
  const [isImmersive, setIsImmersive] = useState(false);
  const [progress, setProgress] = useState(24);
  const scrollViewRef = useRef();

  // Стани для налаштувань
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [brightness, setBrightness] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [isDraggingBrightness, setIsDraggingBrightness] = useState(false);
  const [readingMode, setReadingMode] = useState('Одна сторінка');
  const [spacing, setSpacing] = useState('Середні');
  const [lineSpacing, setLineSpacing] = useState('Звичайний');
  const [selectedTheme, setSelectedTheme] = useState('#FFFFFF');
  const [selectedFont, setSelectedFont] = useState('SF Pro');
  const [showFontDropdown, setShowFontDropdown] = useState(false);
  const [showSpacingDropdown, setShowSpacingDropdown] = useState(false);
  const [showLineSpacingDropdown, setShowLineSpacingDropdown] = useState(false);

  const bookContent = book?.content || `Вітер дув із півночі, приносячи запахи хвої, дощу й чогось неспокійного.
Марта стояла на краю скелі, і світ навколо ніби завис. У руці — старий, злегка пожестілий лист.

Вона знайшла його в книзі, яку давно не відкривала. «Ти читаєш це — значить, я зник. Але не вважай це втечею. Це — пошук. Можливо, тебе вн теж чекає…»

Вона перечитала ці рядки тричі. Серце стискалося, та не від болю — від передчуття. Позаду — будинок, стіни, які знали її тишу.

Попереду — ліс, море і відповідь, яку вона боялася знайти.

Вона зробила перший крок. Потім другий. І третій — найважливіший.

Під ногами рипів пісок. Вона йшла до човна, що коліхався біля берега, мовчазний, терплячий, знайомий.

У човні було все, що їй могло знадобитись: ліхтарик, термос, компас і стара мапа — та сама, яку колись тримав він.

Вітер трохи посилився, ніби підганяючи її. Вода ледь плескалась об берег, і кожен звук здавався промовистим.

Вона відштовхнулася веслами. Човен ковзнув у темряву. Вогні залишилися десь позаду, а перед нею розгортався чорний обрій —`;

  const currentPage = book?.currentPage || 199;
  const totalPages = book?.totalPages || 784;
  const chapter = book?.chapter || 3;

  const [autoScrollSpeed, setAutoScrollSpeed] = useState(50);
  const [autoDetectSpeed, setAutoDetectSpeed] = useState(false);
  const [expandedChapterIds, setExpandedChapterIds] = useState([]);
  const [drawerTab, setDrawerTab] = useState('chapters');
  const [isSelectionVisible, setIsSelectionVisible] = useState(false);
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [highlightOpacity, setHighlightOpacity] = useState(1);
  const [selectionPosition, setSelectionPosition] = useState({ x: 20, y: 180 });
  const [isSelecting, setIsSelecting] = useState(false);

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 50;
    
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
      setIsToolbarVisible(true);
    } else {
      setIsToolbarVisible(false);
    }
    if (isSelectionVisible) setIsSelectionVisible(false);
  };

  const goPrevPage = () => {
    if (!scrollViewRef.current) return;
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const goNextPage = () => {
    if (!scrollViewRef.current) return;
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const openBookDetails = () => {
    navigation.navigate('ReadNext');
  };

  const toggleImmersive = () => {
    setIsImmersive(!isImmersive);
  };

  const increaseFontSize = () => {
    if (fontSize < 24) setFontSize(fontSize + 1);
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(fontSize - 1);
  };

  // Плавна зміна яскравості без стрибків
  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };
  const handleBrightnessSlideStart = () => {
    setIsDraggingBrightness(true);
  };
  const handleBrightnessSlideEnd = (value) => {
    setIsDraggingBrightness(false);
    setBrightness(value);
  };

  // Функції для закриття всіх випадаючих списків
  const closeAllDropdowns = () => {
    setShowFontDropdown(false);
    setShowSpacingDropdown(false);
    setShowLineSpacingDropdown(false);
  };

  const fonts = ['SF Pro', 'SF Pro Georgia', 'Times New Roman', 'Helvetica', 'Arial'];
  const spacingOptions = ['Вузькі', 'Середні', 'Широкі'];
  const lineSpacingOptions = ['Щільний', 'Звичайний', 'Великий', 'Розсипний'];

  const chaptersMock = [
    { id: 'c1', title: '1 Назва розділу' },
    { id: 'c2', title: '2 Назва розділу' },
    { id: 'c6', title: '6 Назва розділу', children: [
      { id: 'c6-1', title: 'Назва під розділу' },
      { id: 'c6-2', title: 'Назва під розділу' },
      { id: 'c6-3', title: 'Назва під розділу' },
    ]},
    { id: 'c7', title: '7 Назва розділу' },
  ];
  const readChapterIds = ['c1','c2'];
  const bookmarksMock = [];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={isImmersive} />
      
      {/* Верхня панель */}
      {!isImmersive && (
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => setIsSettingsModalVisible(true)}
          >
            <Ionicons name="settings-outline" size={24} color="#000" />
          </TouchableOpacity>
          
          <Text style={styles.headerChapter}>Розділ {chapter}</Text>
          
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => setIsBookmarked(!isBookmarked)}
          >
            <Ionicons 
              name={isBookmarked ? "bookmark" : "bookmark-outline"} 
              size={24} 
              color={isBookmarked ? "#008655" : "#000"} 
            />
          </TouchableOpacity>
        </View>
      )}

      {/* Основний контент */}
      <ScrollView 
        ref={scrollViewRef}
        style={styles.content}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.contentWrapper}>
          <Pressable
            delayLongPress={250}
            onPressIn={(e) => {
              const { pageX, pageY } = e.nativeEvent;
              const posX = Math.max(8, pageX - 120);
              const posY = Math.max(80, pageY - 70);
              setSelectionPosition({ x: posX, y: posY });
            }}
            onLongPress={() => {
              setIsSelecting(true);
            }}
            onPressOut={() => {
              if (isSelecting) {
                setIsSelectionVisible(true);
                setIsSelecting(false);
              }
            }}
          >
            <Text style={styles.text}>
              {bookContent}
            </Text>
          </Pressable>
        </View>
        
        {/* Номер сторінки в кінці контенту */}
        <View style={styles.pageNumberContainer}>
          <Text style={styles.pageNumber}>{currentPage}</Text>
        </View>
      </ScrollView>

      {isToolbarVisible && (
        <BottomToolbar
          progress={progress}
          onLeftPress={goPrevPage}
          onRightPress={goNextPage}
          onInfoPress={openBookDetails}
          onToggleImmersive={toggleImmersive}
          onAutoScrollPress={() => setIsAutoScrollVisible(true)}
          onChaptersPress={() => setIsChaptersVisible(true)}
          onSearchPress={() => {}}
        />
      )}

      {isSelectionVisible && (
        <TextSelectionToolbar
          style={{ position: 'absolute', top: selectionPosition.y, left: selectionPosition.x }}
          onTranslate={() => {}}
          onUnderline={() => {}}
          onCopy={() => {}}
          onComment={() => {}}
          onColorPicker={() => { setIsSelectionVisible(false); setIsColorPickerVisible(true); }}
        />
      )}

      <ColorPickerModal
        visible={isColorPickerVisible}
        onClose={() => setIsColorPickerVisible(false)}
        opacity={highlightOpacity}
        onChangeOpacity={setHighlightOpacity}
        onPickColor={(c) => { /* TODO: apply highlight */ }}
      />

      <AutoScrollModal
        visible={isAutoScrollVisible}
        speed={autoScrollSpeed}
        onChangeSpeed={setAutoScrollSpeed}
        autoDetect={autoDetectSpeed}
        onToggleAutoDetect={() => setAutoDetectSpeed(!autoDetectSpeed)}
        onClose={() => setIsAutoScrollVisible(false)}
      />

      <ChaptersDrawer
        visible={isChaptersVisible}
        onClose={() => setIsChaptersVisible(false)}
        chapters={chaptersMock}
        currentId={'c6'}
        readIds={readChapterIds}
        expandedIds={expandedChapterIds}
        onToggleExpand={(id) => {
          setExpandedChapterIds((prev) => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
        }}
        onSelectChapter={(item) => {
          // TODO: scroll to chapter
          setIsChaptersVisible(false);
        }}
        currentIndex={6}
        totalCount={22}
        activeTab={drawerTab}
        onChangeTab={setDrawerTab}
        bookmarks={bookmarksMock}
      />

      {/* Модальне вікно налаштувань */}
      <SettingsModal
        visible={isSettingsModalVisible}
        onClose={() => {
          closeAllDropdowns();
          setIsSettingsModalVisible(false);
        }}
        state={{
          isDarkTheme,
          brightness,
          fontSize,
          readingMode,
          spacing,
          lineSpacing,
          selectedTheme,
          selectedFont,
          showFontDropdown,
          showSpacingDropdown,
          showLineSpacingDropdown,
          fonts,
          spacingOptions,
          lineSpacingOptions,
        }}
        setters={{
          setIsDarkTheme,
          setFontSize,
          setReadingMode,
          setSpacing,
          setLineSpacing,
          setSelectedTheme,
          setSelectedFont,
          setShowFontDropdown,
          setShowSpacingDropdown,
          setShowLineSpacingDropdown,
        }}
        isDraggingBrightness={isDraggingBrightness}
        onBrightnessStart={handleBrightnessSlideStart}
        onBrightnessChange={handleBrightnessChange}
        onBrightnessEnd={handleBrightnessSlideEnd}
      />
    </SafeAreaView>
  );
};

export default ReadingScreen;