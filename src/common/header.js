import {Image, Text, View, StyleSheet} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';

const Header = ({textone, texttwo, image, }) => {
  return (
    <View style={styles.hcontainer}>
      <Image source={image} />
      <Text style={styles.header}>{textone}</Text>
      <Text style={styles.log}>{texttwo}</Text>
      
    </View>
  );
};
const styles = StyleSheet.create({
  hcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:ResponsiveSize(10)
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
