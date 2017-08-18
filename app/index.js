import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import logo from './resources/logo.png';

export default class App extends Component {
  render() {
    return (
      <View>
        <Image source={logo}></Image>
        <Text>Hello world!</Text>
      </View>
    );
  }
};
