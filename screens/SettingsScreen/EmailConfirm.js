import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const EmailConfirmScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = useMemo(() => emailRegex.test(email), [email]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[styles.container, { backgroundColor: '#f5f5f7' }]}> 
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Image source={require('../../assets/weui_arrow-filled (1).png')} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
        </TouchableOpacity>
        <View style={styles.titleWrap}>
          <Text style={styles.headerTitle}>Оновлення паролю</Text>
        </View>
        <View style={styles.headerRight} />
      </View>

      <View style={[styles.card, { marginTop: 12 }]}> 
        <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
          <Text style={{ color: '#0F0F0F', marginBottom: 6 }}>Електронна пошта</Text>
          <TextInput
            style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: email && !isValid ? '#efc2c2' : '#eee', borderRadius: 10, padding: 12, marginBottom: 12 }}
            placeholder="Введіть вашу електронну пошту"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={{ backgroundColor: isValid ? '#008655' : '#0086554D', paddingVertical: 14, borderRadius: 12, alignItems: 'center' }} disabled={!isValid}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Підтвердити</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmailConfirmScreen;


