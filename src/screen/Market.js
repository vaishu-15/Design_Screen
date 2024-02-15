import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
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
      <View></View>
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
