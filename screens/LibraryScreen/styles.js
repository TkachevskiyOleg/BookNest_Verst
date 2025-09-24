import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 16 * 2 - 12) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchStub: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 36,
    flex: 1,
    marginLeft: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#111',
  },
  searchStubText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 14,
  },
  topIcons: {
    flexDirection: 'row',
    marginLeft: 12,
  },
  topIcon: {
    marginRight: 10,
  },
  segmentTrack: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    marginTop: 8,
    backgroundColor: '#d9d9d9',
    marginHorizontal: 12,
    borderRadius: 14,
    height: 48,
    alignItems: 'center',
  },
  segmentPill: {
    flex: 1,
    height: 40,
    marginHorizontal: 6,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentPillActive: {
    backgroundColor: '#fff',
  },
  segmentPillFirst: {
  },
  segmentPillLast: {
  },
  segmentLabel: {
    fontSize: 16,
    color: '#8a8a8a',
    fontWeight: '700',
  },
  segmentLabelActive: {
    color: '#1a1a1a',
  },
  filtersRow: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
  },
  filterChip: {
    paddingHorizontal: 18,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterChipActive: {
    backgroundColor: '#008655',
    borderColor: '#008655',
  },
  filterText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    lineHeight: 18,
  },
  filterTextActive: {
    color: '#fff',
    lineHeight: 18,
  },
  grid: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 76,
  },
  gridRow: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  cardCover: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    marginBottom: 8,
  },
  coverRaised: { zIndex: 2, elevation: 3 },
  cardTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
    marginBottom: 6,
  },
  cardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2E8B57',
  },
  cardMetaText: {
    fontSize: 12,
    color: '#2E8B57',
    marginLeft: 6,
  },
  bottomSpacer: {
    height: 1,
  },

  // List header
  listHeaderRow: {
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 12,
  },
  listHeaderTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },

  // Bottom sheets
  sheetOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 20,
  },
  sheetHandle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
    marginTop: 8,
    marginBottom: 8,
  },
  sheetHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },
  clearText: {
    fontSize: 14,
    color: '#2E8B57',
    fontWeight: '600',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 52,
  },
  rowBlock: {
    marginHorizontal: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    marginBottom: 10,
  },
  optionRight: { flexDirection: 'row', alignItems: 'center', maxWidth: '60%' },
  optionValue: { color: '#9b9b9b', marginRight: 10 },
  optionText: {
    fontSize: 14,
    color: '#222',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2E8B57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2E8B57',
  },

  actionsOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  actionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    maxHeight: 370,
    width: 280,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },

  actionsHeaderTitle: {
    alignItems: 'center',
    marginBottom: 6,
    width: '100%',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  actionsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F0F0F',
    textAlign: 'center',
    marginBottom: 4,
  },
  actionsSubtitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
    textAlign: 'center',
  },
  actionsList: {
    paddingTop: 4,
    alignSelf: 'stretch'
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  actionRowLast: {
    borderBottomWidth: 0
  },
  actionText: {
    fontSize: 15,
    color: '#0F0F0F',
    fontWeight: '600',
  },
  actionTextDestructive: {
    color: '#d62f2f'
  },

  // Bottom nav
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    height: 60,
  },
  navItem: { alignItems: 'center', flex: 1 },
  navText: { fontSize: 10, color: '#666', marginTop: 4 },
  navTextActive: { fontSize: 10, color: '#2E8B57', marginTop: 4 },

  // Picker common styles
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 16,
    marginBottom: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  searchInputPicker: {
    flex: 1,
    height: 40,
    marginLeft: 8,
  },
  pickerList: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    maxHeight: '60%',
  },
  selectRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectText: {
    fontSize: 14,
    color: '#222',
  },
  primaryBtn: {
    alignSelf: 'stretch',
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#2E8B57',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default styles;