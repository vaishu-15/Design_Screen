import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Header from '../common/header';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS} from '../utils/constants';

const userData = [
  {id: '1', details: 'Radio option here...'},
  {id: '2', details: 'Radio option here...'},
  {id: '3', details: 'Radio option here...'},
  {id: '4', details: 'Radio option here...'},
  {id: '5', details: 'Radio option here...'},
  {id: '6', details: 'Radio option here...'},
];

const UserDataList = ({details}) => (
  <View style={styles.listContainer}>
    <Text style={styles.details}>{details}</Text>
  </View>
);

const UserOptions = () => {
  return (
    <View style={styles.container}>
      <Header
        textThree={'Back'}
        textOne={'User Options'}
        textTwo={'Next'}
        show
      />
      <FlatList
        data={userData}
        renderItem={({item}) => <UserDataList details={item.details} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(10),
    flex: 1,
    backgroundColor: COLORS.white,
  },
  listContainer: {
    margin: ResponsiveSize(10),
    paddingBottom: ResponsiveSize(19),
    borderBottomColor: COLORS.lGrey,
    borderBottomWidth: 1,
  },
  details: {
    color: COLORS.grey,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
});

export default UserOptions;
