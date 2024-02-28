import React from 'react';
import { View,StyleSheet } from 'react-native';
import Header from '../common/header';

const Images = ({props}) => {
  return (
    <View >
        <Header textThree={'Back'} textOne={'Images'} textTwo={'Next'} onPress={()=>props.navigation.navigate("Insights")} show />
       
    </View>
  );
};

const styles = StyleSheet.create({

})

export default Images;