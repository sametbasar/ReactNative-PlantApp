import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import config from '../../../contants';

const {themes} = config;
const {width} = Dimensions.get('window');

export default class Gallery extends Component {
  _renderImages = (image, index) => {
    return <Image key={index} style={styles.image} source={image} />;
  };
  render() {
    const {images} = this.props;
    return (
      <View style={styles.galleryContainer}>
        <Text style={styles.title}>Gallery</Text>
        <View style={styles.containerMore}>
          <View style={styles.imageContainer}>
            {images.slice(0, 3).map((image, index) => {
              return this._renderImages(image, index);
            })}
          </View>
          <View style={styles.imageMore}>
            <Text style={styles.imageMoreText}>
              +{images.slice(3, images.length).length}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  galleryContainer: {
    paddingHorizontal: themes.sizes.padding,
  },
  title: {
    fontSize: themes.sizes.font,
    fontFamily: themes.fontFamily.semiBold,
  },
  containerMore: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 25,
  },
  imageContainer: {
    width: width / 1.7,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: width / 4,
    height: width / 4,
    borderRadius: themes.sizes.radius,
    marginBottom: 20,
  },
  imageMore: {
    marginLeft: 25,
    width: 55,
    height: 55,
    backgroundColor: themes.colors.gray2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: themes.sizes.radius,
  },
  imageMoreText: {
    color: themes.colors.gray,
  },
});
