import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-check-box';
import ResponsiveSize from '../utils/responsivesSize';
import {IMAGES} from '../utils/constants';
import Header from '../common/header';
import InputField from '../common/InputField';
import Button from '../common/Button';
import {useState} from 'react';

const SignUp = () => {
  const [isSelected, setSelection] = useState(false);

  const toggle = () => {
    setSelection(!isSelected);
  };

  return (
    <View style={styles.container}>
      <Header textone={'Sign Up'} texttwo={'Login'} image={IMAGES.cross} />
      <View style={styles.Field}>
        <InputField field={'Name'} />
        <InputField field={'Email'} />
        <InputField field={'Password'} state />
      </View>
      <TouchableOpacity onPress={toggle}>
        <View style={styles.TextCon}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.unText}>
            I would like to receive your newsletter and other promotional
            information.
          </Text>
        </View>
      </TouchableOpacity>
      <Button btntext={'Sign Up'} />
      <View style={styles.forgot}>
        <Text style={styles.fgtext}>Forgot your password?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: ResponsiveSize(10), flex: 1, backgroundColor: 'white'},
  Field: {
    marginTop: ResponsiveSize(38),
  },
  TextCon: {
    flexDirection: 'row',
    margin: ResponsiveSize(9),
    marginTop: ResponsiveSize(25),
  },
  checkbox: {
    marginRight: ResponsiveSize(6),
  },
  unText: {
    fontFamily: 'Inter Regular Regular',
    fontWeight: '400',
    fontSize: 14,
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

export default SignUp;
