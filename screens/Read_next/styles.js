import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    position: 'relative',
  },
  backButton: {
    position: 'absolute', 
    left: 16,
    padding: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F0F0F',
    textAlign: 'center',
  },
  listContent: {
    padding: 16,
    paddingBottom: 80,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    alignItems: 'center',
    marginHorizontal: 0,
  },
  cover: {
    width: 60,
    height: 90,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 2,
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  pageInfo: {
    fontSize: 13,
    color: '#8C8C8C', 
    marginBottom: 2,
  },
  progressBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  progressBarBg: {
    flex: 1,
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    marginRight: 8,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2E8B57',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#2E8B57',
    fontWeight: '600',
    minWidth: 32,
    textAlign: 'right',
  },
  continueButtonText: {
    color: '#2E8B57', 
    fontSize: 14,
    fontWeight: '600',
  },
  // Left swipe single button
  leftActionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
    marginLeft: 16,   // екранний відступ
    marginRight: -120, // накладання картки на кнопку без проміжку
  },
  pinAction: {
    flexDirection: 'column',
    width: 120,
    height: '90%',
    backgroundColor: '#2E8B57',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinActionText: { color: '#fff', fontWeight: '700' },

  // Right swipe single button
  rightActionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 0,
    marginRight: 16,  // екранний відступ
    marginLeft: -120,  // накладання картки на кнопку без проміжку
  },
  deleteAction: {
    width: 120,
    height: '90%',
    backgroundColor: '#ef4444',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteActionText: { color: '#fff', fontWeight: '700' },

  // Toast
  toast: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  toastText: { color: '#0F0F0F', textAlign: 'center' },
});

export default styles;