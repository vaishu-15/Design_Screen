import React, {useState} from 'react';
import {View, StyleSheet, Modal, TouchableOpacity, Text} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import Deals from '../common/Deals';

const Market = () => {

  return (
    <View style={styles.container}>
      <Header
        textthree={'Back'}
        textone={'Market'}
        texttwo={'Filter'} 
        show
      />
      <View style={styles.searchfield}>
        <InputField field={'Search'} isSearchField={true} />
      </View>
      <Deals dealone={'Hot deals'} />
      <Deals dealone={'Trending'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(10),
    flex: 1,
    backgroundColor: 'white',
  },
  searchfield: {
    marginTop: ResponsiveSize(20),
  },
  
});

export default Market;
