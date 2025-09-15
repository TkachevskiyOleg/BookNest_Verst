import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const DrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Image source={require('../../assets/Logo1.png')} style={styles.logo} />
        <Text style={styles.logoText}>BookNest</Text>
      </View>
      <View style={styles.menuSection}>
        <DrawerItem 
          icon={require('../../assets/Main.png')} 
          label="Головна" 
          onPress={() => navigation.navigate('Home')} 
        />
        <DrawerItem 
          icon={require('../../assets/collections.png')} 
          label="Колекції" 
          onPress={() => {}} 
        />
        <DrawerItem 
          icon={require('../../assets/Book.png')} 
          label="Читати далі" 
          onPress={() => navigation.navigate('ReadNext')} 
        />
        <DrawerItem 
          icon={require('../../assets/basket.png')} 
          label="Корзина" 
          onPress={() => {}} 
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.menuSection}>
        <DrawerItem 
          icon={require('../../assets/settings.png')} 
          label="Налаштування" 
          onPress={() => {}} 
        />
        <DrawerItem 
          icon={require('../../assets/feedback.png')} 
          label="Відправити відгук" 
          onPress={() => {}} 
        />
      </View>
    </View>
  );
};

const DrawerItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Image source={icon} style={styles.itemIcon} />
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
    width: 22,
    height: 22,
    marginRight: 18,
    resizeMode: 'contain',
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