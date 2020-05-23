import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import config from '../../../contants';
import TopBar from './TopBar';

const {themes} = config;
export default class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.homeContainer}>
        <View style={styles.topNavigation}>
          <Text style={styles.homeTitle}>Browse</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            activeOpacity={0.7}>
            <Image
              style={styles.avatar}
              source={require('../../../assets/images/avatar.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.productArea}>
          <TopBar navigation={navigation} />
        </View>
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
