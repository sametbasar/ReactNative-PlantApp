import React, {Component} from 'react';
import {Image, FlatList, View, StyleSheet, Dimensions} from 'react-native';
import config from '../../../contants';

const {mockups, themes} = config;
const {width} = Dimensions.get('window');

export default class MainImage extends Component {
  _renderImage = image => {
    return (
      <Image style={styles.image} resizeMode={'cover'} source={image.item} />
    );
  };
  render() {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        data={mockups.products[0].images}
        keyExtractor={(item, index) => `image-${index}`}
        renderItem={image => this._renderImage(image)}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width,
    height: 300,
  },
});
