import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // ============== Layout & Screen ==============
  container: { flex: 1, backgroundColor: '#fff' },

  // ============== Header ==============
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerBack: { marginRight: 12, padding: 4 },
  headerTitle: { flex: 1, fontSize: 20, fontWeight: '700', color: '#0F0F0F', textAlign: 'center' },
  headerSearch: { marginLeft: 12, padding: 4 },

  // ============== Toolbar (Sort & Filter) ==============
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  topBtn: {
    flex: 1,
    height: 42,
    paddingHorizontal: 16,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BCBCBC',
  },
  topBtnText: { color: '#0F0F0F', fontWeight: '700', fontSize: 15 },

  // ============== Books grid ==============
  listContent: { paddingHorizontal: 8, paddingBottom: 24 },
  row: { justifyContent: 'space-between' },
  bookCard: {
    width: '48%',
    padding: 10,
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  bookCover: { width: 90, height: 130, borderRadius: 8, marginBottom: 8, backgroundColor: '#f5f5f5' },
  bookTitle: { fontSize: 14, fontWeight: '600', color: '#000', marginBottom: 2, textAlign: 'center' },
  bookAuthor: { fontSize: 12, color: '#666', marginBottom: 4, textAlign: 'center' },
  bookRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  bookRating: { fontSize: 12, color: '#222', marginLeft: 4, marginRight: 8 },
  bookPrice: { fontSize: 13, color: '#008655', fontWeight: '600' },

  // ============== Bottom Sheet (shared) ==============
  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.25)', justifyContent: 'flex-end' },
  sheet: { backgroundColor: '#fff', borderTopLeftRadius: 18, borderTopRightRadius: 18, maxHeight: '85%' },

  // Sheet header
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sheetBack: { padding: 6, marginRight: 8 },
  sheetTitle: { fontSize: 16, fontWeight: '700', color: '#0F0F0F' },
  clearText: { color: '#008655', fontWeight: '600' },
  sheetContent: { paddingHorizontal: 16, paddingVertical: 12, rowGap: 12 },

  // ============== Filter blocks ==============
  block: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    padding: 12,
  },
  blockTitle: { fontSize: 16, fontWeight: '700', color: '#0F0F0F', marginBottom: 10 },

  // Chips
  chipsRow: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 18,
    backgroundColor: '#EFEFEF',
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  chipActive: { backgroundColor: '#FFFFFF', borderColor: '#2E8B57', borderWidth: 2 },
  chipText: { color: '#0F0F0F', fontSize: 14, fontWeight: '600' },
  chipTextActive: { color: '#2E8B57', fontWeight: '700' },

  // Stars
  starsRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 4 },

  // Rows (Language / Publisher)
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  rowItemText: { fontSize: 16, color: '#0F0F0F', fontWeight: '700' },

  // ============== Selection screens common ==============
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f5f5f5', margin: 16, paddingHorizontal: 12, borderRadius: 10 },
  searchInput: { flex: 1, height: 40, marginLeft: 8 },
  selectRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  selectText: { fontSize: 14, color: '#222' },
  primaryBtn: { position: 'absolute', left: 16, right: 16, bottom: 24, backgroundColor: '#2E8B57', borderRadius: 24, paddingVertical: 12, alignItems: 'center' },
  primaryBtnText: { color: '#fff', fontWeight: '700' },

  // ============== Generic modal styles ==============
  modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 18, borderTopRightRadius: 18, padding: 24, alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: '700', marginBottom: 16 },
  modalClose: { marginTop: 16 },
});

export default styles;
