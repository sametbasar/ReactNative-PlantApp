import React, {Component} from 'react';
import {
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Keyboard,
  Animated,
  Text,
} from 'react-native';
import config from '../../../contants';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../../components';

const {mockups, themes} = config;
const {width} = Dimensions.get('window');

export default class Images extends Component {
  state = {
    animation: new Animated.Value(1),
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  _keyboardDidShow = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  _keyboardDidHide = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };
  _renderMainImage = navigation => {
    return mockups.explore.slice(0, 1).map((image, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('Product')}
          activeOpacity={0.7}>
          <Image style={styles.mainImage} source={image} />
        </TouchableOpacity>
      );
    });
  };
  _renderImages = navigation => {
    return mockups.explore
      .slice(1, mockups.explore.length - 1)
      .map((image, index) => {
        const sizes = Image.resolveAssetSource(image);
        const fullWidth = width - themes.sizes.padding * 2.5;
        const resize = (sizes.width * 100) / fullWidth;
        const imgWidth = resize > 75 ? fullWidth : sizes.width * 1;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Product')}
            activeOpacity={0.7}>
            <Image
              style={[styles.image, {minWidth: imgWidth, maxWidth: imgWidth}]}
              source={image}
            />
          </TouchableOpacity>
        );
      });
  };
  render() {
    const {navigation} = this.props;
    const animatedStyles = [
      styles.filter,
      {
        opacity: this.state.animation,
      },
    ];
    return (
      <>
        <ScrollView style={styles.imagesScrollView}>
          <View style={styles.imagesContainer}>
            {this._renderMainImage(navigation)}
            {this._renderImages(navigation)}
          </View>
        </ScrollView>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          locations={[0.3, 1]}
          style={styles.filterContainer}
          colors={[themes.colors.white, 'transparent']}>
          <Animated.View style={animatedStyles}>
            <Button gradient>
              <Text style={styles.textFilter}>Filter</Text>
            </Button>
          </Animated.View>
        </LinearGradient>
      </>
    );
  }
}

const styles = StyleSheet.create({
  imagesScrollView: {
    marginBottom: -70,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image: {
    minHeight: 100,
    maxHeight: 130,
    maxWidth: width - themes.sizes.padding * 2.5,
    marginBottom: themes.sizes.base,
    borderRadius: 6,
  },
  mainImage: {
    minWidth: width - themes.sizes.padding * 2.5,
    minHeight: width - themes.sizes.padding * 2.5,
    borderRadius: themes.sizes.radius,
    marginBottom: themes.sizes.padding,
  },
  filterContainer: {
    width,
    position: 'absolute',
    bottom: 0,
    height: 70,
    left: 0,
  },
  filter: {
    position: 'absolute',
    left: width / 2 - themes.sizes.padding * 3,
  },
  textFilter: {
    color: themes.colors.white,
    paddingHorizontal: themes.sizes.padding * 3,
  },
});
