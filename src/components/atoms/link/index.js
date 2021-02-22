import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function index({label, size, align}) {
  return (
    <View>
      <Text style={styles.link(size, align)}>{label}</Text>
    </View>
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
