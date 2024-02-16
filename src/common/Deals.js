import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';

const Deals = ({dealone}) => {
  const data = [
    {id: '1', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '2', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '3', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '4', name: 'Item #1 Name Goes Here', price: '$20.99'},
  ];

  const renderItem = ({item}) => (
    <View style={styles.product}>
      <View style={styles.prodimg}></View>
      <View style={styles.itemname}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amounttext}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <View style={styles.Dealcon}>
        <Text style={styles.DealHeading}>{dealone}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Dealcon: {
    marginTop: ResponsiveSize(20),
    paddingLeft: ResponsiveSize(10),
  },
  DealHeading: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Inter Regular Regular',
  },
  product: {
    padding: ResponsiveSize(10),
    margin: ResponsiveSize(3),
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

export default Deals;
