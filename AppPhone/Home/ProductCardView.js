import { Text, Image, View, TouchableOpacity } from 'react-native';
import ScreenNames from '../src/Utils/ScreenNames';
import { useNavigation } from '@react-navigation/native';

import React from 'react';

const ProductCardView = ({  }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => { navigation.navigate(ScreenNames.Detail) }} >
      <View style={{ width: 200, height: 340, backgroundColor: '#00FFFF', borderRadius: 10 }}>
        <View style={{ flex: 1, width: 180, marginLeft: 10, marginTop: 10, marginBot: 10, overflow: "hidden", backgroundColor: '#D3D3D3', borderRadius: 10 }}>
          <Image source={require('../image/phone4.jpg')} style={{ width: "100%", height: "57%", borderRadius: 10 }} />
          <Text> product name </Text>
          <Text> product </Text>
          <Text> price </Text>
        </View>
      </View>
    </TouchableOpacity>

  )
}

export default ProductCardView;