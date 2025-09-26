import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const DrawerContent = ({ navigation }) => {
  const [activeItem, setActiveItem] = useState('Головна');

  const handleItemPress = (itemName, screenName) => {
    setActiveItem(itemName);
    if (screenName) {
      navigation.navigate(screenName);
    }
  };

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
          isActive={activeItem === 'Головна'}
          onPress={() => { 
            setActiveItem('Головна'); 
            navigation.navigate('Home', { screen: 'MainTabs', params: { screen: 'HomeTab' } }); 
            navigation.closeDrawer();
          }} 
        />
        <DrawerItem 
          icon={require('../../assets/collections.png')} 
          label="Колекції" 
          isActive={activeItem === 'Колекції'}
          onPress={() => { setActiveItem('Колекції'); navigation.navigate('Home', { screen: 'Collections' }); navigation.closeDrawer(); }} 
        />
        <DrawerItem 
          icon={require('../../assets/Book.png')} 
          label="Читати далі" 
          isActive={activeItem === 'Читати далі'}
          onPress={() => { 
            setActiveItem('Читати далі');
            navigation.navigate('Home', { screen: 'ReadNext' });
            navigation.closeDrawer();
          }} 
        />
        <DrawerItem 
          icon={require('../../assets/basket.png')} 
          label="Корзина" 
          isActive={activeItem === 'Корзина'}
          onPress={() => { setActiveItem('Корзина'); navigation.navigate('Home', { screen: 'Trash' }); navigation.closeDrawer(); }} 
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.menuSection}>
        <DrawerItem 
          icon={require('../../assets/settings.png')} 
          label="Налаштування" 
          isActive={activeItem === 'Налаштування'}
          onPress={() => { setActiveItem('Налаштування'); navigation.navigate('Home', { screen: 'Settings' }); navigation.closeDrawer(); }} 
        />
        <DrawerItem 
          icon={require('../../assets/feedback.png')} 
          label="Відправити відгук" 
          isActive={activeItem === 'Відправити відгук'}
          onPress={() => handleItemPress('Відправити відгук')} 
        />
      </View>
    </View>
  );
};

const DrawerItem = ({ icon, label, isActive, onPress }) => {
  const iconStyle = isActive 
    ? [styles.itemIcon, styles.itemIconActive]
    : styles.itemIcon;
  
  const textStyle = isActive 
    ? [styles.itemText, styles.itemTextActive]
    : styles.itemText;

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image source={icon} style={iconStyle} />
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

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
    tintColor: '#222', 
  },
  itemIconActive: {
    tintColor: '#008655', 
  },
  itemText: {
    fontSize: 16,
    color: '#222', 
  },
  itemTextActive: {
    color: '#008655', 
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default DrawerContent;