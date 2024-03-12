import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, IMAGES, FONTS} from '../utils/constants';
import Header from '../common/header';
import InputField from '../common/InputField';
import Button from '../common/Button';
import {useState} from 'react';

const SignUp = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigateToLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}> 
      <View>
        <Header
          image={IMAGES.cross}
          onPress={navigateToLogin}
          textOne={'Sign Up'}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.field}>
        <InputField field={'Name'} />
        <InputField field={'Email'} />
        <InputField field={'Password'} state />
      </View>
      <View style={styles.textCon}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          tintColor='#BDBDBD'
          onFillColor='#5DB075'
          style={styles.checkBox}
        />
        <Text style={styles.unText}>
          I would like to receive your newsletter and other promotional
          information.
        </Text>
      </View>

      <Button btn={navigateToLogin} btnText={'Sign Up'} />
      <View style={styles.forgot}>
        <Text style={styles.fgText}>Forgot your password?</Text>
      </View>
      </ScrollView>
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
  checkBox:{
  marginTop:ResponsiveSize(-1),
  alignSelf:'center'
  },
  unText: {
    fontFamily: FONTS.interRegular,
    color: COLORS.dGrey,
    fontWeight: '400',
    fontSize: ResponsiveSize(14),
    marginRight: ResponsiveSize(8),
    alignSelf:'center'
  },
  forgot: {
    padding: ResponsiveSize(4),
  },
  fgText: {
    fontFamily: FONTS.interSemi,
    color: COLORS.green,
    fontSize: ResponsiveSize(16),
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default SignUp;
