import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';

const leftArrow = require('../../assets/left_arrow.png');
const rightArrow = require('../../assets/right_arrow.png');
const informationCircle = require('../../assets/information-circle.png');
const scrollVertical = require('../../assets/scroll-vertical.png');
const autoScroll = require('../../assets/autoscroll.png');
const sections = require('../../assets/Sections.png');
const search = require('../../assets/search.png');

const BottomToolbar = ({
  progress = 0,
  onLeftPress,
  onRightPress,
  onInfoPress,
  onToggleImmersive,
  onAutoScrollPress,
  onChaptersPress,
  onSearchPress,
}) => {
  return (
    <View style={styles.toolbarPanel}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{progress}%</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>

      <View style={styles.toolsContainer}>
        <TouchableOpacity style={styles.toolButton} onPress={onLeftPress}>
          <Image source={leftArrow} style={styles.toolIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={onRightPress}>
          <Image source={rightArrow} style={styles.toolIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={onInfoPress}>
          <Image source={informationCircle} style={styles.toolIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={onToggleImmersive}>
          <Image source={scrollVertical} style={styles.toolIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={onAutoScrollPress}>
          <Image source={autoScroll} style={styles.toolIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={onChaptersPress}>
          <Image source={sections} style={styles.toolIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={onSearchPress}>
          <Image source={search} style={styles.toolIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomToolbar;


