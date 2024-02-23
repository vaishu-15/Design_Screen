import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';

const Button=({btntext ,onPress})=>{
    return(
        <View>
        <TouchableOpacity onPress={onPress} style={styles.button} >
          <Text style={styles.buttontext}>{btntext}</Text>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
button:{
    backgroundColor:'#5DB075',
    padding:ResponsiveSize(16),
    marginTop:ResponsiveSize(35),
    margin:ResponsiveSize(11),
    borderRadius:100
  },
  buttontext:{
    fontWeight:'600',
    fontSize:16,
    alignSelf:'center',
    color:'#FFFFFF',
    fontFamily:'Inter-SemiBold',
  }
})
export default Button;