import {React, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import Header from '../common/header';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS} from '../utils/constants';
import PieChart from 'react-native-pie-chart';
import Button from '../common/Button';

const Insights = ({props}) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
    // props.navigation.navigate('Profile');
  };

  const widthAndHeight = 196;
  const series = [129, 300];
  const sliceColor = ['#E8E8E8', '#5DB075'];
  const greenPercentage = Math.round(
    (series[1] / (series[0] + series[1])) * 100,
  );

  const data = {
    labels: ['item', 'item'],
    datasets: [
      {
        data: [175, 25],
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

  return (
    <View style={styles.container}>
      <Header textThree={'Back'} textOne={'Insights'} show />
      <View style={styles.donutContainer}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.97}
          coverFill={'#FFF'}
        />
        <View style={styles.centerTextContainer}>
          <TouchableOpacity onPress={handleOpenBottomSheet}>
            <Text style={styles.centerHeading}>$32.01</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isBottomSheetOpen}
            onRequestClose={handleCloseBottomSheet}>
            <View style={[styles.bottomSheet, {height: ResponsiveSize(295)}]}>
              <View style={styles.icon1}></View>
              <Text style={styles.modalHeading}>Drawer Header</Text>
              <Text style={styles.modalContent}>
                Consequat velit qui adipisicing sunt do reprehenderit ad laborum
                tempor ullamco exercitation.
              </Text>
              <TouchableOpacity
                onPress={handleCloseBottomSheet}
                style={styles.button}>
                <Text style={styles.buttonText}>Click me</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCloseBottomSheet}>
                <Text style={styles.modalAction}>Secondary Action</Text>
              </TouchableOpacity>
              <View style={styles.icon2}></View>
            </View>
          </Modal>
          <Text style={styles.centerText}>{`${greenPercentage}%`}spent</Text>
        </View>
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
    backgroundColor: 'white',
    height: '100%',
  },
  donutContainer: {
    marginTop: ResponsiveSize(30),
    marginBottom: ResponsiveSize(30),
    alignItems: 'center',
  },
  expenses: {
    flex: 1,
  },
  expenseHead: {
    margin: ResponsiveSize(10),
  },
  expenseText: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
  expenseList: {
    borderBottomColor: COLORS.lGrey,
    borderBottomWidth: 1,
    margin: ResponsiveSize(10),
    marginTop: ResponsiveSize(10),
    paddingBottom: ResponsiveSize(15),
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
  statText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FONTS.interRegular,
  },
  centerTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  centerHeading: {
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.green,
    fontFamily: FONTS.interMedium,
  },
  centerText: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.lGrey,
    fontFamily: FONTS.interRegular,
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1,
  },
  icon1: {
    paddingHorizontal: ResponsiveSize(10),
    paddingVertical: ResponsiveSize(2),
    backgroundColor: COLORS.lGrey,
    borderRadius:ResponsiveSize(10),
  },
  modalHeading: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
  modalContent: {
    color: COLORS.dGrey,
    marginTop: ResponsiveSize(20),
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: ResponsiveSize(40),
    marginBottom: ResponsiveSize(20),
    backgroundColor: COLORS.green,
    width: ResponsiveSize(311),
    height: ResponsiveSize(51),
    borderRadius: 100,
    justifyContent: 'center',
  },
  btnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.interRegular,
    alignSelf: 'center',
  },
  modalAction: {
    color: COLORS.green,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: FONTS.interBold,
  },
  icon2:{
    paddingHorizontal: ResponsiveSize(65),
    paddingVertical: ResponsiveSize(4),
    borderRadius:ResponsiveSize(10),
    backgroundColor: COLORS.black,
    marginTop:ResponsiveSize(20),
    marginBottom:ResponsiveSize(-15)
  },
  button: {
    backgroundColor: COLORS.green,
    padding: ResponsiveSize(16),
    paddingHorizontal: ResponsiveSize(130),
    marginTop: ResponsiveSize(35),
    margin: ResponsiveSize(11),
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
    alignSelf: 'center',
    color: COLORS.white,
    fontFamily: FONTS.interSemi,
  },
});

export default Insights;
