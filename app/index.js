import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Login from './components/Login/index';
import Main from './components/MainPage/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login"
                 component={Login}
                 title="Kok"
                 hideNavBar={true}
                 initial
          />
          <Scene key="main"
                 component={Main}
                 title="Main"
          />
        </Scene>
      </Router>
    );
  }
};
