import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button} from '../../components/atoms';

export default function index() {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <View style={{height: 16}} />
        <Button title="Sign In" type="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
    fontSize: 28,
    color: 'white',
    marginTop: 91,
  },
});
