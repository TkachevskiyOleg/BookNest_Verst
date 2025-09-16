import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import styles from './styles';

const sunIcon = require('../../assets/sun-icon.png');
const singlePageIcon = require('../../assets/Book.png');
const scrollModeIcon = require('../../assets/scroll-mode-icon.png');

const SettingsModal = ({
  visible,
  onClose,
  state,
  setters,
  isDraggingBrightness,
  onBrightnessStart,
  onBrightnessChange,
  onBrightnessEnd,
}) => {
  const {
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
  } = state;

  const {
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
  } = setters;

  const increaseFontSize = () => {
    if (fontSize < 24) setFontSize(fontSize + 1);
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(fontSize - 1);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.settingsModalOverlay}>
        <TouchableOpacity style={styles.settingsModalOverlayTouchable} activeOpacity={1} onPress={onClose} />
        <View style={styles.settingsModalContent}>
          <View style={styles.settingsModalHeader}>
            <Text style={styles.settingsModalTitle}>Налаштування</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.settingsScrollView} keyboardShouldPersistTaps="handled" scrollEnabled={!isDraggingBrightness}>
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
                  onValueChange={onBrightnessChange}
                  onSlidingStart={onBrightnessStart}
                  onSlidingComplete={onBrightnessEnd}
                  minimumTrackTintColor="#008655"
                  maximumTrackTintColor="#e0e0e0"
                  thumbTintColor="#008655"
                />
                <Text style={styles.sliderValue}>{Math.round(brightness)}%</Text>
              </View>
            </View>

            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Розмір шрифту</Text>
              <View style={styles.fontSizeContainer}>
                <TouchableOpacity onPress={decreaseFontSize} style={styles.fontSizeButton}>
                  <Text style={styles.fontSizeButtonText}>Aа-</Text>
                </TouchableOpacity>
                <View style={styles.fontSizeDisplay}>
                  <Text style={[styles.fontSizeDisplayText, { fontSize }]}>Aа</Text>
                  <Text style={styles.fontSizeLabel}>Розмір шрифта</Text>
                  <Text style={styles.fontSizeValue}>{fontSize} px</Text>
                </View>
                <TouchableOpacity onPress={increaseFontSize} style={styles.fontSizeButton}>
                  <Text style={styles.fontSizeButtonText}>Aа+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Шрифти</Text>
              <TouchableOpacity
                style={styles.dropdownPicker}
                onPress={() => {
                  setShowFontDropdown(!showFontDropdown);
                  setShowSpacingDropdown(false);
                  setShowLineSpacingDropdown(false);
                }}
              >
                <Text style={styles.dropdownPickerText}>{selectedFont}</Text>
                <Ionicons name={showFontDropdown ? 'chevron-up' : 'chevron-down'} size={20} color="#666" />
              </TouchableOpacity>
              {showFontDropdown && (
                <View style={styles.dropdownOptions}>
                  {state.fonts.map((font) => (
                    <TouchableOpacity
                      key={font}
                      style={[styles.dropdownOption, selectedFont === font && styles.dropdownOptionSelected]}
                      onPress={() => {
                        setSelectedFont(font);
                        setShowFontDropdown(false);
                      }}
                    >
                      <Text style={[styles.dropdownOptionText, selectedFont === font && styles.dropdownOptionTextSelected]}>
                        {font}
                      </Text>
                      {selectedFont === font && (
                        <Ionicons name="checkmark" size={20} color="#008655" style={styles.optionListCheckmark} />
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Режим читання</Text>
              <View style={styles.readingModeContainer}>
                <TouchableOpacity
                  style={[styles.readingModeOption, readingMode === 'Одна сторінка' && styles.readingModeOptionSelected]}
                  onPress={() => setReadingMode('Одна сторінка')}
                >
                  <Image
                    source={singlePageIcon}
                    style={[styles.readingModeIcon, readingMode === 'Одна сторінка' && styles.readingModeIconSelected]}
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
                    style={[styles.readingModeIcon, readingMode === 'Режим прокручування' && styles.readingModeIconSelected]}
                  />
                  <Text style={[styles.readingModeText, readingMode === 'Режим прокручування' && styles.readingModeTextSelected]}>
                    Режим прокручування
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.sectionLabel}>Інтервал</Text>

            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Поля</Text>
              <TouchableOpacity
                style={styles.dropdownPicker}
                onPress={() => {
                  setShowSpacingDropdown(!showSpacingDropdown);
                  setShowFontDropdown(false);
                  setShowLineSpacingDropdown(false);
                }}
              >
                <Text style={styles.dropdownPickerText}>{spacing}</Text>
                <Ionicons name={showSpacingDropdown ? 'chevron-up' : 'chevron-down'} size={20} color="#666" />
              </TouchableOpacity>
              {showSpacingDropdown && (
                <View style={styles.dropdownOptions}>
                  {state.spacingOptions.map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={[styles.dropdownOption, spacing === option && styles.dropdownOptionSelected]}
                      onPress={() => {
                        setSpacing(option);
                        setShowSpacingDropdown(false);
                      }}
                    >
                      <Text style={[styles.dropdownOptionText, spacing === option && styles.dropdownOptionTextSelected]}>
                        {option}
                      </Text>
                      {spacing === option && (
                        <Ionicons name="checkmark" size={20} color="#008655" style={styles.optionListCheckmark} />
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            <View style={[styles.settingItem, { marginBottom: 40 }]}>
              <Text style={styles.settingLabel}>Міжрядковий інтервал</Text>
              <TouchableOpacity
                style={styles.dropdownPicker}
                onPress={() => {
                  setShowLineSpacingDropdown(!showLineSpacingDropdown);
                  setShowFontDropdown(false);
                  setShowSpacingDropdown(false);
                }}
              >
                <Text style={styles.dropdownPickerText}>{lineSpacing}</Text>
                <Ionicons name={showLineSpacingDropdown ? 'chevron-up' : 'chevron-down'} size={20} color="#666" />
              </TouchableOpacity>
              {showLineSpacingDropdown && (
                <View style={styles.dropdownOptions}>
                  {state.lineSpacingOptions.map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={[styles.dropdownOption, lineSpacing === option && styles.dropdownOptionSelected]}
                      onPress={() => {
                        setLineSpacing(option);
                        setShowLineSpacingDropdown(false);
                      }}
                    >
                      <Text style={[styles.dropdownOptionText, lineSpacing === option && styles.dropdownOptionTextSelected]}>
                        {option}
                      </Text>
                      {lineSpacing === option && (
                        <Ionicons name="checkmark" size={20} color="#008655" style={styles.optionListCheckmark} />
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;


