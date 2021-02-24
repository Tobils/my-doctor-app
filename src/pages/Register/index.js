import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header} from '../../components';
import {Button, Gap, Input} from '../../components/atoms';
import {fonts} from '../../utils';
import {colors} from '../../utils/colors';

export default function index({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title="Daftar Akun"
        onPress={() => navigation.goBack()}
        type="icon-only"
        icon="back-dark"
      />
      <ScrollView style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center',
  },
});
