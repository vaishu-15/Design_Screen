import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,ScrollView,Alert} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import Button from '../common/Button';
import { COLORS ,FONTS, validateEmail} from '../utils/constants';

const Login = (props) => {
  
  const [password,setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigateToSignUp = () => {
    props.navigation.navigate('SignUp');
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      props.navigation.navigate("MainStack");
    } 
    else {
      Alert.alert( 'Please enter a valid email');
    }
  };

  return (
    <View style={styles.container}>
      <Header textOne={'Log In'}/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Field}>
        <InputField field={'Email'} handleSubmit={handleSubmit} value={email} onChangeText={setEmail} />
        <InputField field={'Password'} state value={password} onChangeText={setPassword}/>
      </View>
      <Button btn={handleSubmit} btnText={'Log In'} handleLogin/>
      <View style={styles.forgot}>
        <Text style={styles.fgText}>Forgot your password? </Text>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={styles.signUpBtn}>Signup</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
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