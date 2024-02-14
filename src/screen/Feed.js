import React from "react";
import { View,StyleSheet} from "react-native";
import ResponsiveSize from '../utils/responsivesSize';
import Header from "../common/header";

const Feed=() =>{
    return(
        <View style={styles.container}>
            <Header textone={'Feed'} texttwo={'Filter'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {padding: ResponsiveSize(10),
      flex:1,
       backgroundColor:'white'},
    })

export default Feed;