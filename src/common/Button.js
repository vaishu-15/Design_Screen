import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import { COLORS ,FONTS} from '../utils/constants';

const Button=({btnText ,onPress , navigation})=>{
    return(
        <View>
        <TouchableOpacity onPress={onPress} style={styles.button} >
          <Text style={styles.buttonText}>{btnText}</Text>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
button:{
    backgroundColor:COLORS.green,
    padding:ResponsiveSize(16),
    marginTop:ResponsiveSize(35),
    margin:ResponsiveSize(11),
    borderRadius:100
  },
  buttonText:{
    fontWeight:'600',
    fontSize:16,
    alignSelf:'center',
    color:COLORS.white,
    fontFamily:FONTS.interSemi,
  }
})
export default Button;