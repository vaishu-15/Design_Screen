import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import Button from '../common/Button';
import { COLORS ,FONTS} from '../utils/constants';

const Login = (props) => {

  const navigateToSignUp = () => {
    props.navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    props.navigation.navigate("MainStack");
  };

  return (
    <View style={styles.container}>
      <Header textOne={'Log In'}/>
      <View style={styles.Field}>
        <InputField field={'Email'} />
        <InputField field={'Password'} state/>
      </View>
      <Button onPress={handleLogin} btnText={'Log In'} />
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
    fontFamily: FONTS.interSemi,
    color: COLORS.dGrey,
    fontSize: ResponsiveSize(16),
    fontWeight: '600',
  },
  signUpBtn: {
    fontFamily: FONTS.interSemi,
    color: COLORS.green,
    fontSize: ResponsiveSize(16),
    fontWeight: '600',
    marginLeft: ResponsiveSize(5),
  },
});

export default Login;