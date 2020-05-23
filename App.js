import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/Navigations/Navigation';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Navigation />
      </>
    );
  }
}
