import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    position: 'relative',
  },
  headerChapter: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  iconButton: {
    padding: 4,
    zIndex: 1,
  },
  content: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 40,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
    textAlign: 'justify',
  },
  pageNumberContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'flex-end',
  },
  pageNumber: {
    fontSize: 16,
    color: '#000',
  },
  // Стилі для панелі інструментів
  toolbarPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    paddingBottom: 30,
    // Тінь для кращого вигляду
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: '#008655',
    textAlign: 'right',
    marginBottom: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#008655',
  },
  toolsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  toolIcon: {
    width: 24,
    height: 24,
  },
  // Стилі для модального вікна налаштувань
  settingsModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  settingsModalOverlayTouchable: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  settingsModalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    maxHeight: height * 0.85,
  },
  settingsModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingsModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  closeButton: {
    padding: 4,
  },
  settingsScrollView: {
    flex: 1,
  },
  settingItem: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 16,
    color: '#000',
    marginBottom: 12,
    fontWeight: '500',
    marginTop: 8,
  },
  settingLabel: {
    fontSize: 16,
    color: '#000',
    marginBottom: 12,
    fontWeight: '500',
  },
  // Теми
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 1,
    marginBottom: 8,
  },
  themeOption: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginHorizontal: 5,
  },
  themeOptionSelected: {
    borderWidth: 2,
    borderColor: '#008655',
  },
  // Яскравість
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sunIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  sliderValue: {
    fontSize: 16,
    color: '#000',
    minWidth: 40,
    textAlign: 'center',
  },
  // Розмір шрифту
  fontSizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  fontSizeButton: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  fontSizeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  fontSizeDisplay: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  fontSizeDisplayText: {
    color: '#000',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  fontSizeLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  fontSizeValue: {
    fontSize: 14,
    color: '#666',
  },
  // Шрифти та випадаючі списки
  dropdownPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
  },
  dropdownPickerText: {
    fontSize: 16,
    color: '#000',
  },
  dropdownOptions: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  dropdownOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  dropdownOptionText: {
    fontSize: 16,
    color: '#000',
  },
  // Режим читання
  readingModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  readingModeOption: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
  },
  readingModeOptionSelected: {
    backgroundColor: '#008655',
    borderColor: '#008655',
  },
  readingModeIcon: {
    width: 24,
    height: 24,
    marginBottom: 8,
    tintColor: '#000',
  },
  readingModeIconSelected: {
    tintColor: '#fff',
  },
  readingModeText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  readingModeTextSelected: {
    color: '#fff',
  },
});

export default styles;