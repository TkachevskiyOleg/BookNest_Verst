import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

// Імпортуємо іконки (замініть шляхи на реальні)
const leftArrow = require('../../assets/left_arrow.png');
const rightArrow = require('../../assets/right_arrow.png');
const informationCircle = require('../../assets/information-circle.png');
const scrollVertical = require('../../assets/scroll-vertical.png');
const autoScroll = require('../../assets/autoscroll.png');
const sections = require('../../assets/Sections.png');
const search = require('../../assets/search.png');

const ReadingScreen = ({ route, navigation }) => {
  const { book } = route.params || {};
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);
  const [progress, setProgress] = useState(24);
  const scrollViewRef = useRef();

  const bookContent = book?.content || `Вітер дув із півночі, приносячи запахи хвої, дощу й чогось неспокійного.
Марта стояла на краю скелі, і світ навколо ніби завис. У руці — старий, злегка пожестілий лист.

Вона знайшла його в книзі, яку давно не відкривала. «Ти читаєш це — значить, я зник. Але не вважай це втечею. Це — пошук. Можливо, тебе він теж чекає…»

Вона перечитала ці рядки тричі. Серце стискалося, та не від болю — від передчуття. Позаду — будинок, стіни, які знали її тишу.

Попереду — ліс, море і відповідь, яку вона боялася знайти.

Вона зробила перший крок. Потім другий. І третій — найважливіший.

Під ногами рипів пісок. Вона йшла до човна, що коліхався біля берега, мовчазний, терплячий, знайомий.

У човні було все, що їй могло знадобитись: ліхтарик, термос, компас і стара мапа — та сама, яку колись тримав він.

Вітер трохи посилився, ніби підганяючи її. Вода ледь плескалась об берег, і кожен звук здавався промовистим.

Вона відштовхнулася веслами. Човен ковзнув у темряву. Вогні залишилися десь позаду, а перед нею розгортався чорний обрій —`;

  const currentPage = book?.currentPage || 199;
  const totalPages = book?.totalPages || 784;
  const chapter = book?.chapter || 3;

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 50;
    
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
      setIsToolbarVisible(true);
    } else {
      setIsToolbarVisible(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Верхня панель */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => setIsToolbarVisible(!isToolbarVisible)}
        >
          <Ionicons name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>
        
        <Text style={styles.headerChapter}>Розділ {chapter}</Text>
        
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => setIsBookmarked(!isBookmarked)}
        >
          <Ionicons 
            name={isBookmarked ? "bookmark" : "bookmark-outline"} 
            size={24} 
            color={isBookmarked ? "#008655" : "#000"} 
          />
        </TouchableOpacity>
      </View>

      {/* Основний контент */}
      <ScrollView 
        ref={scrollViewRef}
        style={styles.content}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>
            {bookContent}
          </Text>
        </View>
        
        {/* Номер сторінки в кінці контенту */}
        <View style={styles.pageNumberContainer}>
          <Text style={styles.pageNumber}>{currentPage}</Text>
        </View>
      </ScrollView>

      {/* Панель інструментів (з'являється при досягненні кінця або при натисканні на шестерню) */}
      {isToolbarVisible && (
        <View style={styles.toolbarPanel}>
          {/* Прогрес читання */}
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{progress}%</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, {width: `${progress}%`}]} />
            </View>
          </View>

          {/* Іконки інструментів */}
          <View style={styles.toolsContainer}>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={leftArrow} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={rightArrow} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={informationCircle} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={scrollVertical} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={autoScroll} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={sections} style={styles.toolIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Image source={search} style={styles.toolIcon} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ReadingScreen;