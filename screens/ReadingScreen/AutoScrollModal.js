import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const AutoScrollModal = ({ visible, speed, onChangeSpeed, autoDetect, onToggleAutoDetect, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={[styles.settingsModalOverlay, { justifyContent: 'center', alignItems: 'center' }] }>
        <TouchableOpacity style={styles.settingsModalOverlayTouchable} activeOpacity={1} onPress={onClose} />
        <View style={[styles.centeredModalCard]}> 
          <Text style={styles.settingsModalTitle}>Авто прокрутка</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Швидкість</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              step={1}
              value={speed}
              onValueChange={onChangeSpeed}
              minimumTrackTintColor="#008655"
              maximumTrackTintColor="#e0e0e0"
              thumbTintColor="#008655"
            />
          </View>
          <TouchableOpacity style={styles.dropdownPicker} onPress={onToggleAutoDetect}>
            <Text style={styles.dropdownPickerText}>Автоматично визначити швидкість</Text>
            <Ionicons name={autoDetect ? 'checkbox' : 'square-outline'} size={20} color="#008655" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.dropdownPicker, { marginTop: 12 }]} onPress={onClose}>
            <Text style={styles.dropdownPickerText}>Прочитай та взнай свою швидкість</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AutoScrollModal;


