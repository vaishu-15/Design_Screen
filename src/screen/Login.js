import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import Button from '../common/Button';
import SignUp from './SignUp';

const Login = (props) => {

  const navigateToSignUp = () => {
    props.navigation.navigate('SignUp'); 
  };

  return (
    <View style={styles.container}>
      <Header textone={'Log In'}/>
      <View style={styles.Field}>
        <InputField field={'Email'} />
        <InputField field={'Password'} state/>
      </View>
      <Button btntext={'Log In'} />
      <View style={styles.forgot}>
        <Text style={styles.fgtext}>Forgot your password? </Text>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={styles.signupbtn}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: ResponsiveSize(10),
  },
  Field: {
    marginTop: ResponsiveSize(38),
  },
  forgot: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ResponsiveSize(15),
  },
  fgtext: {
    fontFamily: 'Inter-SemiBold',
    color: 'grey',
    fontSize: 16,
    fontWeight: '600',
  },
  signupbtn: {
    fontFamily: 'Inter-SemiBold',
    color: '#5DB075',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default Login;
