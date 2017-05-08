import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator} from 'react-navigation';

import IntroScreen from './screens/IntroScreen'
import LoginScreen from './screens/LoginScreen'
import MainScreen from './screens/MainScreen'

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render () {
    const MainNavigator = new TabNavigator ({
      intro: { screen: IntroScreen  },
       login: { screen: LoginScreen  },
      main: { screen: MainScreen },
    })
      return (
      <MainNavigator/>
    );     
  }
}


Expo.registerRootComponent(App);