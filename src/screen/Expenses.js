import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import {BarChart} from 'react-native-chart-kit';
import {COLORS, FONTS} from '../utils/constants';

const Expenses = props => {
  const data = {
    labels: ['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item'],
    datasets: [
      {
        data: [99, 55, 99, 55, 99, 55, 99, 55],
        colors: [
          (opacity = 1) => COLORS.green,
          (opacity = 1) => COLORS.dGreen,
          (opacity = 1) => COLORS.green,
          (opacity = 1) => COLORS.dGreen,
          (opacity = 1) => COLORS.green,
          (opacity = 1) => COLORS.dGreen,
          (opacity = 1) => COLORS.green,
          (opacity = 1) => COLORS.dGreen,
        ],
      },
    ],
  };

  const expenseData = [
    {id: '1', item: 'Item ', statistic: 'Statistic '},
    {id: '2', item: 'Item ', statistic: 'Statistic '},
    {id: '3', item: 'Item ', statistic: 'Statistic '},
    {id: '4', item: 'Item ', statistic: 'Statistic '},
    {id: '5', item: 'Item ', statistic: 'Statistic '},
    {id: '6', item: 'Item ', statistic: 'Statistic '},
    {id: '7', item: 'Item ', statistic: 'Statistic '},
    {id: '8', item: 'Item ', statistic: 'Statistic '},
    {id: '9', item: 'Item ', statistic: 'Statistic '},
    {id: '10', item: 'Item ', statistic: 'Statistic '},
    {id: '11', item: 'Item ', statistic: 'Statistic '},
    {id: '12', item: 'Item ', statistic: 'Statistic '},
    {id: '13', item: 'Item ', statistic: 'Statistic '},
    {id: '14', item: 'Item ', statistic: 'Statistic '},
    {id: '15', item: 'Item ', statistic: 'Statistic '},
    {id: '16', item: 'Item ', statistic: 'Statistic '},
    {id: '17', item: 'Item ', statistic: 'Statistic '},
    {id: '18', item: 'Item ', statistic: 'Statistic '},
    {id: '19', item: 'Item ', statistic: 'Statistic '},
    {id: '20', item: 'Item ', statistic: 'Statistic '},
    {id: '21', item: 'Item ', statistic: 'Statistic '},
    {id: '22', item: 'Item ', statistic: 'Statistic '},
    {id: '23', item: 'Item ', statistic: 'Statistic '},
  ];

  const renderItem = ({item}) => (
    <View style={styles.expenseList}>
      <View style={styles.itemNo}>
        <View style={styles.expenseSymbol}></View>
        <View style={styles.expenseItem}>
          <Text style={styles.expenseItemText}>{item.item}</Text>
        </View>
      </View>
      <View style={styles.statistic}>
        <Text style={styles.statText}>{item.statistic}</Text>
      </View>
    </View>
  );

  const chartConfig = {
    backgroundColor: "transparent",

    backgroundGradientFromOpacity:0,
    backgroundGradientTo: COLORS.white,
    color: () => COLORS.dGreen,
    fillShadowGradientOpacity: 1,
    fillShadowGradientFrom: COLORS.dGreen,
    fillShadowGradientTo: COLORS.dGreen,
    labelColor: () => COLORS.black,
    propsForVerticalLabels: {
      fontSize: 10,
      fontWeight: '400',
      fontFamily: FONTS.interRegular,
    },
    propsForHorizontalLabels: {
      fontSize: 0,
    },
    barPercentage: 0.5,
    barRadius: 7,
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
  };

  return (
    <View style={styles.container}>
      <Header
        textThree={'Back'} 
        back={() => props.navigation.goBack('')}
        textOne={'Expenses'}
        textFour={'New'}
        onPress={() => props.navigation.navigate('Calender')}
        new
        show
      />
      <View style={styles.graphContainer}>
        <BarChart
          data={data}
          width={350}
          height={240}
          chartConfig={chartConfig}
          showBarTops={false}
          fromZero={true}
          segments={2}
          flatColor={true}
          withInnerLines={false}
          withCustomBarColorFromData={true}
          verticalLabelRotation={120}
        />
      </View>
      <View style={styles.expenses}>
        <View style={styles.expenseHead}>
          <Text style={styles.expenseText}>Expenses</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={expenseData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(10),
    flex: 1,
    backgroundColor: COLORS.white,
    height: '100%',
  },
  graphContainer: {
    backgroundColor: COLORS.white,
    borderWidth: ResponsiveSize(1),
    borderColor: COLORS.lGrey,
    borderRadius: ResponsiveSize(4),
    margin: ResponsiveSize(10),
  },
  expenses: {
    flex: 1,
  },
  expenseHead: {
    margin: ResponsiveSize(10),
  },
  expenseText: {
    color: COLORS.black,
    fontSize: ResponsiveSize(24),
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
  expenseList: {
    borderBottomColor: COLORS.lGrey,
    borderBottomWidth: ResponsiveSize(1),
    margin: ResponsiveSize(10),
    paddingBottom: ResponsiveSize(10),
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
  statText: {
    color: COLORS.black,
    fontSize: ResponsiveSize(14),
    fontWeight: '400',
    fontFamily: FONTS.interRegular,
  },
});

export default Expenses;
