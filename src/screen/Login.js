import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={{width: 343, height: 36, marginTop: 44, marginLeft: 16}}>
        <Text style={styles.header}>Log In</Text>
      </View>
      <View>
        <TextInput style={styles.email} placeholder="Email" />
      </View>
      <View>
        <TextInput style={styles.password}  placeholder="Password" />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.forgot}>
        <Text>Forgot your password?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {margin: 16},
  header: {
    width: ResponsiveSize(88),
    height: ResponsiveSize(36),
    color: 'black',
    alignSelf: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 600,
  },
  email: {
    width: ResponsiveSize(343),
    height: ResponsiveSize(50),
    marginTop: 32,
    borderColor: 'black',
  },
  password: {
    width: ResponsiveSize(343),
    height: ResponsiveSize(50),
    marginTop: 32,
    borderColor: 'black',
  },
  button: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: '#5DB075',
    marginTop: 151,
  },
  buttontext: {
    width: ResponsiveSize(47),
    height: ResponsiveSize(19),
    color: 'white',
  },
  forgot: {
    width: ResponsiveSize(178),
    heigh: ResponsiveSize(19),
    marginLeft: 83,
    color: '#5DB075',
    marginTop: 67,
  },
});

export default Login;