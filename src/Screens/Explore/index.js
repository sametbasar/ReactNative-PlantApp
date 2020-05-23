import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import config from '../../../contants';
import SearchBox from './SearchBox';
import Images from './Images';

const {themes} = config;

export default class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topNavigation}>
          <Text style={styles.exploreTitle}>Explore</Text>
          <SearchBox />
        </View>
        <Images navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  exploreTitle: {
    fontSize: themes.sizes.h1,
    fontFamily: themes.fontFamily.bold,
  },
});
