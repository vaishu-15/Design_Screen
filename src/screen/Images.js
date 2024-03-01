import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../common/header';

const Images = ({props}) => {
  return (
    <View>
      <Header
        textThree={'Back'}
        textOne={'Images'}
        textTwo={'Next'}
        onPress={() => props.navigation.navigate('Insights')}
        show
      />
      <View style={{flex:1,padding:10}}>
        <View style={{flex:1,flexDirection:'row', padding:80, backgroundColor:'black',justifyContent:'space-between',alignContent:'center'}}>
          <View style={{flex:2,padding:40, backgroundColor:'grey',alignSelf:'flex-start'}}></View>
          <View style={{flex:1,padding:40, backgroundColor:'green',alignSelf:'flex-end'}}></View>
        </View>
        <View style={{flex:1,padding:80, backgroundColor:'pink'}}></View>
        <View style={{flex:1,flexDirection:'row',padding:80, backgroundColor:'black'}}>
          <View style={{flex:1,padding:40, backgroundColor:'blue'}}></View>
          <View style={{flex:1,padding:40, backgroundColor:'yellow'}}></View>
        </View>
        <View style={{flexDirection:'row',padding:80, backgroundColor:'pink'}}>
          <View style={{flex:3,padding:40, backgroundColor:'black'}}></View>
          <View style={{flex:1,padding:40, backgroundColor:'green'}}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Images;
