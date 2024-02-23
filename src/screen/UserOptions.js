import React from "react";
import { View, Text,StyleSheet } from "react-native";
import Header from "../common/header";
import ResponsiveSize from "../utils/responsivesSize";

const Profile=() =>{
    return(
        <View style={styles.container}>
        <Header textthree={'Back'} textone={'User Options'} texttwo={'Next'} show />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: ResponsiveSize(10),
      flex: 1,
      backgroundColor: 'white',
    },
})
export default Profile;