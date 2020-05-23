import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import config from '../../../contants';
import MainImage from './MainImage';
import Info from './Info';
import Gallery from './Gallery';
import {ScrollView} from 'react-native-gesture-handler';

const {themes, mockups} = config;

export default class Product extends Component {
  render() {
    const product = mockups.products[0];
    return (
      <ScrollView>
        <View style={styles.productContainer}>
          <MainImage />
          <Info product={product} />
          <Gallery images={product.images} />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  productContainer: {
    paddingVertical: themes.sizes.padding * 3,
    marginTop: 20,
  },
});
