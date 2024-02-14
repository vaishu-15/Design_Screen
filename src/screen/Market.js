import React from 'react';
import {View, StyleSheet} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';

const Market = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hcontainer}>
        <Header texttwo={'Back'} />
        <Header textone={'Market'} />
        <Header texttwo={'Filter'} />
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
});
export default Market;
