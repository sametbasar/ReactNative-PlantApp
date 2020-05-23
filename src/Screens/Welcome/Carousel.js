import React, {Component} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import config from '../../../contants';
import theme from '../../../contants/theme';
import {Easing} from 'react-native-reanimated';

const mockups = config.mockups;
const {width, height} = Dimensions.get('screen');

export default class Carousel extends Component {
  state = {
    scrollX: new Animated.Value(0),
  };

  _renderItem = item => {
    return (
      <>
        <View>
          <Image
            resizeMode={'contain'}
            source={item.item.image}
            style={styles.image}
          />
        </View>
      </>
    );
  };
  _renderSteps = () => {
    const stepPosition = Animated.divide(this.state.scrollX, width);

    return (
      <View style={styles.stepContainer}>
        {mockups.welcomeCarousel.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            easing: Easing.linear,
            extrapolate: 'clamp',
          });
          return <Animated.View key={index} style={[styles.step, {opacity}]} />;
        })}
      </View>
    );
  };
  render() {
    return (
      <>
        <View style={styles.wrapper}>
          <FlatList
            style={styles.carousel}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            data={mockups.welcomeCarousel}
            keyExtractor={(item, key) => `item-${key}`}
            renderItem={item => this._renderItem(item)}
            onScroll={e => {
              this.setState({scrollX: e.nativeEvent.contentOffset.x});
            }}
          />
          {this._renderSteps()}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    marginTop: 20,
  },
  carousel: {
    flex: 1,
  },
  image: {
    width,
    height: height / 2,
    overflow: 'visible',
  },
  stepContainer: {
    width,
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: height - 530,
  },
  step: {
    width: 7,
    height: 7,
    marginHorizontal: 3,
    backgroundColor: theme.colors.gray,
    borderRadius: theme.sizes.radius,
  },
});
