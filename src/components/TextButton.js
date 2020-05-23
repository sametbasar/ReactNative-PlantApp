import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import config from '../../contants';

const {themes} = config;

export default class TextButton extends Component {
  render() {
    const {style, opacity, color, text, children} = this.props;
    const textStyles = [
      styles.textButtonTitle,
      color && styles[color],
      color && !styles[color] ? {color: color} : null,
      style,
    ];
    return (
      <TouchableOpacity
        activeOpacity={opacity}
        {...this.props}
        style={styles.textButton}>
        <Text style={textStyles}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

TextButton.defaultProps = {
  opacity: 0.7,
  color: themes.colors.gray,
};

const styles = StyleSheet.create({
  textButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textButtonTitle: {
    textDecorationLine: 'underline',
  },
  accent: {color: themes.colors.accent},
  primary: {color: themes.colors.primary},
  secondary: {color: themes.colors.secondary},
  tertiary: {color: themes.colors.tertiary},
  black: {color: themes.colors.black},
  white: {color: themes.colors.white},
  gray: {color: themes.colors.gray},
  gray2: {color: themes.colors.gray2},
  gray3: {color: themes.colors.gray3},
  gray4: {color: themes.colors.gray4},
});
