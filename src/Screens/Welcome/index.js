import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TopTitle from './TopTitle';
import config from '../../../contants';
import Carousel from './Carousel';
import ActionButtons from './ActionButtons';

const themes = config.themes;
export default class Welcome extends Component {
  render() {
    const {navigation} = this.props;
    navigation.setOptions({
      headerShown: false,
    });
    return (
      <View style={styles.wrapper}>
        <TopTitle />
        <Carousel />
        <ActionButtons navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: themes.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
