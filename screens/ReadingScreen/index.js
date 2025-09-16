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
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
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
  const [progress, setProgress] = useState(24);
  const scrollViewRef = useRef();

  // Стани для налаштувань
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [brightness, setBrightness] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [readingMode, setReadingMode] = useState('Одна сторінка');
  const [spacing, setSpacing] = useState('Середні');
  const [lineSpacing, setLineSpacing] = useState('Звичайний');
  const [selectedTheme, setSelectedTheme] = useState('#FFFFFF');
  const [selectedFont, setSelectedFont] = useState('SF Pro');
  const [showFontDropdown, setShowFontDropdown] = useState(false);

  const bookContent = book?.content || `Вітер дув із півночі, приносячи запахи хвої, дощу й чогось неспокійного.
Марта стояла на краю скелі, і світ навколо ніби завис. У руці — старий, злегка пожестілий лист.

Вона знайшла його в книзі, яку давно не відкривала. «Ти читаєш це — значить, я зник. Але не вважай це втечею. Це — пошук. Можливо, тебе він теж чекає…»

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

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 50;
    
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
      setIsToolbarVisible(true);
    } else {
      setIsToolbarVisible(false);
    }
  };

  const increaseFontSize = () => {
    if (fontSize < 24) setFontSize(fontSize + 1);
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(fontSize - 1);
  };

  const fonts = ['SF Pro', 'Georgia', 'Times New Roman', 'Arial', 'Helvetica'];
  const spacingOptions = ['Вузькі', 'Середні', 'Широкі'];
  const lineSpacingOptions = ['Компактний', 'Звичайний', 'Подвійний'];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Верхня панель */}
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

      {/* Основний контент */}
      <ScrollView 
        ref={scrollViewRef}
        style={styles.content}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>
            {bookContent}
          </Text>
        </View>
        
        {/* Номер сторінки в кінці контенту */}
        <View style={styles.pageNumberContainer}>
          <Text style={styles.pageNumber}>{currentPage}</Text>
        </View>
      </ScrollView>

      {/* Панель інструментів (з'являється при досягненні кінця) */}
      {isToolbarVisible && (
        <View style={styles.toolbarPanel}>
          {/* Прогрес читання */}
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{progress}%</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, {width: `${progress}%`}]} />
            </View>
          </View>

          {/* Іконки інструментів */}
          <View style={styles.toolsContainer}>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={leftArrow} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={rightArrow} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={informationCircle} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={scrollVertical} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={autoScroll} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={sections} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={search} style={styles.toolIcon} />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Модальне вікно налаштувань */}
      <Modal
        visible={isSettingsModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsSettingsModalVisible(false)}
      >
        <View style={styles.settingsModalOverlay}>
          <TouchableOpacity 
            style={styles.settingsModalOverlayTouchable}
            activeOpacity={1}
            onPress={() => setIsSettingsModalVisible(false)}
          />
          <View style={styles.settingsModalContent}>
            {/* Заголовок модального вікна */}
            <View style={styles.settingsModalHeader}>
              <Text style={styles.settingsModalTitle}>Налаштування</Text>
              <TouchableOpacity 
                onPress={() => setIsSettingsModalVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Налаштування */}
            <ScrollView style={styles.settingsScrollView}>
              {/* Тема */}
              <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Тема</Text>
                <View style={styles.themeContainer}>
                  <TouchableOpacity 
                    style={[styles.themeOption, { backgroundColor: '#FFFFFF' }, selectedTheme === '#FFFFFF' && styles.themeOptionSelected]}
                    onPress={() => setSelectedTheme('#FFFFFF')}
                  />
                  <TouchableOpacity 
                    style={[styles.themeOption, { backgroundColor: '#F7F3E9' }, selectedTheme === '#F7F3E9' && styles.themeOptionSelected]}
                    onPress={() => setSelectedTheme('#F7F3E9')}
                  />
                  <TouchableOpacity 
                    style={[styles.themeOption, { backgroundColor: '#2A2D3A' }, selectedTheme === '#2A2D3A' && styles.themeOptionSelected]}
                    onPress={() => setSelectedTheme('#2A2D3A')}
                  />
                </View>
              </View>

              {/* Яскравість */}
              <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Яскравість</Text>
                <View style={styles.sliderContainer}>
                  <Image source={sunIcon} style={styles.sunIcon} />
                  <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    value={brightness}
                    onValueChange={setBrightness}
                    minimumTrackTintColor="#008655"
                    maximumTrackTintColor="#e0e0e0"
                    thumbTintColor="#008655"
                  />
                  <Text style={styles.sliderValue}>{brightness}%</Text>
                </View>
              </View>

              {/* Розмір шрифту */}
              <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Розмір шрифту</Text>
                <View style={styles.fontSizeContainer}>
                  <TouchableOpacity onPress={decreaseFontSize} style={styles.fontSizeButton}>
                    <Text style={styles.fontSizeButtonText}>Aа-</Text>
                  </TouchableOpacity>
                  <View style={styles.fontSizeDisplay}>
                    <Text style={[styles.fontSizeDisplayText, {fontSize}]}>Aа</Text>
                    <Text style={styles.fontSizeLabel}>Розмір шрифта</Text>
                    <Text style={styles.fontSizeValue}>{fontSize} px</Text>
                  </View>
                  <TouchableOpacity onPress={increaseFontSize} style={styles.fontSizeButton}>
                    <Text style={styles.fontSizeButtonText}>Aа+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Шрифти */}
              <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Шрифти</Text>
                <TouchableOpacity 
                  style={styles.dropdownPicker}
                  onPress={() => setShowFontDropdown(!showFontDropdown)}
                >
                  <Text style={styles.dropdownPickerText}>{selectedFont}</Text>
                  <Ionicons name={showFontDropdown ? "chevron-up" : "chevron-down"} size={20} color="#666" />
                </TouchableOpacity>
                {showFontDropdown && (
                  <View style={styles.dropdownOptions}>
                    {fonts.map((font) => (
                      <TouchableOpacity
                        key={font}
                        style={styles.dropdownOption}
                        onPress={() => {
                          setSelectedFont(font);
                          setShowFontDropdown(false);
                        }}
                      >
                        <Text style={styles.dropdownOptionText}>{font}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>

              {/* Режим читання */}
              <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Режим читання</Text>
                <View style={styles.readingModeContainer}>
                  <TouchableOpacity
                    style={[styles.readingModeOption, readingMode === 'Одна сторінка' && styles.readingModeOptionSelected]}
                    onPress={() => setReadingMode('Одна сторінка')}
                  >
                    <Image 
                      source={singlePageIcon} 
                      style={[
                        styles.readingModeIcon, 
                        readingMode === 'Одна сторінка' && styles.readingModeIconSelected
                      ]} 
                    />
                    <Text style={[styles.readingModeText, readingMode === 'Одна сторінка' && styles.readingModeTextSelected]}>
                      Одна сторінка
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.readingModeOption, readingMode === 'Режим прокручування' && styles.readingModeOptionSelected]}
                    onPress={() => setReadingMode('Режим прокручування')}
                  >
                    <Image 
                      source={scrollModeIcon} 
                      style={[
                        styles.readingModeIcon, 
                        readingMode === 'Режим прокручування' && styles.readingModeIconSelected
                      ]} 
                    />
                    <Text style={[styles.readingModeText, readingMode === 'Режим прокручування' && styles.readingModeTextSelected]}>
                      Режим прокручування
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Інтервал */}
              <Text style={styles.sectionLabel}>Інтервал</Text>

              {/* Поля */}
              <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Поля</Text>
                <TouchableOpacity 
                  style={styles.dropdownPicker}
                  onPress={() => setShowSpacingDropdown(!showSpacingDropdown)}
                >
                  <Text style={styles.dropdownPickerText}>{spacing}</Text>
                  <Ionicons name={showSpacingDropdown ? "chevron-up" : "chevron-down"} size={20} color="#666" />
                </TouchableOpacity>
                {showSpacingDropdown && (
                  <View style={styles.dropdownOptions}>
                    {spacingOptions.map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={styles.dropdownOption}
                        onPress={() => {
                          setSpacing(option);
                          setShowSpacingDropdown(false);
                        }}
                      >
                        <Text style={styles.dropdownOptionText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>

              {/* Міжрядковий інтервал */}
              <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Міжрядковий інтервал</Text>
                <TouchableOpacity 
                  style={styles.dropdownPicker}
                  onPress={() => setShowLineSpacingDropdown(!showLineSpacingDropdown)}
                >
                  <Text style={styles.dropdownPickerText}>{lineSpacing}</Text>
                  <Ionicons name={showLineSpacingDropdown ? "chevron-up" : "chevron-down"} size={20} color="#666" />
                </TouchableOpacity>
                {showLineSpacingDropdown && (
                  <View style={styles.dropdownOptions}>
                    {lineSpacingOptions.map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={styles.dropdownOption}
                        onPress={() => {
                          setLineSpacing(option);
                          setShowLineSpacingDropdown(false);
                        }}
                      >
                        <Text style={styles.dropdownOptionText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ReadingScreen;