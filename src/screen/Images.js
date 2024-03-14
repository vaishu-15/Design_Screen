import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import Header from '../common/header';
import ResponsiveSize from '../utils/responsivesSize';
import { COLORS,FONTS } from '../utils/constants';
import { ScrollView } from 'react-native-gesture-handler';

const Images = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        textThree={'Back'} 
        back={() => props.navigation.navigate('MainStack')}
        textOne={'Images'}
        textFour={'Insights'}
        onPress={() => props.navigation.navigate('Insights')}
        new
        show
      />
     <View style={styles.row1}>
      <Image style={styles.col1}/>
      <Image style={styles.col2}/>
     </View>
     <Image style={styles.row2}/>
     <View style={styles.row3}>
     <Image style={styles.col3}/>
     <Image style={styles.col4}/>
     </View>
     <View style={styles.row4}>
     <Image style={styles.col5}/>
     <Image style={styles.col6}/>
     </View>
     <View style={styles.row3}>
     <Image style={styles.col3}/>
     <Image style={styles.col4}/>
     </View>
     <View style={styles.row4}>
     <Image style={styles.col5}/>
     <Image style={styles.col6}/>
     </View>
     <View style={styles.row3}>
     <Image style={styles.col3}/>
     <Image style={styles.col4}/>
     </View>
     </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(10),
    flex: 1,
    backgroundColor:COLORS.white,
  },
  row1:{
    flexDirection:'row',
    padding: ResponsiveSize(10),
  },
  col1:{
    flex:1,
    padding:ResponsiveSize(40),
    paddingBottom:ResponsiveSize(130),
    backgroundColor:COLORS.lWhite,
    marginRight:ResponsiveSize(10),
    borderRadius:ResponsiveSize(8)
  },
  col2:{
    flex:5,
    padding:ResponsiveSize(40),
    backgroundColor:COLORS.lWhite,
    borderRadius:ResponsiveSize(8)
  },
  row2:{
    padding: ResponsiveSize(100),
    marginHorizontal: ResponsiveSize(10),
    backgroundColor:COLORS.lWhite,
    borderRadius:ResponsiveSize(8)
  },
  row3:{
    flexDirection:'row',
    padding: ResponsiveSize(10),
  },
  col3:{
    flex:1,
    padding:ResponsiveSize(40),
    paddingBottom:ResponsiveSize(130),
    backgroundColor:COLORS.lWhite,
    marginRight:ResponsiveSize(10),
    borderRadius:ResponsiveSize(8)
  },
  col4:{
    flex:1,
    padding:ResponsiveSize(40),
    backgroundColor:COLORS.lWhite,
    borderRadius:ResponsiveSize(8)
  },
  row4:{
    flexDirection:'row',
    paddingHorizontal: ResponsiveSize(10),
  },
  col5:{
    flex:5,
    padding:ResponsiveSize(40),
    paddingBottom:ResponsiveSize(130),
    backgroundColor:COLORS.lWhite,
    marginRight:ResponsiveSize(10),
    borderRadius:ResponsiveSize(8)
  },
  col6:{
    flex:1,
    padding:ResponsiveSize(40),
    backgroundColor:COLORS.lWhite,
    borderRadius:ResponsiveSize(8)
  }
});

export default Images;
