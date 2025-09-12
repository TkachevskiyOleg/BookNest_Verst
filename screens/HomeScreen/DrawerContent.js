import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const DrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />
        <Text style={styles.logoText}>BookNest</Text>
      </View>
      <View style={styles.menuSection}>
        <DrawerItem icon="home-outline" label="Головна" onPress={() => navigation.navigate('Home')} />
        <DrawerItem icon="library-outline" label="Колекції" onPress={() => {}} />
        <DrawerItem icon="book-outline" label="Читати далі" onPress={() => navigation.navigate('ReadNext')} />
        <DrawerItem icon="cart-outline" label="Корзина" onPress={() => {}} />
      </View>
      <View style={styles.divider} />
      <View style={styles.menuSection}>
        <DrawerItem icon="settings-outline" label="Налаштування" onPress={() => {}} />
        <DrawerItem icon="chatbox-ellipses-outline" label="Відправити відгук" onPress={() => {}} />
      </View>
    </View>
  );
};

const DrawerItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Ionicons name={icon} size={22} color="#222" style={styles.itemIcon} />
    <Text style={styles.itemText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 48,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 10,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008655',
  },
  menuSection: {
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  itemIcon: {
    marginRight: 18,
  },
  itemText: {
    fontSize: 16,
    color: '#222',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default DrawerContent;
