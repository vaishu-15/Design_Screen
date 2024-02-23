import {
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = (props) => {
  return (
    <View style={styles.hcontainer}>
      {!props.show && (
        <TouchableOpacity onPress={props.onPress}>
          <Image source={props.image} />
        </TouchableOpacity>
      )}
      {props.show && (
        <TouchableOpacity >
          <Text style={styles.back}>{props.textthree}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.header}>{props.textone}</Text>
      <TouchableOpacity onPress={props.onpress}>
        <Text style={styles.log}>{props.texttwo}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  hcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ResponsiveSize(10),
  },
  cros: {
    width: ResponsiveSize(16),
    height: ResponsiveSize(16),
  },
  header: {
    fontSize: ResponsiveSize(30),
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Inter-SemiBold',
  },
  log: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    color: '#5DB075',
  },
  back: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5DB075',
  },
});

export default Header;
