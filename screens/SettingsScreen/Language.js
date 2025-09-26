import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const LanguageScreen = ({ navigation }) => {
  const [ua, setUa] = useState(true);
  const [en, setEn] = useState(false);

  const toggleUa = () => { setUa(true); setEn(false); };
  const toggleEn = () => { setUa(false); setEn(true); };

  return (
    <View style={[styles.container, { backgroundColor: '#f5f5f7' }]}> 
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Image source={require('../../assets/weui_arrow-filled (1).png')} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
        </TouchableOpacity>
        <View style={styles.titleWrap}>
          <Text style={styles.headerTitle}>Мова</Text>
        </View>
        <View style={styles.headerRight} />
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.switchRowOnly} onPress={toggleUa} activeOpacity={0.7}>
          <Text style={styles.rowLabel}>Ukrainian / Українська</Text>
          <Switch value={ua} onValueChange={toggleUa} trackColor={{ true: '#9bd3bf', false: '#ddd' }} thumbColor={ua ? '#2E8B57' : '#f5f5f5'} />
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.switchRowOnly} onPress={toggleEn} activeOpacity={0.7}>
          <Text style={styles.rowLabel}>English / Англійська</Text>
          <Switch value={en} onValueChange={toggleEn} trackColor={{ true: '#9bd3bf', false: '#ddd' }} thumbColor={en ? '#2E8B57' : '#f5f5f5'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LanguageScreen;


