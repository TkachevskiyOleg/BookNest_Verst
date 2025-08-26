import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const AuthScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/Logo.png')} 
          style={styles.logoImage} 
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.content}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Ласкаво просимо!</Text>
          <Text style={styles.welcomeText}>
            Вітаємо у спільноті свідомих книголюбів!{"\n"}
            Разом ми зробимо читання приємною звичкою, допоможемо тобі відкривати 
            нові світи та завжди мати улюблені книги під рукою.
          </Text>
        </View>
        
        <View style={styles.authOptions}>
          <TouchableOpacity 
            style={[styles.btn, styles.btnLogin]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.btnText}>Вхід</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.btn, styles.btnRegister]}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={[styles.btnText, styles.btnRegisterText]}>Реєстрація</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;