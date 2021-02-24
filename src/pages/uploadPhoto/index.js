import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

export default function index({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title="Upload Photo"
        onPress={() => navigation.goBack()}
        type="icon-only"
        iicon="back-dark"
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Ade Suhada</Text>
          <Text style={styles.profesion}>Software Engineer</Text>
        </View>
        <View>
          <Button title="Upload And Continue" />
          <Gap height={30} />
          <Link label="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 32,
    marginTop: 26,
  },
  profesion: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.secondary,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    height: 130,
    width: 130,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
});
