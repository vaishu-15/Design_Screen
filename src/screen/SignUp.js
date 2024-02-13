import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {IMAGES} from '../utils/constants';
import Header from '../common/header';

const SignUp = () => {
  return (
    <View style={styles.container}>
     <Header
     textone = {"Signup"}
     texttwo = {"login"}
     image = {IMAGES.cross}/>

      <View>
        <TextInput style={styles.name} placeholder="Name" />
      </View>
      <View>
        <TextInput style={styles.email} placeholder="Email" />
      </View>
      <View>
        <TextInput style={styles.password} placeholder="Password" />
      </View>
      <View>
        <Text style={styles.unkText}>
          I would like to receive your newsletter and other promotional
          information
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.forgot}>
        <Text>Forgot your password?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: ResponsiveSize(10)},
  hcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cros: {
    width: 16,
    height: 16,
  },
  header: {
    fontSize: ResponsiveSize(30),
    fontWeight: '600',
    color: '#000000',
  },
  log: {
    fontSize: 16,
    fontWeight: 500,
    color: '#5DB075',
  },
  name: {
    marginTop: 32,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
  },
  email: {
    // width: ResponsiveSize(343),
    height: ResponsiveSize(50),
    marginTop: 32,
    borderColor: 'black',
    borderWidth: 1,
  },
  password: {
    // width: ResponsiveSize(343),
    height: ResponsiveSize(50),
    marginTop: 32,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default SignUp;
