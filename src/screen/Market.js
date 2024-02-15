import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';

const Market = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hcontainer}>
        <Header texttwo={'Back'} />
        <Header textone={'Market'} />
        <Header texttwo={'Filter'} />
      </View>
      <View style={styles.searchfield}>
        <InputField field={'Search'} isSearchField={true} />
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
  hcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ResponsiveSize(10),
  },
  searchfield: {
    marginTop: ResponsiveSize(20),
  },
});
export default Market;
