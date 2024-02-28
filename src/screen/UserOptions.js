import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const UserOptions = ({ props}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center' }}>
      <Text>UserOptions</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserOptions;
