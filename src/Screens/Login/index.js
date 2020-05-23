import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input, Button, TextButton} from '../../components/';
import config from '../../../contants';

const {themes} = config;
export default class Login extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login</Text>
        <View style={styles.loginForm}>
          <Input
            label="E-Mail"
            autoCapitalize="none"
            keyType="next"
            keyboardType="email-address"
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <Input
            secure
            label="Password"
            keyType="go"
            inputRef={input => (this.passwordInput = input)}
            onSubmitEditing={() => navigation.navigate('Home')}
          />
          <Button onPress={() => navigation.navigate('Home')} full gradient>
            <Text style={styles.buttonText}>Login</Text>
          </Button>
          <TextButton text="Forgot your password?" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    paddingVertical: 90,
    paddingHorizontal: themes.sizes.padding,
    backgroundColor: themes.colors.white,
  },
  loginTitle: {
    fontSize: themes.sizes.h1,
    fontFamily: themes.fontFamily.bold,
  },
  loginForm: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: themes.colors.white,
  },
});
