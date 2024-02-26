import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import Button from '../common/Button';
import SignUp from './SignUp';
import { COLORS } from '../utils/constants';

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
      <Button btnText={'Log In'} />
      <View style={styles.forgot}>
        <Text style={styles.fgText}>Forgot your password? </Text>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={styles.signUpBtn}>Signup</Text>
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
  fgText: {
    fontFamily: 'Inter-SemiBold',
    color: COLORS.grey,
    fontSize: 16,
    fontWeight: '600',
  },
  signUpBtn: {
    fontFamily: 'Inter-SemiBold',
    color: COLORS.green,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default Login;
