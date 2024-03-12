import {React, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {COLORS, FONTS} from '../utils/constants';
import ResponsiveSize from '../utils/responsivesSize';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January','February','March','April','May','June','July','August','September','October','November','December'
  ],
  dayNames: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ],
  dayNamesShort: ['Su','Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};

LocaleConfig.defaultLocale = 'fr';

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
    
const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('MainStack')}>
        <Text style={{color: 'black', fontSize: ResponsiveSize(30), fontWeight: 'bold',backgroundColor:COLORS.green}}>
          &larr;
        </Text>
      </TouchableOpacity>
      <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      renderHeader={(date) => {
        const headerText = LocaleConfig.locales['fr'].monthNames[date.getMonth()];
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{headerText}</Text>
          </View>
        );
      }}
      enableSwipeMonths={true}
      hideArrows={true}
      firstDay={1}
      markedDates={{
        [selected]: { selected: true, disableTouchEvent: true }
      }}
      current={'2024-03-11'}
      style={{
        margin:ResponsiveSize(-10)
      }}
      theme={{
        calendarBackground: COLORS.white,
        textSectionTitleColor:COLORS.white ,
        selectedDayBackgroundColor:COLORS.green ,
        selectedDayTextColor: COLORS.white,
        selectedTextColor: COLORS.green,
        todayTextColor: COLORS.green,
        textDayFontWeight:'400',
        textDayFontSize:ResponsiveSize(14),
        textDayFontFamily:FONTS.interRegular,
        textMonthFontWeight:'600',
        textMonthFontFamily:FONTS.interSemi,
        textMonthFontSize:ResponsiveSize(30),
        textDisabledColor:COLORS.grey,
        textDayHeaderFontWeight:'400',
        textDayHeaderFontSize:ResponsiveSize(14),
        textDayHeaderFontFamily:FONTS.interRegular,
        monthTextColor: COLORS.white,
        'stylesheet.calendar.header': {
          header: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.green,
            color:COLORS.white
          },
          week: {
            paddingTop: ResponsiveSize(20),
            paddingBottom:ResponsiveSize(10),
            flexDirection: 'row',
            justifyContent:'space-around',
            backgroundColor: COLORS.green,
          }
        },
      }}
    />
      <FlatList
        data={expenseData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
    }

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  expenseList: {
    marginHorizontal:ResponsiveSize(20),
    borderBottomColor: COLORS.lGrey,
    borderBottomWidth: ResponsiveSize(1),
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
    borderRadius: ResponsiveSize(7),
  },
  expenseItem: {
    paddingLeft: ResponsiveSize(15),
  },
  expenseItemText: {
    color: COLORS.black,
    fontSize: ResponsiveSize(16),
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
  timeText: {
    color: COLORS.black,
    fontSize: ResponsiveSize(14),
    fontWeight: '400',
    fontFamily: FONTS.interRegular,
  },
  headerText:{
    fontFamily:FONTS.interSemi,
    fontSize:ResponsiveSize(30),
    color:COLORS.white,
    fontWeight:'600'
  }
});

export default Calender;
