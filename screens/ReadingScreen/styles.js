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
  // Панель інструментів виділення тексту
  selectionToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  selectionToolButton: {
    padding: 6,
    marginHorizontal: 4,
  },
  selectionToolIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
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
  centeredModalCard: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  // Карта вибору кольору
  colorPickerCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  paletteGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  paletteSwatch: {
    width: 44,
    height: 28,
    borderRadius: 6,
    marginBottom: 10,
  },
  colorWheel: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  opacityLabel: {
    color: '#000',
    marginBottom: 6,
  },
  colorPickerButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  colorPickerButton: {
    backgroundColor: '#008655',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  colorPickerButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  colorPickerButtonGhost: {
    backgroundColor: '#f0f0f0',
  },
  colorPickerButtonGhostText: {
    color: '#000',
    fontWeight: '700',
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
  // Загальний скрол у модалках/боковій панелі
  settingsScrollView: {
    flex: 1,
    paddingBottom: 20,
  },
  // Бічна панель: контейнер верхніх вкладок
  drawerTabsBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 12,
  },
  // Бічна панель: фон для двох вкладок (сіра планка)
  drawerTabsTrack: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    padding: 4,
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  // Бічна панель: обгортка вкладки для стабільного заокруглення
  drawerTabTouchable: {
    borderRadius: 999,
    overflow: 'hidden',
    flex: 1,
  },
  // Бічна панель: «пігулка» вкладки (активна/неактивна)
  drawerTabPill: {
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  // Бічна панель: стан активної вкладки
  drawerTabActivePill: {
    backgroundColor: '#008655',
  },
  // Бічна панель: текст активної вкладки
  drawerTabActiveText: {
    color: '#fff',
    fontWeight: '700',
  },
  // Бічна панель: текст неактивної вкладки
  drawerTabInactiveText: {
    color: '#9e9e9e',
  },
  // Бічна панель: порожній стан «Закладки»
  emptyBookmarksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Бічна панель: ілюстрація порожніх закладок
  emptyBookmarksImage: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  // Бічна панель: підпис порожнього стану
  emptyBookmarksText: {
    color: '#000',
    fontSize: 16,
  },
  // Бічна панель: картка закладки/коментаря/виділення
  bookmarkCard: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  // Бічна панель: заголовок картки
  bookmarkTitle: {
    fontWeight: '700',
    color: '#000',
    marginBottom: 6,
  },
  // Бічна панель: мета-інфо праворуч (сторінка тощо)
  bookmarkMeta: {
    color: '#666',
  },
  // Бічна панель: текст уривку/коментаря
  bookmarkText: {
    color: '#0a8f5b',
  },
  // Бічна панель: нижній рядок з лічильником «Розділ X з Y»
  drawerFooter: {
    paddingTop: 8,
    paddingBottom: 12,
    alignItems: 'flex-start',
  },
  // Бічна панель: стиль тексту лічильника
  drawerFooterText: {
    color: '#008655',
  },
  settingItem: {
    marginBottom: 24,
    position: 'relative',
    zIndex: 1,
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
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  dropdownPickerText: {
    fontSize: 16,
    color: '#000',
  },
  dropdownOptions: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    marginTop: 6,
    backgroundColor: '#fff',
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 0,
  },
  dropdownOption: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownOptionSelected: {
    backgroundColor: '#ffffffff',
    borderRadius: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  dropdownOptionTextSelected: {
    color: '#008655',
    fontWeight: '700',
  },
  optionListCheckmark: {
    marginLeft: 10,
    color: '#008655',
  },
  // Режим читання
  readingModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  readingModeOption: {
    flex: 1,
    padding: 10,
    marginHorizontal: 2,
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