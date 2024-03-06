import {React, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Header from '../common/header';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS} from '../utils/constants';

const MarketVideo = () => {

  return (
    <View style={styles.container}>
      <Header textThree={'Back'} textOne={'Market'} show />
      
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

export default MarketVideo;