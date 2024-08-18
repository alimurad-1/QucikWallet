import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Button = ({text, handleOnPress}) => {
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={{
        backgroundColor: 'blue',
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 20,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 20,
          color: 'white',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
