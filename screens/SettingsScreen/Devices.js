import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const DevicesScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, { backgroundColor: '#f5f5f7' }]}> 
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Ionicons name="chevron-back" size={22} color="#0F0F0F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Список пристроїв</Text>
        <View style={styles.headerRight} />
      </View>

      <View style={[styles.card, { marginTop: 16 }]}> 
        <View style={{ paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#fff', borderRadius: 12 }}>
          <Text style={{ color: '#0F0F0F' }}>iPhone12,1 (Ви)</Text>
        </View>
      </View>
    </View>
  );
};

export default DevicesScreen;


