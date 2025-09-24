import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 40,
    flex: 1,
    marginLeft: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  contentScroll: {
    flex: 1,
  },
  recommendedSection: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  recommendedCard: {
    backgroundColor: '#008655',
    borderRadius: 12,
    padding: 20,
  },
  recommendedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  recommendedLabel: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  recommendedContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendedInfo: {
    flex: 1,
    marginRight: 16,
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  recommendedAuthor: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 8,
  },
  recommendedRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingValue: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 4,
    marginRight: 8,
  },
  reviews: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.7,
  },
  recommendedCover: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  categoriesWrapper: {
    height: 50,
    marginVertical: 16,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    marginRight: 8,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButtonActive: {
    backgroundColor: '#2E8B57',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
    currentReadingSection: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  currentReadingCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  currentReadingCover: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  currentReadingInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  currentReadingTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  currentReadingAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    marginRight: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2E8B57',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#2E8B57',
    fontWeight: '600',
  },
  pageInfo: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  continueButton: {
    backgroundColor: '#2E8B57',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  seeAll: {
    fontSize: 14,
    color: '#2E8B57',
    fontWeight: '500',
  },
  horizontalBooksContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  bookItem: {
    width: 160,
    marginRight: 16,
  },
  bookCover: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    marginBottom: 8,
  },
  bookInfo: {
    paddingHorizontal: 4,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
    lineHeight: 18,
  },
  bookAuthor: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
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
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 10,
    color: '#2E8B57',
    marginTop: 4,
  },
});

export default styles;