import React, {Component} from 'react';
import {
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import config from '../../../contants';

const {themes, mockups} = config;
const {width, height} = Dimensions.get('window');

export default class TopBar extends Component {
  state = {
    activeBar: 'Products',
  };
  topBarPres = activeBar => {
    this.setState({activeBar});
  };
  _renderTopBar = () => {
    return mockups.topBar.map((nav, key) => {
      const activeBar = this.state.activeBar === nav.name;
      const stylesButton = [styles.navButton, activeBar && styles.active];
      const stylesTitle = [styles.navTitle, activeBar && styles.activeTitle];
      return (
        <TouchableOpacity
          onPress={() => this.topBarPres(nav.name)}
          key={`button-${key}`}
          style={stylesButton}>
          <Text style={stylesTitle}>{nav.name}</Text>
        </TouchableOpacity>
      );
    });
  };
  _renderContentView = () => {
    return mockups.topBar.map((nav, key) => {
      if (this.state.activeBar === nav.name) {
        return (
          <View style={styles.contentArea} key={`content-${key}`}>
            <FlatList
              renderItem={product => this._renderProducts(product)}
              data={nav.products}
              style={styles.contentList}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              keyExtractor={(item, key) => `product-${key}`}
              numColumns={2}
            />
          </View>
        );
      }
    });
  };
  _renderProducts = product => {
    const item = product.item;
    return (
      <>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Explore')}
          activeOpacity={0.7}
          style={styles.product}>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.total}>{`${item.total} Products`}</Text>
        </TouchableOpacity>
      </>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>{this._renderTopBar()}</View>
        <View style={styles.content}>{this._renderContentView()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: themes.colors.gray2,
    borderBottomWidth: 1,
  },
  navButton: {
    paddingBottom: 10,
    marginBottom: -2,
  },
  active: {
    borderBottomColor: themes.colors.secondary,
    borderBottomWidth: 3,
  },
  activeTitle: {
    color: themes.colors.secondary,
  },
  navTitle: {
    fontSize: themes.sizes.header,
    fontFamily: themes.fontFamily.medium,
    color: themes.colors.gray2,
  },
  contentArea: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    marginBottom: 150,
  },
  contentList: {},
  separator: {},
  product: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: themes.colors.white,
    elevation: 6,
    padding: 20,
    margin: 10,
    marginBottom: 20,
    borderRadius: themes.sizes.radius,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: themes.sizes.font,
    color: themes.colors.black,
    marginBottom: 10,
  },
  total: {
    fontSize: themes.sizes.caption,
    color: themes.colors.gray2,
  },
});
