import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradiant from 'react-native-linear-gradient';
import config from '../../contants';

const themes = config.themes;
export default class Button extends React.Component {
  render() {
    const {
      style,
      full,
      opacity,
      gradient,
      color,
      start,
      end,
      startColor,
      endColor,
      locations,
      shadow,
      children,
    } = this.props;

    const buttonStyles = [
      styles.button,
      shadow && styles.shadow,
      color && styles[color],
      color && !styles[color] ? {backgroundColor: color} : null,
      full && styles.full,
      style,
    ];
    return (
      <>
        {gradient ? (
          <TouchableOpacity
            style={buttonStyles}
            activeOpacity={opacity}
            {...this.props}>
            <LinearGradiant
              start={start}
              end={end}
              locations={locations}
              style={buttonStyles}
              colors={[startColor, endColor]}>
              {children}
            </LinearGradiant>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={opacity}
            {...this.props}
            style={buttonStyles}>
            {children}
          </TouchableOpacity>
        )}
      </>
    );
  }
}

Button.defaultProps = {
  startColor: themes.colors.primary,
  endColor: themes.colors.secondary,
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: themes.colors.white,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: themes.sizes.radius,
    height: themes.sizes.base * 3,
    justifyContent: 'center',
    marginVertical: themes.sizes.padding / 3,
    alignItems: 'center',
  },
  full: {
    width: '100%',
  },
  shadow: {
    shadowColor: themes.colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  accent: {backgroundColor: themes.colors.accent},
  primary: {backgroundColor: themes.colors.primary},
  secondary: {backgroundColor: themes.colors.secondary},
  tertiary: {backgroundColor: themes.colors.tertiary},
  black: {backgroundColor: themes.colors.black},
  white: {backgroundColor: themes.colors.white},
  gray: {backgroundColor: themes.colors.gray},
  gray2: {backgroundColor: themes.colors.gray2},
  gray3: {backgroundColor: themes.colors.gray3},
  gray4: {backgroundColor: themes.colors.gray4},
});
