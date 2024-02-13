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

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hcontainer}>
        <Image 
        source={IMAGES.cross}/>
        <Text style={styles.header}>Sign Up</Text>
        <Text style={styles.log}>Login</Text>
      </View>

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
    justifyContent:"space-between"
  },
  cros: {
    flex: 1,
    width: 16,
    height: 16,
    // transform: rotate(45)
  },
  header: {
   fontSize:ResponsiveSize(30),
   fontWeight:"700",
   color:"#000000"
  },
  log: {
   
  },
  name: {
    // width: ResponsiveSize(343),
    height: ResponsiveSize(50),
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
