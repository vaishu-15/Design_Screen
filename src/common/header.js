import {Image, Text, View, StyleSheet, TouchableNativeFeedbackComponent} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = ({textone, texttwo, image,textthree,show}) => {
  return (
    <View style={styles.hcontainer}>
     {!show && <Image source={image} />}
    {show && <TouchableOpacity>
    <Text style={styles.back}>{textthree}</Text>
    </TouchableOpacity>}
      <Text style={styles.header}>{textone}</Text>
      <TouchableOpacity>
      <Text style={styles.log}>{texttwo}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  hcontainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:ResponsiveSize(10)
  },
  cros: {
    width: ResponsiveSize(16),
    height: ResponsiveSize(16),
  },
  header: {
    fontSize: ResponsiveSize(30),
    fontWeight: '700',
    color: '#000000',
    fontFamily:'Inter Regular Regular'
  },
  log: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5DB075',
  },
  back:{
    fontSize: 16,
    fontWeight: '500',
    color: '#5DB075',
  }
});

export default Header;
