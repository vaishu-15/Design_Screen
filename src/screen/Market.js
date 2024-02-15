import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';

const Market = () => {
  return (
    <View style={styles.container}>
      <Header textthree={'Back'} textone={'Market'} texttwo={'Filter'} show />
      <View style={styles.searchfield}>
        <InputField field={'Search'} isSearchField={true} />
      </View>
      <View style={styles.Dealcon}>
        <Text style={styles.DealHeading}>Hot deals</Text>
      </View>
      <View style={styles.product}>
        <View style={styles.prodimg}></View>
        <View style={styles.itemname}>
          <Text style={styles.itemText}>Item #1 Name Goes Here</Text>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amounttext}>$19.99</Text>
        </View>
      </View>
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
  Dealcon: {
    marginTop: ResponsiveSize(20),
    marginBottom: ResponsiveSize(12),
    paddingLeft: ResponsiveSize(10),
  },
  DealHeading: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Inter Regular Regular',
  },
  product: {
    paddingLeft: ResponsiveSize(10),
  },
  prodimg: {
    width: ResponsiveSize(110),
    height: ResponsiveSize(110),
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  itemname: {
    width: ResponsiveSize(110),
    marginTop: ResponsiveSize(3),
  },
  itemText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter Regular Regular',
  },
  amount: {
    marginTop: ResponsiveSize(5),
  },
  amounttext: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Inter Regular Regular',
  },
});

export default Market;
