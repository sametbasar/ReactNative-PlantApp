import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../../../contants';

const {themes} = config;
const {width} = Dimensions.get('window');

export default class SearchBox extends Component {
  state = {
    isEditing: false,
  };

  render() {
    return (
      <View style={styles.searchContainer}>
        <TextInput
          onFocus={() => this.setState({isEditing: true})}
          onBlur={() => this.setState({isEditing: false})}
          style={styles.search}
          placeholder="Search"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Icon
            size={themes.sizes.base / 1.2}
            color={themes.colors.gray2}
            name={this.state.isEditing ? 'close' : 'search'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    position: 'relative',
    marginTop: 5,
  },
  search: {
    backgroundColor: 'rgba(142, 142, 147, 0.1)',
    width: width / 2.7,
    height: 32,
    paddingHorizontal: 15,
    paddingVertical: 0,
    borderRadius: themes.sizes.radius,
  },
  searchButton: {
    position: 'absolute',
    top: 8,
    right: 10,
  },
});
