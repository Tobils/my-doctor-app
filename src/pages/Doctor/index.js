import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../utils';

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
