import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import Header from '../common/header';
import ResponsiveSize from '../utils/responsivesSize';
import { COLORS, FONTS } from '../utils/constants';
import Button from '../common/Button';

const userData = [
  { id: '1', details: 'Radio option here...' },
  { id: '2', details: 'Radio option here...' },
  { id: '3', details: 'Radio option here...' },
  { id: '4', details: 'Radio option here...' },
  { id: '5', details: 'Radio option here...' },
  { id: '6', details: 'Radio option here...' },
];

const UserDataList = ({ details, onPress, isSelected }) => (
  <View style={styles.listContainer}>
    <Text style={styles.details}>{details}</Text>
    <TouchableOpacity
      style={[styles.radioBtn, { backgroundColor: isSelected ? COLORS.green : COLORS.white }]}
      onPress={onPress}
    />
  </View>
);

const UserOptions = (props) => {

  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id]
    );
  };
  
  return (
    <View style={styles.container}>
      <Header textThree={'Back'} textOne={'User Options'} textTwo={'Next'} show />
      <FlatList
        data={userData}
        renderItem={({ item }) => (
          <UserDataList
            details={item.details}
            onPress={() => toggleSelection(item.id)}
            isSelected={selectedItems.includes(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.FlatList}
      />
      <Button btnText={'I Love it!'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(10),
    flex: 1,
    backgroundColor: COLORS.white,
  },
  FlatList: {
    marginTop: ResponsiveSize(20),
  },
  listContainer: {
    margin: ResponsiveSize(10),
    paddingBottom: ResponsiveSize(19),
    borderBottomColor: COLORS.lGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    color: COLORS.grey,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
  radioBtn: {
    width: ResponsiveSize(16),
    height: ResponsiveSize(16),
    borderRadius: 8,
    borderColor: COLORS.grey,
    borderWidth: 2,
  },
});

export default UserOptions;
