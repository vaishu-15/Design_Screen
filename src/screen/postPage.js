import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const postPage = ({ props}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Post Page</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default postPage;


