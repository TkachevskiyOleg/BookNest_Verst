import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';

const colorWheel = require('../../assets/Color_RGB.png');

const PALETTE = [
  '#FF9500', '#5079FF', '#83C3FF', '#9E00FF',
  '#FAFF66', '#DCA4FF', '#34C759', '#FF595C', '#BCFFCD',
];

const ColorPickerModal = ({ visible, onClose, opacity=1, onChangeOpacity, onPickColor }) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={[styles.settingsModalOverlay, { justifyContent: 'center', alignItems: 'center' }]}>
        <TouchableOpacity style={styles.settingsModalOverlayTouchable} activeOpacity={1} onPress={onClose} />
        <View style={styles.colorPickerCard}>
          <View style={styles.paletteGrid}>
            {PALETTE.map((c) => (
              <TouchableOpacity key={c} style={[styles.paletteSwatch, { backgroundColor: c }]} onPress={() => onPickColor && onPickColor(c)} />
            ))}
            <Image source={colorWheel} style={styles.colorWheel} />
          </View>
          <Text style={styles.opacityLabel}>Не прозорість</Text>
          <Slider
            style={{ width: '100%' }}
            minimumValue={0}
            maximumValue={1}
            step={0.01}
            value={opacity}
            onValueChange={onChangeOpacity}
            minimumTrackTintColor="#008655"
            maximumTrackTintColor="#e0e0e0"
            thumbTintColor="#008655"
          />
          <View style={styles.colorPickerButtonsRow}>
            <TouchableOpacity style={[styles.colorPickerButton, styles.colorPickerButtonGhost]} onPress={onClose}>
              <Text style={styles.colorPickerButtonGhostText}>Скасувати</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.colorPickerButton} onPress={onClose}>
              <Text style={styles.colorPickerButtonText}>Ок</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ColorPickerModal;


