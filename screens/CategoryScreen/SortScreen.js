import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const OPTIONS = [
  { key: 'title', label: 'Назва книги (за алфавітом)' },
  { key: 'author', label: 'Автор (за алфавітом)' },
  { key: 'new', label: 'За новизною' },
  { key: 'popular', label: 'За популярністю' },
  { key: 'pages', label: 'За кількістю сторінок' },
  { key: 'reviews', label: 'За кількістю відгуків' },
];

const SortScreen = ({ navigation, route }) => {
  const { selectedKey = 'popular', direction = 'desc' } = route.params || {};
  const [keySel, setKeySel] = useState(selectedKey);
  const [dir, setDir] = useState(direction); // 'asc' | 'desc'

  const done = () => {
    navigation.navigate({ name: 'Category', params: { sort: { key: keySel, direction: dir } }, merge: true });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerBack}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Сортування</Text>
        <TouchableOpacity onPress={() => setDir(prev => (prev === 'asc' ? 'desc' : 'asc'))}>
          <Ionicons name={dir === 'asc' ? 'arrow-up' : 'arrow-down'} size={22} color="#2E8B57" />
        </TouchableOpacity>
      </View>

      {OPTIONS.map(opt => (
        <TouchableOpacity key={opt.key} style={styles.selectRow} onPress={() => setKeySel(opt.key)}>
          <Text style={styles.selectText}>{opt.label}</Text>
          <Ionicons name={keySel === opt.key ? 'radio-button-on' : 'radio-button-off'} size={20} color={keySel === opt.key ? '#2E8B57' : '#666'} />
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.primaryBtn} onPress={done}>
        <Text style={styles.primaryBtnText}>Готово</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SortScreen;
