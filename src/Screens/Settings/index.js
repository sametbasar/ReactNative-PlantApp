import React, {Component} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import config from '../../../contants';
import UserProfile from './UserProfile';
import Permission from './Permission';

const {themes} = config;
export default class Settings extends Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.topNavigation}>
          <Text style={styles.homeTitle}>Settings</Text>
          <Image
            style={styles.avatar}
            source={require('../../../assets/images/avatar.png')}
          />
        </View>
        <UserProfile />
        <Permission />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingVertical: 90,
    paddingHorizontal: themes.sizes.padding,
    backgroundColor: themes.colors.white,
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 45,
  },
  homeTitle: {
    fontSize: themes.sizes.h1,
    fontFamily: themes.fontFamily.bold,
  },
  avatar: {
    width: 40,
    height: 40,
  },
});
