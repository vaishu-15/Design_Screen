import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-check-box';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, IMAGES,FONTS} from '../utils/constants';
import Header from '../common/header';
import InputField from '../common/InputField';
import Button from '../common/Button';
import {useState} from 'react';

const SignUp = (props) => {
  const [isSelected, setSelection] = useState(false);

  const navigateToLogin = () => {
    props.navigation.navigate('Login'); 
  };

  const toggle = () => {
    setSelection(!isSelected);
  };

  return (
    <View style={styles.container}>
      <View>
        <Header image={IMAGES.cross} onPress={navigateToLogin} textone={'Sign Up'} />
      </View>
      <View style={styles.field}>
        <InputField field={'Name'} />
        <InputField field={'Email'} />
        <InputField field={'Password'} state />
      </View>
      <View style={styles.textCon}>
        <TouchableOpacity onPress={toggle}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkBox}
          />
        </TouchableOpacity>
        <Text style={styles.unText}>
          I would like to receive your newsletter and other promotional
          information.
        </Text>
      </View>

      <Button onPress={navigateToLogin} btnText={'Sign Up'} />
      <View style={styles.forgot}>
        <Text style={styles.fgText}>Forgot your password?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: ResponsiveSize(10), flex: 1, backgroundColor: 'white'},
  field: {
    marginTop: ResponsiveSize(38),
  },
  textCon: {
    flexDirection: 'row',
    margin: ResponsiveSize(9),
    marginTop: ResponsiveSize(25),
  },
  checkBox: {
    marginRight: ResponsiveSize(6),
  },
  unText: {
    fontFamily: 'Inter-Regular',
    color: COLORS.dGrey,
    fontWeight: '400',
    fontSize: 14,
    marginRight: ResponsiveSize(8),
  },
  forgot: {
    padding: ResponsiveSize(4),
  },
  fgText: {
    fontFamily: 'Inter-SemiBold',
    color: COLORS.green,
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default SignUp;
