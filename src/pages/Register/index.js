import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components/atoms';

export default function index() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Daftar Akun</Text>
      <Input label="Full Name" />
      <Gap height={24} />
      <Input label="Pekerjaan" />
      <Gap height={24} />
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={40} />
      <Button title="Continue" />
      <Gap height={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center',
  },
});
