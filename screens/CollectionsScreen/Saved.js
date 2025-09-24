import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmptyListScreen from './EmptyListScreen';

const image = require('../../assets/Ecran_Save.png');

const Saved = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top', 'left', 'right']}> 
      <EmptyListScreen
        image={image}
        title={null}
        subtitle={'Заповни його історіями, які варто зберегти'}
      />
    </SafeAreaView>
  );
};

export default Saved;


