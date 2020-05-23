import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import config from '../../../contants';

const {themes} = config;
export default class UserProfile extends Component {
  state = {
    user: {
      edit: false,
      name: 'sametbasar',
    },
    location: {
      edit: false,
      name: 'İstanbul',
    },
    email: {
      name: 'sametbbasar@gmail.com',
    },
  };
  editInput = (name, button) => {
    this.setState(
      {
        [name]: {
          ...this.state[name],
          edit: !this.state[name]?.edit,
        },
      },
      () => {
        button.focus();
      },
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Username</Text>
          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              value={this.state.user.name}
              onChangeText={text =>
                this.setState(state => {
                  return {
                    ...state,
                    user: {
                      ...state.user,
                      name: text,
                    },
                  };
                })
              }
              ref={input => {
                this.userButton = input;
              }}
              editable={this.state.user.edit}
            />
            <TouchableOpacity
              onPress={() => this.editInput('user', this.userButton)}
              style={styles.edit}>
              <Text style={styles.editText}>
                {this.state.user.edit ? 'Save' : 'Edit'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.label}>Location</Text>
          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              ref={input => {
                this.locationButton = input;
              }}
              value={this.state.location.name}
              editable={this.state.location.edit}
              onChangeText={text =>
                this.setState(state => {
                  return {
                    ...state,
                    location: {
                      ...state.location,
                      name: text,
                    },
                  };
                })
              }
            />
            <TouchableOpacity
              onPress={() => this.editInput('location', this.locationButton)}
              style={styles.edit}>
              <Text style={styles.editText}>
                {this.state.location.edit ? 'Save' : 'Edit'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              value={this.state.email.name}
              editable={this.state.email.edit}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    borderBottomColor: themes.colors.gray2,
    borderBottomWidth: 1,
  },
  formGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: themes.sizes.font,
    color: themes.colors.gray2,
    marginBottom: 10,
  },
  input: {
    fontSize: themes.sizes.font,
    color: themes.colors.black,
    lineHeight: 1,
    padding: 0,
  },
  edit: {},
  editText: {
    fontSize: themes.sizes.font,
    color: themes.colors.primary,
    lineHeight: 25,
  },
});
