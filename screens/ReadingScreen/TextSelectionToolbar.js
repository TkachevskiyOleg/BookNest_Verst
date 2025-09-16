import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const translateIcon = require('../../assets/Translate.png');
const underlineIcon = require('../../assets/Ico.png');
const copyIcon = require('../../assets/Copy.png');
const commentIcon = require('../../assets/Comment.png');
const colorWheelIcon = require('../../assets/Color_RGB.png');

const TextSelectionToolbar = ({
  onTranslate,
  onUnderline,
  onCopy,
  onComment,
  onColorPicker,
  style,
}) => {
  return (
    <View style={[styles.selectionToolbar, style]}>
      <TouchableOpacity style={styles.selectionToolButton} onPress={onTranslate}>
        <Image source={translateIcon} style={styles.selectionToolIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectionToolButton} onPress={onUnderline}>
        <Image source={underlineIcon} style={styles.selectionToolIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectionToolButton} onPress={onCopy}>
        <Image source={copyIcon} style={styles.selectionToolIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectionToolButton} onPress={onComment}>
        <Image source={commentIcon} style={styles.selectionToolIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectionToolButton} onPress={onColorPicker}>
        <Image source={colorWheelIcon} style={[styles.selectionToolIcon, { width: 28, height: 28 }]} />
      </TouchableOpacity>
    </View>
  );
};

export default TextSelectionToolbar;


