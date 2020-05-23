import React, {Component} from 'react';
import {Switch} from 'react-native';
import config from '../../contants';

const {themes} = config;
const GRAY_COLOR = 'white';

export default class SwitchInput extends Component {
  render() {
    const thumbColor = GRAY_COLOR;
    return (
      <Switch
        style={{
          transform: [{scaleX: 1.3}, {scaleY: 1.3}, {translateX: -30}],
        }}
        thumbColor={thumbColor}
        trackColor={{
          false: themes.colors.gray2,
          true: themes.colors.secondary,
        }}
        {...this.props}
      />
    );
  }
}
