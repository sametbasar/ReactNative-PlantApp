import React, {Component} from 'react';
import {View, TextInput, Animated, StyleSheet} from 'react-native';
import config from '../../contants';
import {Easing} from 'react-native-reanimated';

const {themes} = config;

export default class Input extends Component {
  state = {
    animationText: new Animated.Value(10),
    animation: true,
  };
  textAnimation = value => {
    if (this.state.animation) {
      Animated.timing(this.state.animationText, {
        toValue: value,
        useNativeDriver: false,
        easing: Easing.linear,
        duration: 150,
      }).start();
    }
  };
  changeText = e => {
    const text = e.nativeEvent.text;
    if (text.length > 0) {
      this.setState({animation: false});
    } else {
      this.setState({animation: true});
    }
  };
  render() {
    const props = this.props;
    const {
      label,
      inputRef,
      error,
      keyboardType,
      keyType,
      autoCapitalize,
      secure,
    } = props;
    const textStyles = [
      styles.label,
      error && styles.error,
      {top: this.state.animationText},
    ];
    const inputStyles = [styles.input, error && styles.error];
    return (
      <View style={styles.container}>
        <Animated.Text style={textStyles}>{label}</Animated.Text>
        <TextInput
          returnKeyType={keyType}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          secureTextEntry={secure}
          onBlur={() => {
            this.textAnimation(10);
          }}
          onFocus={() => {
            this.textAnimation(-15);
          }}
          onChange={e => this.changeText(e)}
          ref={inputRef}
          style={inputStyles}
          {...props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 30,
  },
  label: {
    color: themes.colors.gray2,
    fontSize: themes.sizes.font,
    fontFamily: themes.fontFamily.light,
    position: 'absolute',
  },
  input: {
    borderBottomColor: themes.colors.gray2,
    borderBottomWidth: 1,
    color: themes.colors.black,
    fontSize: themes.sizes.base,
  },
  error: {
    borderBottomColor: themes.colors.accent,
    color: themes.colors.accent,
  },
});
