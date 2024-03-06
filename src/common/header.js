import {Image, Text, View, StyleSheet} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS} from '../utils/constants';

const Header = props => {
  return (
    <View style={styles.hContainer}>
      {!props.show && (
        <TouchableOpacity onPress={props.onPress}>
          <Image source={props.image} />
        </TouchableOpacity>
      )}
      {props.show && (
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.back}>{props.textThree}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.header}>{props.textOne}</Text>
      {!props.new && (
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.log}>{props.textTwo}</Text>
        </TouchableOpacity>
      )}
      {props.new && (
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.new}>{props.textFour}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  hContainer: {
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
    color: COLORS.black,
    fontFamily: FONTS.interSemi,
    alignSelf:'center'
  },
  log: {
    fontSize: 16,
    fontFamily: FONTS.interMedium,
    fontWeight: '500',
    color: COLORS.green,
    alignSelf:'center'
  },
  back: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.green,
    alignSelf:'center'
  },
  new: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.green,
    alignSelf:'center'
  },
});

export default Header;
