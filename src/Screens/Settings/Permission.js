import React, {Component} from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
import {Switch} from '../../components';
import config from '../../../contants';

const {themes} = config;
const {width} = Dimensions.get('window');
export default class Permission extends Component {
  state = {
    notifications: true,
    newsletter: false,
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.text}>Notifications</Text>
          <Switch
            onValueChange={value => this.setState({notifications: value})}
            value={this.state.notifications}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Newsletter</Text>
          <Switch
            onValueChange={value => this.setState({newsletter: value})}
            value={this.state.newsletter}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    fontSize: themes.sizes.font,
    color: themes.colors.gray2,
  },
});
