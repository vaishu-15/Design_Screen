import {React, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Header from '../common/header';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS} from '../utils/constants';
import Button from '../common/Button';

const Compose = (props) => {
  const [value, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <Header 
      textThree={'Back'} 
      back={() => props.navigation.navigate('MainStack')}
      textOne={'Compose'}
       show />
      <View style={styles.messageTextCon}>
        <TextInput
          style={styles.messageText}
          placeholder="Compose your message here..."
          placeholderTextColor= '#BDBDBD'
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
      <Button btnText={'Send'} btn={() => props.navigation.navigate('MainStack')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(10),
    flex: 1,
    backgroundColor: COLORS.white,
  },
  messageTextCon: {
    padding: ResponsiveSize(10),
    flex: 1,
  },
  messageText: {
    color: COLORS.black,
  },
});

export default Compose;
