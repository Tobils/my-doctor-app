import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function index({label, size, align, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link(size, align)}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontSize: size,
    color: '#7D8797',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
