import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {Input, Button, TextButton} from '../../components';
import config from '../../../contants';

const {themes} = config;
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
  }
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
      toValue: -100,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  _keyboardDidHide = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  render() {
    const {navigation} = this.props;
    const animatedStyles = {
      top: this.state.animation,
    };

    return (
      <KeyboardAvoidingView style={styles.registerContainer}>
        <Animated.View style={animatedStyles}>
          <Text style={styles.registerTitle}>Sign Up</Text>

          <View style={styles.registerForm}>
            <Input
              label="First Name"
              keyType="next"
              onSubmitEditing={() => this.lastInput.focus()}
            />
            <Input
              label="Last Name"
              keyType="next"
              inputRef={input => (this.lastInput = input)}
              onSubmitEditing={() => this.emailInput.focus()}
            />
            <Input
              label="E-Mail"
              autoCapitalize="none"
              keyType="next"
              keyboardType="email-address"
              inputRef={input => (this.emailInput = input)}
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
              <Text style={styles.buttonText}>Sign Up</Text>
            </Button>
            <TextButton
              onPress={() => navigation.navigate('Login')}
              text="Have a Account?"
            />
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    paddingVertical: 90,
    paddingHorizontal: themes.sizes.padding,
    backgroundColor: themes.colors.white,
  },
  registerTitle: {
    fontSize: themes.sizes.h1,
    fontFamily: themes.fontFamily.bold,
  },
  registerForm: {
    marginTop: 75,
  },
  buttonText: {
    color: themes.colors.white,
  },
});
