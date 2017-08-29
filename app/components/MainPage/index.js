import React, { Component } from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';
import style from './style';

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      balance: this.props.balance,
    };
  }
  render() {
    return (
      <View>
        <Text>{this.state.balance}</Text>
      </View>
    );
  }
};

export default MainPage;
