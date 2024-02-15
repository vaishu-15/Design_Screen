import {View, StyleSheet, TextInput, Text} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useState} from 'react';

const InputField = ({field, state, isSearchField}) => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <View style={[styles.namecon, isSearchField && styles.searchField]}>
      <TextInput
        style={[styles.name, isSearchField && styles.search]}
        placeholder={field}
        secureTextEntry={isHidden ? true : false}
      />
      {state && isSearchField && (
        <TouchableOpacity onPress={toggleVisibility}>
          <Text style={styles.hidentext}>{isHidden ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  namecon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    margin: ResponsiveSize(10),
    borderRadius: 10,
    padding: ResponsiveSize(5),
  },
  searchField: {
    borderRadius: 100,
  },
  search: {
    paddingLeft: ResponsiveSize(15),
    width:ResponsiveSize(100)
  },
  name: {
    paddingLeft: ResponsiveSize(10),
    width:ResponsiveSize(100),
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Inter Regular Regular',
  },
  hidentext: {
    color: '#5DB075',
    paddingRight: ResponsiveSize(8),
    fontFamily: 'Inter Regular Regular',
  },
});

export default InputField;
