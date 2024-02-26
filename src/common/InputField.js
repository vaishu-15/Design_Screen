import {View, StyleSheet, TextInput, Text} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useState} from 'react';
import { COLORS ,FONTS} from '../utils/constants';

const InputField = ({field, state, isSearchField, onPress}) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <View style={[styles.nameCon, isSearchField && styles.searchField]}>
      <TextInput
        style={[styles.name, isSearchField   && styles.search]}
        placeholder={field}
        secureTextEntry={isHidden ? true : false}
      />
      {state  && (
        <TouchableOpacity onPress={toggleVisibility}>
          <Text style={styles.hidenText}>{isHidden ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  nameCon: {
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
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Inter',
    paddingLeft: ResponsiveSize(10),
  },
  hidenText: {
    color: '#5DB075',
    paddingRight: ResponsiveSize(8),
    fontFamily: 'Inter',
    fontWeight: '500',
  },
});

export default InputField;