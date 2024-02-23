import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import {BarChart} from 'react-native-chart-kit';

const Expenses = () => {
  const data = {
    labels: ['item', 'item', 'item', 'item', 'item', 'item'],
    datasets: [
      {
        data: [50, 45, 28, 80, 99, 43],
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
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 'white',
    backgroundGradientTo: 'white',
    color: () => '#4B9460',
    fillShadowGradientOpacity: 1,
    fillShadowGradientFrom: '#4B9460',
    fillShadowGradientTo: '#4B9460',
    labelColor: () => 'black',
    propsForVerticalLabels: {
      fontSize: 10,
      fontWeight: '400',
      fontFamily: 'Inter-Regular',
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
      <Header textthree={'Back'} textone={'Expenses'} texttwo={'New'} show />
      <View style={styles.graphContainer}>
        <BarChart
          data={data}
          width={350}
          height={240}
          chartConfig={chartConfig}
          showBarTops={false}
          yAxisLabel={''}
          fromZero={true}
          segments={2}
          verticalLabelRotation={120}
        />
      </View>
      <View style={styles.expenses}>
        <View style={styles.expenseHead}>
          <Text style={styles.expenseText}>Expenses</Text>
        </View>
        <FlatList
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
    backgroundColor: 'white',
  },
  graphContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 4,
    margin: ResponsiveSize(10),
  },
  expenseHead: {
    margin: ResponsiveSize(10),
  },
  expenseText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
  expenseList: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    margin: ResponsiveSize(10),
    paddingBottom: ResponsiveSize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemNo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expenseSymbol: {
    width: ResponsiveSize(15),
    height: ResponsiveSize(15),
    backgroundColor: '#5DB075',
    borderRadius: 7,
  },
  expenseItemText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
  statText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
  },
});

export default Expenses;
