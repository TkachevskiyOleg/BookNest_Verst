import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
  },
  headerLeft: {
    position: 'absolute',
    left: 16,
    padding: 6,
    height: 28,
    justifyContent: 'center',
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '700',
    color: '#0F0F0F',
    textAlignVertical: 'center',
    marginTop: 0,
  },
  titleWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    transform: [{ translateY: -13 }],
  },

  // Cards / blocks
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },

  // Simple navigation row
  row: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: {
    color: '#0F0F0F',
    fontSize: 16,
  },
  destructive: {
    color: '#ef4444',
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginLeft: 16,
  },

  // Rows with switches
  switchRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  switchRowOnly: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchTitle: {
    fontSize: 16,
    color: '#0F0F0F',
    marginBottom: 4,
    fontWeight: '600',
  },
  switchSubtitle: {
    fontSize: 12,
    color: '#8C8C8C',
    marginRight: 12,
  },

  // Logout button
  logout: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    paddingVertical: 14,
    alignItems: 'center',
  },
  logoutText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;