import React, { useMemo, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Modal, Dimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import styles from './styles';

const iconAudio = require('../../assets/Audio_Books.png');
const iconSaved = require('../../assets/Save.png');
const iconDownloaded = require('../../assets/Dowload_Android.png');
const iconPostponed = require('../../assets/Vidckad.png');

// Action icons
const pinPng = require('../../assets/Zakrep_Colection.png');
const editPng = require('../../assets/Redakt_colection.png');
const deletePng = require('../../assets/Delete_Colection.png');

// Image icons for custom collections
const iconMap = {
  audio: require('../../assets/Audio_Books.png'),
  download: require('../../assets/Dowload_Android.png'),
  postponed: require('../../assets/Vidckad.png'),
  saved: require('../../assets/Save.png'),
  baby: require('../../assets/Colection_Baby.png'),
  book: require('../../assets/Colection_Book.png'),
  coffee: require('../../assets/Colection_coffe.png'),
  death: require('../../assets/Colection_Deat.png'),
  fire: require('../../assets/Colection_Fire.png'),
  flag: require('../../assets/Colection_Flag.png'),
  love: require('../../assets/Colection_Love.png'),
  money: require('../../assets/Colection_Mone.png'),
  frost: require('../../assets/Colection_Moroz.png'),
  night: require('../../assets/Colection_Niht.png'),
  pc: require('../../assets/Colection_Pc.png'),
  cookie: require('../../assets/Colection_Pechenka.png'),
  rating: require('../../assets/Colection_Reting.png'),
  zorepad: require('../../assets/Colection_zorepad.png'),
};

const systemRows = [
  { id: 'audio', title: 'Аудіо книги', icon: iconAudio, route: 'CollectionAudio' },
  { id: 'saved', title: 'Збережені', icon: iconSaved, route: 'CollectionSaved' },
  { id: 'downloaded', title: 'Завантажені на пристрій', icon: iconDownloaded, route: 'CollectionDownloaded' },
  { id: 'postponed', title: 'Відкладені', icon: iconPostponed, route: 'CollectionPostponed' },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ICON_COLS = 6;
const ICON_GAP = 12;
// Account for sheet padding (16*2) and block padding (12*2)
const AVAILABLE_WIDTH = SCREEN_WIDTH - 32 - 24;
const ICON_PILL_SIZE = Math.floor((AVAILABLE_WIDTH - ICON_GAP * (ICON_COLS - 1)) / ICON_COLS);

const CollectionsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [search, setSearch] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [nameDraft, setNameDraft] = useState('');
  const [iconDraft, setIconDraft] = useState('audio');
  const [colorDraft, setColorDraft] = useState('#2E8B57');
  const [pinnedDraft, setPinnedDraft] = useState(false);

  const [collections, setCollections] = useState([]);

  // Sort modal state
  const [isSortVisible, setIsSortVisible] = useState(false);
  const SORT_OPTIONS = [
    { key: 'title', label: 'Назва (за алфавітом)' },
    { key: 'updated', label: 'За датою оновлення' },
    { key: 'created', label: 'За датою додавання' },
    { key: 'count', label: 'За кількістю книг у колекції' },
  ];
  const [sortKey, setSortKey] = useState('title');
  const [sortDir, setSortDir] = useState('asc');

  const iconChoices = Object.keys(iconMap);
  const colorChoices = ['#000000', '#9e9e9e', '#e5e7eb', '#22c55e', '#ef4444', '#f59e0b', '#6366f1'];

  const filteredCollections = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = collections;
    // basic sort implementation
    list = [...list].sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'title') cmp = a.title.localeCompare(b.title);
      else if (sortKey === 'updated') cmp = (b.updatedAt || 0) - (a.updatedAt || 0);
      else if (sortKey === 'created') cmp = (b.createdAt || 0) - (a.createdAt || 0);
      else if (sortKey === 'count') cmp = (b.count || 0) - (a.count || 0);
      return sortDir === 'asc' ? cmp : -cmp;
    });
    if (!q) return list;
    return list.filter(c => c.title.toLowerCase().includes(q));
  }, [search, collections, sortKey, sortDir]);

  const chunk = (arr, size) => arr.reduce((rows, key, idx) => {
    if (idx % size === 0) rows.push([key]); else rows[rows.length - 1].push(key);
    return rows;
  }, []);

  const openCreate = () => {
    setEditingId(null);
    setNameDraft('');
    setIconDraft('audio');
    setColorDraft('#2E8B57');
    setPinnedDraft(false);
    setIsModalVisible(true);
  };

  const openEdit = (item) => {
    setEditingId(item.id);
    setNameDraft(item.title);
    setIconDraft(item.icon);
    setColorDraft(item.color);
    setPinnedDraft(!!item.pinned);
    setIsModalVisible(true);
  };

  const saveCollection = () => {
    if (!nameDraft.trim()) { setIsModalVisible(false); return; }
    const timestamps = { updatedAt: Date.now() };
    if (editingId) {
      setCollections(prev => prev.map(c => c.id === editingId ? { ...c, title: nameDraft.trim(), icon: iconDraft, color: colorDraft, pinned: pinnedDraft, ...timestamps } : c));
    } else {
      const id = `${Date.now()}`;
      setCollections(prev => [{ id, title: nameDraft.trim(), icon: iconDraft, color: colorDraft, pinned: pinnedDraft, count: 0, createdAt: Date.now(), updatedAt: Date.now() }, ...prev]);
    }
    setIsModalVisible(false);
  };

  const togglePin = (id) => {
    setCollections(prev => prev.map(c => c.id === id ? { ...c, pinned: !c.pinned, updatedAt: Date.now() } : c));
  };

  const deleteCollection = (id) => {
    setCollections(prev => prev.filter(c => c.id !== id));
  };

  const renderLeftActions = (item) => (
    <View style={styles.leftActions}>
      <TouchableOpacity
        style={[styles.actionPill, styles.actionPin, { backgroundColor: '#22c55e' }]}
        onPress={() => togglePin(item.id)}
        activeOpacity={0.85}
      >
        <Image source={pinPng} style={{ width: 20, height: 20, tintColor: '#fff', resizeMode: 'contain' }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionPill, styles.actionEdit, { backgroundColor: '#2563eb' }]}
        onPress={() => openEdit(item)}
        activeOpacity={0.85}
      >
        <Image source={editPng} style={{ width: 20, height: 20, tintColor: '#fff', resizeMode: 'contain' }} />
      </TouchableOpacity>
    </View>
  );

  const renderRightActions = (item) => (
    <View style={styles.rightActions}>
      <TouchableOpacity
        style={styles.actionDelete}
        onPress={() => deleteCollection(item.id)}
        activeOpacity={0.85}
      >
        <Image source={deletePng} style={{ width: 22, height: 22, tintColor: '#fff', resizeMode: 'contain' }} />
      </TouchableOpacity>
    </View>
  );

  const pinned = filteredCollections.filter(c => c.pinned);
  const others = filteredCollections.filter(c => !c.pinned);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="#0F0F0F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Колекції</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => setIsSortVisible(true)} style={{ marginRight: 16 }}>
            <Ionicons name="swap-vertical" size={20} color="#0F0F0F" />
          </TouchableOpacity>
          <TouchableOpacity onPress={openCreate}>
            <Ionicons name="add" size={22} color="#0F0F0F" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#666" />
        <TextInput style={styles.searchInput} placeholder="Пошук" placeholderTextColor="#9e9e9e" value={search} onChangeText={setSearch} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 + insets.bottom }}>
        {collections.map(item => (
          <Swipeable
            key={item.id}
            renderLeftActions={() => renderLeftActions(item)}
            renderRightActions={() => renderRightActions(item)}
            overshootLeft={false}
            overshootRight={false}
            friction={2}
            leftThreshold={1}
            rightThreshold={24}
          >
            <View style={styles.row}> 
              <View style={styles.rowLeft}>
                <View style={[styles.rowIconCircle, { backgroundColor: item.color }] }>
                  {iconMap[item.icon] ? (
                    <Image source={iconMap[item.icon]} style={{ width: 18, height: 18, tintColor: '#fff', resizeMode: 'contain' }} />
                  ) : (
                    <Ionicons name={item.icon} size={18} color="#fff" />
                  )}
                </View>
                <View>
                  <Text style={styles.rowTitle}>{item.title}</Text>
                  <Text style={styles.rowSubtitle}>{item.count}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#888" />
            </View>
          </Swipeable>
        ))}

        {systemRows.map(row => (
          <TouchableOpacity key={row.id} style={styles.row} onPress={() => navigation.navigate(row.route)}>
            <View style={styles.rowLeft}>
              <Image source={row.icon} style={styles.rowIcon} />
              <View>
                <Text style={styles.rowTitle}>{row.title}</Text>
                <Text style={styles.rowSubtitle}>0</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Sort modal */}
      <Modal visible={isSortVisible} transparent animationType="slide" onRequestClose={() => setIsSortVisible(false)}>
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => setIsSortVisible(false)} />
          <View style={[styles.sheet, { paddingBottom: 16 + insets.bottom }]}>
            <View style={styles.sheetHandle} />
            <View style={styles.sheetHeaderRow}>
              <TouchableOpacity onPress={() => setIsSortVisible(false)} style={{ padding: 4 }}>
                <Ionicons name="chevron-back" size={22} color="#0F0F0F" />
              </TouchableOpacity>
              <Text style={styles.sheetTitle}>Сортування</Text>
              <TouchableOpacity onPress={() => setSortDir(prev => prev === 'asc' ? 'desc' : 'asc')} style={{ padding: 4 }}>
                <Ionicons name={sortDir === 'asc' ? 'arrow-up' : 'arrow-down'} size={20} color="#2E8B57" />
              </TouchableOpacity>
            </View>
            {SORT_OPTIONS.map(opt => {
              const active = sortKey === opt.key;
              return (
                <TouchableOpacity key={opt.key} style={styles.sortRow} onPress={() => setSortKey(opt.key)}>
                  <Text style={styles.sortText}>{opt.label}</Text>
                  <View style={[styles.radioOuter, active && { borderColor: '#2E8B57' }]}>
                    {active && <View style={styles.radioInner} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>

      {/* Bottom sheet modal for create/edit */}
      <Modal transparent visible={isModalVisible} animationType="slide" onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => setIsModalVisible(false)} />
          <View style={[styles.sheet, { paddingBottom: 16 + insets.bottom }]}>
            <View style={styles.sheetHandle} />
            <View style={styles.sheetHeaderRow}>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Text style={styles.sheetHeaderBtn}>Скасувати</Text>
              </TouchableOpacity>
              <Text style={styles.sheetTitle}>Нова колекція</Text>
              <TouchableOpacity onPress={saveCollection}>
                <Text style={[styles.sheetHeaderBtn, { color: '#2E8B57' }]}>Зберегти</Text>
              </TouchableOpacity>
            </View>
            <TextInput value={nameDraft} onChangeText={setNameDraft} placeholder="Назва колекції" style={styles.nameInput} />

            <View style={styles.blockBox}>
              <Text style={styles.blockTitle}>Обрати іконку</Text>
              {chunk(iconChoices, ICON_COLS).map((rowKeys, rowIdx) => (
                <View key={`r-${rowIdx}`} style={{ flexDirection: 'row', marginBottom: rowIdx === iconChoices.length - 1 ? 0 : ICON_GAP }}>
                  {rowKeys.map((key, idx) => {
                    const active = iconDraft === key;
                    const isLast = idx === rowKeys.length - 1;
                    return (
                      <TouchableOpacity
                        key={key}
                        style={[styles.iconPill, active && styles.iconPillActive, { width: ICON_PILL_SIZE, height: ICON_PILL_SIZE, marginRight: isLast ? 0 : ICON_GAP }]}
                        onPress={() => setIconDraft(key)}
                      >
                        <Image source={iconMap[key]} style={{ width: 18, height: 18, tintColor: active ? '#fff' : '#0F0F0F', resizeMode: 'contain' }} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ))}
            </View>

            <View style={styles.blockBox}>
              <Text style={styles.blockTitle}>Обрати колір теми</Text>
              <View style={styles.colorRow}>
                {colorChoices.map(c => {
                  const active = colorDraft === c;
                  return (
                    <TouchableOpacity key={c} style={[styles.colorDot, { backgroundColor: c }, active && styles.colorDotActive]} onPress={() => setColorDraft(c)} />
                  );
                })}
              </View>
            </View>

            <TouchableOpacity style={styles.pinRow} onPress={() => setPinnedDraft(v => !v)}>
              <View style={[styles.checkbox, pinnedDraft && styles.checkboxChecked]}>
                {pinnedDraft && <Ionicons name="checkmark" size={14} color="#fff" />}
              </View>
              <Text style={styles.pinLabel}>Закріпити</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CollectionsScreen;


