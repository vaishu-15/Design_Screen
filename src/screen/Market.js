import React, {useState} from 'react';
import {View, StyleSheet, Modal, TouchableOpacity, Text} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import Deals from '../common/Deals';
import { COLORS } from '../utils/constants';

const Market = () => {
  return (
    <View style={styles.container}>
      <Header
        textThree={'Back'}
        textOne={'Market'}
        textTwo={'Filter'}
        show
      />
      <View style={styles.searchField}>
        <InputField field={'Search'} isSearchField={true} />
      </View>
      <Deals dealOne={'Hot deals'} />
      <Deals dealOne={'Trending'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(10),
    flex: 1,
    backgroundColor:COLORS.white,
  },
  searchField: {
    marginTop: ResponsiveSize(20),
  },
  
});

export default Market;