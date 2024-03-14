import React, { useState ,useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,ScrollView,Alert} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import Button from '../common/Button';
import { COLORS ,FONTS, validateEmail} from '../utils/constants';

const Login = (props) => {
  
  const [password,setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const navigateToSignUp = () => {
    props.navigation.navigate('SignUp');
  };

  const handleSubmit = () => {
    if (!email || !password) {
      setShowEmailError(!email);
      setShowPasswordError(!password);
      return;
    }

    if (validateEmail(email)) {
      props.navigation.navigate("MainStack");
      setEmail('');
      setPassword('');
      setShowEmailError(false);
      setShowPasswordError(false);
    } 
  };

  return (
    <View style={styles.container}>
      <Header textOne={'Log In'}/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Field}>
        <InputField field={'Email'} handleSubmit={handleSubmit} value={email} onChangeText={setEmail} />
        {showEmailError && <Text style={{color:'red',marginLeft:ResponsiveSize(10)}}>Please Enter a Valid Email</Text>}
        <InputField field={'Password'} state value={password} onChangeText={setPassword}/>
        {showPasswordError && <Text style={{color:'red',marginLeft:ResponsiveSize(10)}}>Please Enter the Password</Text>}

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