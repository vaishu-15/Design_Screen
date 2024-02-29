import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import React, {useState} from 'react';
import { COLORS ,FONTS} from '../utils/constants';

const InputField = ({field, state, isSearchField}) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <View style={[styles.nameCon, isSearchField && styles.searchField ]}>
      <TextInput
        style={[styles.name, isSearchField && styles.search  ]}
        placeholder={field}
        secureTextEntry={state ? isHidden : false}
      />
      {state && (
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
    backgroundColor: COLORS.lWhite,
    borderWidth: 1,
    borderColor: COLORS.lGrey,
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
    fontFamily: FONTS.interRegular,
    paddingLeft: ResponsiveSize(10),
  },
  hidenText: {
    color: COLORS.green,
    paddingRight: ResponsiveSize(8),
    fontFamily: FONTS.interRegular,
    fontWeight: '500',
  },
});

export default InputField;

