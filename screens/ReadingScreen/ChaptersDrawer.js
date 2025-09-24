import React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const emptyBookmarksIllustration = require('../../assets/Ecran_Libery.png');

const ChaptersDrawer = ({ visible, onClose, chapters = [], currentId, readIds = [], onSelectChapter, expandedIds = [], onToggleExpand, currentIndex = 0, totalCount = 0, activeTab = 'chapters', onChangeTab, bookmarks = [] }) => {
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.settingsModalOverlay}>
        <TouchableOpacity style={styles.settingsModalOverlayTouchable} activeOpacity={1} onPress={onClose} />
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '85%',
          backgroundColor: '#fff',
          padding: 16,
          paddingBottom: 16 + (insets?.bottom || 0),
          elevation: 6,
          shadowColor: '#000',
          shadowOffset: { width: 2, height: 0 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        }}> 
          <View style={styles.drawerTabsBar}>
            <View style={styles.drawerTabsTrack}>
              <TouchableOpacity style={styles.drawerTabTouchable} activeOpacity={1} onPress={() => onChangeTab && onChangeTab('chapters')}>
                <View style={[styles.drawerTabPill, activeTab === 'chapters' && styles.drawerTabActivePill]}>
                  <Text style={activeTab === 'chapters' ? styles.drawerTabActiveText : styles.drawerTabInactiveText}>Розділи</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerTabTouchable} activeOpacity={1} onPress={() => onChangeTab && onChangeTab('bookmarks')}>
                <View style={[styles.drawerTabPill, activeTab === 'bookmarks' && styles.drawerTabActivePill]}>
                  <Text style={activeTab === 'bookmarks' ? styles.drawerTabActiveText : styles.drawerTabInactiveText}>Закладки</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {activeTab === 'chapters' ? (
            <ScrollView style={styles.settingsScrollView}>
              {chapters.map((ch) => {
                const isRead = readIds.includes(ch.id);
                const isCurrent = currentId === ch.id;
                const isExpanded = expandedIds.includes(ch.id);
                return (
                  <View key={ch.id} style={{ marginBottom: 8 }}>
                    <TouchableOpacity
                      style={[styles.dropdownPicker, isCurrent && { borderColor: '#008655' }, isRead && { opacity: 0.6 }]}
                      onPress={() => onSelectChapter(ch)}
                    >
                      <Text style={[styles.dropdownPickerText, isCurrent && { color: '#008655', fontWeight: '700' }]}>
                        {ch.title}
                      </Text>
                      {ch.children && ch.children.length > 0 && (
                        <TouchableOpacity onPress={() => onToggleExpand(ch.id)}>
                          <Ionicons name={isExpanded ? 'chevron-up' : 'chevron-down'} size={20} color="#666" />
                        </TouchableOpacity>
                      )}
                    </TouchableOpacity>
                    {isExpanded && ch.children && ch.children.length > 0 && (
                      <View style={{ marginLeft: 16, marginTop: 8 }}>
                        {ch.children.map((sub) => {
                          const subRead = readIds.includes(sub.id);
                          const subCurrent = currentId === sub.id;
                          return (
                            <TouchableOpacity key={sub.id} style={{ paddingVertical: 8 }} onPress={() => onSelectChapter(sub)}>
                              <Text style={{
                                color: subCurrent ? '#008655' : '#000',
                                fontWeight: subCurrent ? '700' : '400',
                                opacity: subRead ? 0.6 : 1,
                              }}>
                                ↳ {sub.title}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    )}
                  </View>
                );
              })}
            </ScrollView>
          ) : (
            <View style={styles.settingsScrollView}>
              {(!bookmarks || bookmarks.length === 0) ? (
                <View style={styles.emptyBookmarksContainer}>
                  <Image source={emptyBookmarksIllustration} style={styles.emptyBookmarksImage} />
                  <Text style={styles.emptyBookmarksText}>Закладок поки що немає</Text>
                </View>
              ) : (
                <ScrollView>
                  {bookmarks.map((bm) => (
                    <View key={bm.id} style={styles.bookmarkCard}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.bookmarkTitle}>{bm.type}</Text>
                        <Text style={styles.bookmarkMeta}>{bm.meta}</Text>
                      </View>
                      <Text style={styles.bookmarkText}>{bm.text}</Text>
                    </View>
                  ))}
                </ScrollView>
              )}
            </View>
          )}
          <View style={styles.drawerFooter}>
            <Text style={styles.drawerFooterText}>Розділ {currentIndex} з {totalCount}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChaptersDrawer;


