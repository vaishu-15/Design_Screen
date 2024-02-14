import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import Button from '../common/Button';

const LogIn = () => {

  return (
    <View style={styles.container}>
      <Header textone={'Log In'}/>
      <View style={styles.Field}>
        <InputField field={'Email'} />
        <InputField field={'Password'} state/>
      </View>
      <Button btntext={'Log In'} />
      <View style={styles.forgot}>
        <Text style={styles.fgtext}>Forgot your password?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: ResponsiveSize(10),
    flex:1,
     backgroundColor:'white'},
  Field: {
    marginTop: ResponsiveSize(38),
    marginBottom:ResponsiveSize(140)
  },
  forgot: {
    padding: ResponsiveSize(4),
  },
  fgtext: {
    fontFamily: 'Inter Regular Regular',
    color: '#5DB075',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default LogIn;