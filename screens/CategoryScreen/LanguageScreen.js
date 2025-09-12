import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const ALL_LANGUAGES = [
  'English','中文','Español','Français','Deutsch','Português','Italiano','Nederlands','Svenska','Dansk','Norsk','日本語'
];

const LanguageScreen = ({ navigation, route }) => {
  const { selected = [] } = route.params || {};
  const [query, setQuery] = useState('');
  const [picked, setPicked] = useState(new Set(selected));

  const data = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_LANGUAGES;
    return ALL_LANGUAGES.filter(x => x.toLowerCase().includes(q));
  }, [query]);

  const toggle = (lang) => {
    setPicked(prev => {
      const next = new Set(prev);
      if (next.has(lang)) next.delete(lang); else next.add(lang);
      return next;
    });
  };

  const done = () => {
    navigation.navigate({
      name: 'Category',
      params: { languages: Array.from(picked) },
      merge: true,
    });
  };

  const renderItem = ({ item }) => {
    const checked = picked.has(item);
    return (
      <TouchableOpacity style={styles.selectRow} onPress={() => toggle(item)}>
        <Text style={styles.selectText}>{item}</Text>
        <Ionicons name={checked ? 'checkbox' : 'square-outline'} size={20} color={checked ? '#2E8B57' : '#666'} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerBack}>
          <Ionicons name="chevron-back" size={22} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Мова</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#666" />
        <TextInput style={styles.searchInput} placeholder="Пошук" value={query} onChangeText={setQuery} />
      </View>
      <FlatList data={data} keyExtractor={(i) => i} renderItem={renderItem} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }} />
      <TouchableOpacity style={styles.primaryBtn} onPress={done}>
        <Text style={styles.primaryBtnText}>Готово</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageScreen;
