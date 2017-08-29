import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import style from './style';
import { Actions } from 'react-native-router-flux';
import logo from '../../resources/logo.png';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputEmail: "",
      inputPW: ""
    };
  }

  onMain() {
    Actions.main({balance: "10000"})
  }

  onRemoveInputEmail(e) {
    this.setState({inputEmail: ""});
  }

  onRemoveInputPW(e) {
    this.setState({inputPW: ""});
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.logo}>
          <Image source={logo} style={style.logoImage}></Image>
        </View>
        <View style={style.inputContainer}>
          <View style={style.inputTextContainer}>
            <Text style={style.label}>이메일</Text>
            <TextInput
              style={style.inputText}
              placeholder={"이메일을 입력하세요."}
              onChangeText={(inputEmail) => this.setState({inputEmail})}
              value={this.state.inputEmail}></TextInput>
            <TouchableOpacity onPress={this.onRemoveInputEmail.bind(this)} style={style.remove}>
              <Text style={style.removeText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={style.border}></View>
          <View style={style.inputTextContainer}>
            <Text style={style.label}>비밀번호</Text>
            <TextInput
              style={style.inputText}
              placeholder={"비밀번호를 입력하세요."}
              onChangeText={(inputPW) => this.setState({inputPW})}
              value={this.state.inputPW}></TextInput>
            <TouchableOpacity onPress={this.onRemoveInputPW.bind(this)} style={style.remove}>
              <Text style={style.removeText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={style.border}></View>
        </View>
        <View style={style.submitContainer}>
          <TouchableOpacity style={style.signUp} onPress={() => this.onMain()}>
            <Text style={style.signUpText}>회원가입</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.signIn} onPress={() => this.onMain()}>
            <Text style={style.signInText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Login;
