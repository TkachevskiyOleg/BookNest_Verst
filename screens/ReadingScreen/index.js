import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const ReadingScreen = ({ route, navigation }) => {
  // Отримуємо дані книги з навігації
  const { book } = route.params || {};

  // Текст книги (тимчасово статичний, потім буде з бекенду)
  const bookContent = `Вітер дув із півночі, приносячи запахи хвої, дощу й чогось неспокійного.
Марта стояла на краю скелі, і світ навколо ніби звамер. У руці — старий, злегка поховальний лист. Вона знайшла його в кина, яку давно не відкривала. «Ти читаєш це — значить, я зник. Але не вважай це етечею. Це — пошук. Можливо, тебе він теж чекає…»

Вона перечитала ці рядки тричі. Серце стискалося, та не від болю — від передчуття.
Позаду — будинок, стіни, які знали її тишу.
Попереду — ліс, море і відповідь, яку вона боялася знайти.

Вона зробила перший крок. Потім другий. І третій — найважливіший.
Під нотами рипів пісок. Вона йшла до човна, що колкався біля берега, мовчазний, терпливий, знайомий.

У човні було все, що їй могло знадобитись: ліхтарних, термоє, компас і стара мапа — та сама, яку колись тримав він.

Вітер трохи посилився, ніби підганяючи її. Вода ледь плескалась об берег, і кожен звук здавався промовистим.

Вона відштовхнулася веслами. Човен ковзнув у темряву. Вотні залишилися десь позаду, а перед нею розгортався чорний обрій — чистий, мов нова сторінка.

За кілька хвилин берег зник з поля зору.
Вона залишила все позаду: страх, сумніви, тишу.

Тепер тиша стала її союзником.
«Якщо ти колись відчуєш, що небо мовить» — пірни в тишу. Вона навчить більше, ніж ти думаєш, —`;

  const currentPage = 27;
  const totalPages = 784;
  const chapter = 3;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Верхня панель з часом та кнопкою назад */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Основний контент */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.chapter}>Розділ {chapter}</Text>
          <Text style={styles.text}>{bookContent}</Text>
        </View>
      </ScrollView>

      {/* Нижня панель з інформацією про сторінку */}
      <View style={styles.footer}>
        <Text style={styles.pageInfo}>Сторінка {currentPage} з {totalPages}</Text>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="bookmark-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="settings-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReadingScreen;