import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS} from '../utils/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Deals = props => {
  const data = [
    {id: '1', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '2', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '3', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '4', name: 'Item #1 Name Goes Here', price: '$20.99'},
    {id: '5', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '6', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '7', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '8', name: 'Item #1 Name Goes Here', price: '$20.99'},
    {id: '9', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '10', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '11', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '12', name: 'Item #1 Name Goes Here', price: '$20.99'},
    {id: '13', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '14', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '15', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '16', name: 'Item #1 Name Goes Here', price: '$20.99'},
    {id: '17', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '18', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '19', name: 'Item #1 Name Goes Here', price: '$19.99'},
    {id: '20', name: 'Item #1 Name Goes Here', price: '$20.99'},
  ];

  const DealsList = ({name, price}) => (
    <View style={styles.product}>
      <View style={styles.prodImg}></View>
      <View style={styles.itemName}>
        <Text style={styles.itemText}>{name}</Text>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amountText}>{price}</Text>
      </View>
    </View>
  );

  const navigateToVideo = () => {
    props.navigation.navigate('MarketVideo');
  };

  return (
    <View>
      <View style={styles.DealCon}>
        <Text style={styles.DealHeading}>{props.dealOne}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={navigateToVideo}>
            <DealsList name={item.name} price={item.price} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  DealCon: {
    marginTop: ResponsiveSize(20),
    paddingLeft: ResponsiveSize(10),
  },
  DealHeading: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: FONTS.interRegular,
  },
  product: {
    padding: ResponsiveSize(10),
    margin: ResponsiveSize(3),
  },
  prodImg: {
    width: ResponsiveSize(110),
    height: ResponsiveSize(110),
    backgroundColor: COLORS.lWhite,
    borderRadius: 8,
  },
  itemName: {
    width: ResponsiveSize(110),
    marginTop: ResponsiveSize(3),
  },
  itemText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FONTS.interRegular,
  },
  amount: {
    marginTop: ResponsiveSize(5),
  },
  amountText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: FONTS.interRegular,
  },
});

export default Deals;
