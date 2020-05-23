import React from 'react';
import {Image} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import WelcomeScreen from '../Screens/Welcome';
import LoginScreen from '../Screens/Login';
import RegisterScreen from '../Screens/Register';
import HomeScreen from '../Screens/Home';
import SettingsScreen from '../Screens/Settings';
import ExploreScreen from '../Screens/Explore';
import ProductScreen from '../Screens/Product';
import config from '../../contants';

const {themes} = config;
const App = createStackNavigator();

export default function AppStack() {
  return (
    <App.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: themes.colors.white,
        },
        headerTransparent: true,
        headerTitle: '',
        headerBackImage: () => (
          <Image
            style={{marginHorizontal: themes.sizes.padding - 10}}
            source={require('../../assets/icons/back.png')}
          />
        ),
      }}
      initialRouteName="welcome">
      <App.Screen name="welcome" component={WelcomeScreen} />
      <App.Screen name="Login" component={LoginScreen} />
      <App.Screen name="Register" component={RegisterScreen} />
      <App.Screen name="Home" component={HomeScreen} />
      <App.Screen name="Explore" component={ExploreScreen} />
      <App.Screen name="Product" component={ProductScreen} />
      <App.Screen name="Settings" component={SettingsScreen} />
    </App.Navigator>
  );
}
