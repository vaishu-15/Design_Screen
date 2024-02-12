import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import ResponsiveSize from './utils/responsivesSize';

const Login = () => {
  return (
    <View style={{margin: 16}}>
      <View style={{width: 343, height: 36, marginTop: 44, marginLeft: 16}}>
        <Text
          style={{
            width: ResponsiveSize(88),
            height: 36,
            color: 'black',
            alignSelf: 'center',
            fontSize: 30,
            color: 'black',
            fontWeight: 600,
          }}>
          Log In
        </Text>
      </View>
      <View>
      <TextInput
          style={{width:343,height:50, marginTop:32
          }}
          placeholder="Email"
        />
      </View>
      <View>
      <TextInput
          style={{width:343,height:50, marginTop:32
          }}
          placeholder="Password"
        />
      </View>
    </View>
  );
};

export default Login;
