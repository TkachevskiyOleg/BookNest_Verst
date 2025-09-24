import React from 'react';
import { View, Text, Image } from 'react-native';

const EmptyListScreen = ({ image, title, subtitle }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 }}>
      <Image source={image} style={{ width: 180, height: 180, resizeMode: 'contain', marginBottom: 12, opacity: 0.9 }} />
      {title ? (<Text style={{ fontSize: 18, color: '#0F0F0F', fontWeight: '700', marginBottom: 8, textAlign: 'center' }}>{title}</Text>) : null}
      {subtitle ? (<Text style={{ fontSize: 14, color: '#4a4a4a', textAlign: 'center' }}>{subtitle}</Text>) : null}
    </View>
  );
};

export default EmptyListScreen;


