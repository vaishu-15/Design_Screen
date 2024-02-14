import {Image, Text, View, StyleSheet, TouchableNativeFeedbackComponent} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({textone, texttwo, image}) => {
  return (
    <View style={styles.hcontainer}>
      <Image source={image} />
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
  },
  cros: {
    width: 16,
    height: 16,
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
