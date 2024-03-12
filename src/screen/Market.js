import React, {useState} from 'react';
import {View, StyleSheet, Modal, TouchableOpacity, Text,ScrollView} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import Deals from '../common/Deals';
import { COLORS } from '../utils/constants';

const Market = (props) => {
  return (
    <View style={styles.container}> 
      <Header
        textThree={'Back'} back={() => props.navigation.goBack('')}
        textOne={'Market'}
        textTwo={'Filter'}
        show
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.searchField}>
        <InputField field={'Search'} isSearchField={true} />
      </View>
      <Deals dealOne={'Hot deals'} navigation={props.navigation}/>
      <Deals dealOne={'Trending'} navigation={props.navigation}/>
      <Deals dealOne={'Trends'} navigation={props.navigation}/>
      <Deals dealOne={'Deals'} navigation={props.navigation}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(10),
    flex: 1,
    flexDirection:'column',
    backgroundColor:COLORS.white,
    
  },
  searchField: {
    marginTop: ResponsiveSize(20),
  },
});

export default Market;