import React from 'react';
import {View, StyleSheet} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';

const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hcontainer}>
        <Header texttwo={'Back'} />
        <Header textone={'Feed'} />
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
export default Feed;
