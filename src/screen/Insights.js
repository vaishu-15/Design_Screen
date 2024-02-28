import React from 'react';
import { View,StyleSheet } from 'react-native';
import Header from '../common/header';

const Insights = ({props}) => {
  return (
    <View >
        <Header textThree={'Back'} textOne={'Insights'} textTwo={'Next'} show /> 
    </View>
  );
};

const styles = StyleSheet.create({

})

export default Insights;