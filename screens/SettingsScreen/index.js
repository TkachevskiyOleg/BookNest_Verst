import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const Row = ({ left, right, onPress, isDestructive = false }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={onPress ? 0.7 : 1}
    style={styles.row}
  >
    <Text style={[styles.rowLabel, isDestructive && styles.destructive]}>{left}</Text>
    {right || <Ionicons name="chevron-forward" size={18} color="#8C8C8C" />}
  </TouchableOpacity>
);

const SettingsScreen = ({ navigation }) => {
  const [brightnessGesture, setBrightnessGesture] = useState(false);
  const [keepScreenOn, setKeepScreenOn] = useState(true);
  const [wifiOnly, setWifiOnly] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Image source={require('../../assets/weui_arrow-filled (1).png')} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
        </TouchableOpacity>
        <View style={styles.titleWrap}>
          <Text style={styles.headerTitle}>Налаштування</Text>
        </View>
        <View style={styles.headerRight} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.card}>
          <Row left="Мова" onPress={() => navigation.navigate('SettingsLanguage')} />
        </View>

        <View style={styles.card}>
          <View style={styles.switchRowWrapper}>
            <View style={{ flex: 1 }}>
              <Text style={styles.switchTitle}>Яскравість жестом</Text>
              <Text style={styles.switchSubtitle}>Змінювати яскравість рухом нагору чи донизу по лівому краю екрану</Text>
            </View>
            <Switch value={brightnessGesture} onValueChange={setBrightnessGesture} trackColor={{ true: '#9bd3bf', false: '#ddd' }} thumbColor={brightnessGesture ? '#2E8B57' : '#f5f5f5'} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.switchRowWrapper}>
            <View style={{ flex: 1 }}>
              <Text style={styles.switchTitle}>Відключення екрану</Text>
              <Text style={styles.switchSubtitle}>Keep the screen on</Text>
            </View>
            <Switch value={keepScreenOn} onValueChange={setKeepScreenOn} trackColor={{ true: '#9bd3bf', false: '#ddd' }} thumbColor={keepScreenOn ? '#2E8B57' : '#f5f5f5'} />
          </View>
        </View>

        <View style={styles.card}>
          <Row left="Сканування файлів" onPress={() => {}} />
          <View style={styles.separator} />
          <Row left="Змінити пароль" onPress={() => navigation.navigate('SettingsChangePassword')} />
          <View style={styles.separator} />
          <Row left="Список пристроїв" onPress={() => navigation.navigate('SettingsDevices')} />
          <View style={styles.separator} />
          <View style={styles.switchRowOnly}>
            <Text style={styles.rowLabel}>Завантажувати тільки через Wi-fi</Text>
            <Switch value={wifiOnly} onValueChange={setWifiOnly} trackColor={{ true: '#9bd3bf', false: '#ddd' }} thumbColor={wifiOnly ? '#2E8B57' : '#f5f5f5'} />
          </View>
        </View>

        <View style={styles.card}>
          <Row left="Написати в тех. підтримку" onPress={() => {}} isDestructive />
          <View style={styles.separator} />
          <Row left="Оцінити застосунок" onPress={() => {}} />
          <View style={styles.separator} />
          <Row left="Інформація про застосунок" onPress={() => {}} />
        </View>

        <TouchableOpacity style={styles.logout} onPress={() => {}}>
          <Text style={styles.logoutText}>Вийти</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;


