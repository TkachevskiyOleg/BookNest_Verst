import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmptyListScreen from './EmptyListScreen';

const image = require('../../assets/Ecran_Vidckad.png');

const Postponed = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top', 'left', 'right']}> 
      <EmptyListScreen
        image={image}
        title={null}
        subtitle={'Тут будуть чекати на своє друге дихання ваші відкладені історії.'}
      />
    </SafeAreaView>
  );
};

export default Postponed;


