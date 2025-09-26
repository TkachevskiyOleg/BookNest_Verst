import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const ChangePasswordScreen = ({ navigation }) => {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [repeat, setRepeat] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const canSubmit = useMemo(() => current.length >= 6 && next.length >= 6 && repeat === next, [current, next, repeat]);

  return (
    <View style={[styles.container, { backgroundColor: '#f5f5f7' }]}> 
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Image source={require('../../assets/weui_arrow-filled (1).png')} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
        </TouchableOpacity>
        <View style={styles.titleWrap}>
          <Text style={styles.headerTitle}>Зміна паролю</Text>
        </View>
        <View style={styles.headerRight} />
      </View>

      <View style={styles.card}>
        <Text style={{ color: '#8C8C8C', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 6 }}>
          Пароль має містити щонайменше 6 символів, зокрема комбінацію цифр і букв.
        </Text>
        <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
          <Text style={{ color: '#0F0F0F', marginBottom: 6 }}>Поточний пароль</Text>
          <TextInput style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee', borderRadius: 10, padding: 12, marginBottom: 12 }} placeholder="Введіть поточний пароль" secureTextEntry value={current} onChangeText={setCurrent} />
          <Text style={{ color: '#0F0F0F', marginBottom: 6 }}>Новий пароль</Text>
          <TextInput style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee', borderRadius: 10, padding: 12, marginBottom: 12 }} placeholder="Введіть новий пароль" secureTextEntry value={next} onChangeText={setNext} />
          <Text style={{ color: '#0F0F0F', marginBottom: 6 }}>Повтор паролю</Text>
          <TextInput style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: repeat && repeat !== next ? '#efc2c2' : '#eee', borderRadius: 10, padding: 12, marginBottom: 8 }} placeholder="Введіть новий пароль" secureTextEntry value={repeat} onChangeText={setRepeat} />
          {repeat && repeat !== next ? <Text style={{ color: '#ef4444', marginBottom: 8 }}>Паролі не співпадають</Text> : null}
          <TouchableOpacity onPress={() => navigation.navigate('SettingsForgotPassword')} style={{ alignSelf: 'center', marginBottom: 12 }}>
            <Text style={{ color: '#ef4444', fontWeight: '600' }}>Забули пароль?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: canSubmit ? '#008655' : '#0086554D', paddingVertical: 14, borderRadius: 12, alignItems: 'center' }} disabled={!canSubmit}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Змінити пароль</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;


