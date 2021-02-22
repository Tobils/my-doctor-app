import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Button({type, title}) {
  return (
    <TouchableOpacity style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    paddingVertical: 10,
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : 'white',
  }),
});
