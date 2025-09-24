import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmptyListScreen from './EmptyListScreen';

const image = require('../../assets/Ecran_Audio_Book.png');

const AudioBooks = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top', 'left', 'right']}> 
      <EmptyListScreen
        image={image}
        title={null}
        subtitle={'Додай аудіокнигу до своєї колекції, придбавши її на нашому сайті. Слухай історії, де б ти не був'}
      />
    </SafeAreaView>
  );
};

export default AudioBooks;


