import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Button({type, title}) {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
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
    fontWeight: '600',
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : 'white',
  }),
});