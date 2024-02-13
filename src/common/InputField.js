import {View, StyleSheet, TextInput,Text} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import { TouchableOpacity } from 'react-native-gesture-handler';

const InputField = ({field}) => {
  return (
    <View style={styles.namecon}>
      <TextInput style={styles.name} placeholder={field} />
      {/* <TouchableOpacity style={styles.hide}>
        <Text>Show</Text>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  namecon: {
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    margin: ResponsiveSize(10),
    borderRadius: 10,
    padding: ResponsiveSize(5),
  },
  name: {
    paddingLeft: ResponsiveSize(12),
    fontWeight: '400',
    fontSize: 16,
    // fontFamily:'Inter Regular Regular'
  },
  
});

export default InputField;
