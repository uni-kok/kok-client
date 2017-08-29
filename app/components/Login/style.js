import {
  StyleSheet
} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    flex: 197,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 216,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTextContainer: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    margin: 10,
  },
  label: {
    fontSize: 14,
    top: 5,
  },
  inputText: {
    fontSize: 14,
  },
  remove: {
    width: 25,
    height: 25,
    borderRadius: 25/2,
    backgroundColor: 'rgb(216, 216, 216)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeText: {
    color: 'white',
  },
  border: {
    alignSelf: 'stretch',
    height: 1,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: 'rgb(151, 151, 151)'
  },
  submitContainer: {
    flex: 254,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
  },
  signUp: {
    width: 150,
    height: 48,
    borderRadius: 30,
    borderColor: 'rgb(0, 118, 255)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    color: 'rgb(0, 118, 255)',
  },
  signIn: {
    width: 150,
    height: 48,
    borderRadius: 30,
    backgroundColor: 'rgb(0, 118, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    color: 'white',
  },
});

export default style;
