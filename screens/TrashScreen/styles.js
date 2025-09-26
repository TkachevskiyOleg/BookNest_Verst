import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    paddingTop: 40, paddingHorizontal: 16, paddingBottom: 12, backgroundColor: '#fff'
  },
  backButton: { position: 'absolute', left: 16, padding: 4 },
  headerRight: { position: 'absolute', right: 16, padding: 4 },
  headerTitle: { fontSize: 24, fontWeight: '700', color: '#0F0F0F' },
  autoCleanText: { color: '#8C8C8C', fontSize: 13, paddingHorizontal: 16, marginBottom: 8 },

  listContent: { paddingHorizontal: 16, paddingBottom: 80 },
  card: {
    flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, padding: 12, marginBottom: 16,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 2,
    borderWidth: 1, borderColor: '#f0f0f0', alignItems: 'center'
  },
  cover: { width: 60, height: 90, borderRadius: 8, backgroundColor: '#f5f5f5', marginRight: 16 },
  info: { flex: 1 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: '700', color: '#000', flex: 1, paddingRight: 12 },
  author: { fontSize: 14, color: '#666', marginTop: 2, marginBottom: 4 },
  pageInfo: { fontSize: 13, color: '#8C8C8C', marginBottom: 2 },
  progressBarWrapper: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  progressBarBg: { flex: 1, height: 6, backgroundColor: '#e0e0e0', borderRadius: 3, marginRight: 8 },
  progressBarFill: { height: '100%', backgroundColor: '#2E8B57', borderRadius: 3 },
  progressText: { fontSize: 12, color: '#2E8B57', fontWeight: '600', minWidth: 32, textAlign: 'right' },
  removedAgo: { fontSize: 12, color: '#8C8C8C' },

  restoreBtn: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#2E8B57', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 12 },
  restoreBtnText: { color: '#2E8B57', fontSize: 13, fontWeight: '600', marginLeft: 6 },

  rightActionContainer: {
    flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 0,
    marginRight: 16, marginLeft: -120
  },
  deleteAction: {
    width: 120, height: '90%', backgroundColor: '#ef4444', borderRadius: 12, alignItems: 'center', justifyContent: 'center',
    marginTop: -17,
  },
  deleteActionText: { color: '#fff', fontWeight: '700' },

  emptyWrapper: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 80 },
  emptyImage: { width: '80%', height: undefined, aspectRatio: 986 / 768, tintColor: '#d6d6d6' },
  emptyTitle: { marginTop: 12, fontSize: 22, fontWeight: '700', color: '#0F0F0F' },
  emptySubtitle: { marginTop: 4, fontSize: 14, color: '#8C8C8C' },

  toast: {
    position: 'absolute', left: 16, right: 16, bottom: 24, backgroundColor: '#fff', borderRadius: 12,
    paddingVertical: 16, paddingHorizontal: 16, borderTopWidth: 0, shadowColor: '#000', shadowOpacity: 0.15,
    shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 5, overflow: 'hidden',
  },
  toastText: { color: '#0F0F0F', textAlign: 'left' },
  toastProgressTrack: { position: 'absolute', left: 0, right: 0, top: 0, height: 3, backgroundColor: '#eaeaea' },
  toastProgressFill: { position: 'absolute', left: 0, top: 0, height: 3, backgroundColor: '#2E8B57' },
});

export default styles;


