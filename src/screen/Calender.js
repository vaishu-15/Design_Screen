import {React, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {COLORS, FONTS} from '../utils/constants';
import ResponsiveSize from '../utils/responsivesSize';

const expenseData = [
  {id: '1', item: 'Item', time: '30min.'},
  {id: '2', item: 'Item', time: '60min.'},
  {id: '3', item: 'Item', time: '30min.'},
  {id: '4', item: 'Item', time: '15min.'},
];

const renderItem = ({item}) => (
  <View style={styles.expenseList}>
    <View style={styles.itemNo}>
      <View style={styles.expenseSymbol}></View>
      <View style={styles.expenseItem}>
        <Text style={styles.expenseItemText}>{item.item}</Text>
      </View>
    </View>
    <View style={styles.time}>
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
  </View>
);

const Calender = props => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = date => {
    setSelectedStartDate(date);
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : '';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack('Expenses')}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
          &larr;
        </Text>
      </TouchableOpacity>
      <CalendarPicker
        weekdays={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
        previousTitle="&larr;"
        nextTitle="&rarr;"
        todayBackgroundColor='white'
        yearTitleStyle={{fontFamily:FONTS.interSemi,fontWeight:'600'}}
        textStyle={{color:COLORS.black, fontFamily:FONTS.interRegular,fontWeight:'400'}}
        todayTextStyle={{color:COLORS.green, fontFamily:FONTS.interSemi}}
        monthYearHeaderWrapperStyle={styles.header}
        monthTitleStyle={{fontSize:40}}
        selectYearTitle={false}
        previousTitleStyle={{color: COLORS.green}}
        nextTitleStyle={{color: COLORS.green}}
        startFromMonday={true}
        showDayStragglers={true}
        onDateChange={onDateChange}
      />
      <FlatList
        data={expenseData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  expenseList: {
    marginHorizontal:ResponsiveSize(20),
    borderBottomColor: COLORS.lGrey,
    borderBottomWidth: 1,
    paddingBottom: ResponsiveSize(15),
    paddingTop: ResponsiveSize(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemNo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expenseSymbol: {
    width: ResponsiveSize(15),
    height: ResponsiveSize(15),
    backgroundColor: COLORS.green,
    borderRadius: 7,
  },
  expenseItem: {
    paddingLeft: ResponsiveSize(15),
  },
  expenseItemText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
  timeText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FONTS.interRegular,
  },
  header:{
    
  }
});

export default Calender;
