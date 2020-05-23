import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import config from '../../../contants';

const themes = config.themes;
export default class TopTitle extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.leftText}>Your home.</Text>
            <Text style={styles.rightText}>Greener</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>Enjoy the experience.</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  title: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  leftText: {
    fontSize: themes.sizes.h1,
    fontFamily: themes.fontFamily.semiBold,
  },
  rightText: {
    fontSize: themes.sizes.h1,
    marginLeft: 5,
    color: themes.colors.secondary,
    fontFamily: themes.fontFamily.semiBold,
  },
  subTitle: {
    fontSize: themes.sizes.body,
    color: themes.colors.gray,
  },
});
