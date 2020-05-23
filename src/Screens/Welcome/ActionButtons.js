import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import {Button, TextButton} from '../../components/';
import config from '../../../contants';

const themes = config.themes;
const {width, height} = Dimensions.get('window');
export default class ActionButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate('Login')}
          full
          gradient
          color="secondary">
          <Text style={[styles.buttonText, {color: themes.colors.white}]}>
            Login
          </Text>
        </Button>

        <Button onPress={() => navigation.navigate('Register')} full shadow>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Button>
        <TextButton text="Terms of service" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: width - 75,
  },
  buttonText: {
    fontSize: themes.sizes.base,
  },
});
