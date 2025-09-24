import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmptyListScreen from './EmptyListScreen';

const image = require('../../assets/Ecran_Dowload.png');

const Downloaded = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top', 'left', 'right']}> 
      <EmptyListScreen
        image={image}
        title={null}
        subtitle={'Тут зʼявляться ваші книги, які ви завантажите на пристрій. Імпортуйте файли з інших джерел, щоб читати їх у додатку.'}
      />
    </SafeAreaView>
  );
};

export default Downloaded;


