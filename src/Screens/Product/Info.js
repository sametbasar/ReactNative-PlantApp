import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import config from '../../../contants/';

const {themes} = config;

export default class Info extends Component {
  _renderBadge = (badge, index) => {
    return (
      <View style={styles.badge} key={index}>
        <Text style={styles.badgeText}>{badge}</Text>
      </View>
    );
  };
  render() {
    const {product} = this.props;
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <View style={styles.badgeContainer}>
          {product.tags.map((badge, index) => {
            return this._renderBadge(badge, index);
          })}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  infoContainer: {
    paddingVertical: themes.sizes.padding / 2,
    paddingHorizontal: themes.sizes.padding,
  },
  title: {
    fontSize: themes.sizes.title,
    fontFamily: themes.fontFamily.bold,
  },
  badgeContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20,
  },
  badge: {
    marginRight: 10,
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: themes.colors.gray,
  },
  badgeText: {
    color: themes.colors.gray,
  },
  descriptionContainer: {
    marginTop: themes.sizes.padding,
    borderBottomWidth: 1,
    paddingBottom: themes.sizes.padding,
    borderBottomColor: themes.colors.gray2,
  },
  description: {
    color: themes.colors.gray,
    lineHeight: 20,
    fontFamily: themes.fontFamily.light,
    fontSize: themes.sizes.font,
  },
});
