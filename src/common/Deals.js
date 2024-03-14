import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS} from '../utils/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Deals = props => {
  const data = [
    {
      id: 213,
      name: 'Item #93 Name Goes Here',
      price: '$63.38',
      image: 'https://source.unsplash.com/random/200x200?sig=337'
    },
    {
      id: 112,
      name: 'Item #20 Name Goes Here',
      price: '$76.85',
      image: 'https://source.unsplash.com/random/200x200?sig=147'
    },
    {
      id: 755,
      name: 'Item #53 Name Goes Here',
      price: '$66.32',
      image: 'https://source.unsplash.com/random/200x200?sig=733'
    },
    {
      id: 883,
      name: 'Item #42 Name Goes Here',
      price: '$79.16',
      image: 'https://source.unsplash.com/random/200x200?sig=241'
    },
    {
      id: 628,
      name: 'Item #13 Name Goes Here',
      price: '$46.01',
      image: 'https://source.unsplash.com/random/200x200?sig=609'
    },
    {
      id: 500,
      name: 'Item #64 Name Goes Here',
      price: '$58.87',
      image: 'https://source.unsplash.com/random/200x200?sig=929'
    },
    {
      id: 639,
      name: 'Item #21 Name Goes Here',
      price: '$33.65',
      image: 'https://source.unsplash.com/random/200x200?sig=730'
    },
    {
      id: 626,
      name: 'Item #38 Name Goes Here',
      price: '$39.75',
      image: 'https://source.unsplash.com/random/200x200?sig=261'
    },
    {
      id: 310,
      name: 'Item #51 Name Goes Here',
      price: '$29.57',
      image: 'https://source.unsplash.com/random/200x200?sig=134'
    },
    {
      id: 709,
      name: 'Item #20 Name Goes Here',
      price: '$14.09',
      image: 'https://source.unsplash.com/random/200x200?sig=157'
    },
    {
      id: 698,
      name: 'Item #18 Name Goes Here',
      price: '$65.05',
      image: 'https://source.unsplash.com/random/200x200?sig=396'
    },
    {
      id: 155,
      name: 'Item #76 Name Goes Here',
      price: '$23.80',
      image: 'https://source.unsplash.com/random/200x200?sig=626'
    },
    {
      id: 349,
      name: 'Item #51 Name Goes Here',
      price: '$56.01',
      image: 'https://source.unsplash.com/random/200x200?sig=97'
    },
    {
      id: 872,
      name: 'Item #97 Name Goes Here',
      price: '$49.62',
      image: 'https://source.unsplash.com/random/200x200?sig=428'
    },
    {
      id: 8,
      name: 'Item #57 Name Goes Here',
      price: '$18.40',
      image: 'https://source.unsplash.com/random/200x200?sig=334'
    },
    {
      id: 677,
      name: 'Item #92 Name Goes Here',
      price: '$85.40',
      image: 'https://source.unsplash.com/random/200x200?sig=203'
    },
    {
      id: 399,
      name: 'Item #73 Name Goes Here',
      price: '$96.75',
      image: 'https://source.unsplash.com/random/200x200?sig=735'
    },
    {
      id: 74,
      name: 'Item #98 Name Goes Here',
      price: '$78.87',
      image: 'https://source.unsplash.com/random/200x200?sig=34'
    },
    {
      id: 389,
      name: 'Item #83 Name Goes Here',
      price: '$99.75',
      image: 'https://source.unsplash.com/random/200x200?sig=563'
    },
    {
      id: 289,
      name: 'Item #25 Name Goes Here',
      price: '$46.30',
      image: 'https://source.unsplash.com/random/200x200?sig=170'
    }
  ];

  const DealsList = ({name, price, image}) => {

  return  <View style={styles.product}>
    <TouchableOpacity onPress={navigateToVideo}>
      <Image style={styles.prodImg}   source={{
            uri: image,
          }}/>
          </TouchableOpacity>
      <View style={styles.itemName}>
        <Text style={styles.itemText}>{name}</Text>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amountText}>{price}</Text>
      </View>
    </View>
  }

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
          
            <DealsList name={item.name} 
            price={item.price} 
            image={item.image} 
            />
          // </TouchableOpacity>
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
    fontSize: ResponsiveSize(24),
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
    borderRadius: ResponsiveSize(8),
  },
  itemName: {
    width: ResponsiveSize(110),
    marginTop: ResponsiveSize(3),
  },
  itemText: {
    color: COLORS.black,
    fontSize: ResponsiveSize(14),
    fontWeight: '400',
    fontFamily: FONTS.interRegular,
  },
  amount: {
    marginTop: ResponsiveSize(5),
  },
  amountText: {
    color: COLORS.black,
    fontSize: ResponsiveSize(14),
    fontWeight: '700',
    fontFamily: FONTS.interRegular,
  },
});

export default Deals;
