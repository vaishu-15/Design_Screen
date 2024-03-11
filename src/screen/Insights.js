import {React, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Header from '../common/header';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS} from '../utils/constants';
import PieChart from 'react-native-pie-chart';

const Insights = props => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleBackgroundClick = () => {
    if (isBottomSheetOpen) {
      handleCloseBottomSheet();
    }
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
      <Header
        textThree={'Back'}
        back={() => props.navigation.navigate('MainStack')}
        textOne={'Insights'}
        show
      />
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
            <TouchableOpacity
              style={styles.modalBackground}
              onPress={handleBackgroundClick}>
              <View style={[styles.bottomSheet, {height: ResponsiveSize(310)}]}>
                <TouchableOpacity onPress={handleCloseBottomSheet}>
                  <View style={styles.icon1}></View>
                </TouchableOpacity>
                <Text style={styles.modalHeading}>Drawer Header</Text>
                <Text style={styles.modalContent}>
                  Consequat velit qui adipisicing sunt do reprehenderit ad
                  laborum tempor ullamco exercitation.
                </Text>
                <TouchableOpacity
                  onPress={handleCloseBottomSheet}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Click Me</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCloseBottomSheet}>
                  <Text style={styles.modalAction}>Secondary Action</Text>
                </TouchableOpacity>
                <View style={styles.icon2}></View>
              </View>
            </TouchableOpacity>
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
    fontSize: ResponsiveSize(24),
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
  expenseList: {
    borderBottomColor: COLORS.lGrey,
    borderBottomWidth: ResponsiveSize(1),
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
    borderRadius:ResponsiveSize(7),
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
  centerTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  centerHeading: {
    fontSize: ResponsiveSize(24),
    fontWeight: '500',
    color: COLORS.green,
    fontFamily: FONTS.interMedium,
  },
  centerText: {
    fontSize: ResponsiveSize(10),
    fontWeight: '400',
    color: COLORS.lGrey,
    fontFamily: FONTS.interRegular,
  },
  modalBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    transition: 'all 0.3s ease',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: ResponsiveSize(10),
    borderTopRightRadius: ResponsiveSize(10),
    paddingVertical: ResponsiveSize(23),
    paddingHorizontal: ResponsiveSize(25),
    bottom: 0,
    borderWidth: ResponsiveSize(1),
    zIndex: ResponsiveSize(2),
  },
  icon1: {
    paddingHorizontal: ResponsiveSize(20),
    paddingVertical: ResponsiveSize(2),
    backgroundColor: COLORS.lGrey,
    borderRadius: ResponsiveSize(10),
    marginBottom: ResponsiveSize(20),
  },
  modalHeading: {
    color: COLORS.black,
    fontSize: ResponsiveSize(24),
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
  modalContent: {
    color: COLORS.dGrey,
    marginTop: ResponsiveSize(20),
    fontSize: ResponsiveSize(16),
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: COLORS.green,
    width: ResponsiveSize(311),
    height: ResponsiveSize(51),
    borderRadius: ResponsiveSize(100),
    justifyContent: 'center',
  },
  modalAction: {
    color: COLORS.green,
    fontSize: ResponsiveSize(16),
    fontWeight: '700',
    fontFamily: FONTS.interBold,
  },
  icon2: {
    paddingHorizontal: ResponsiveSize(65),
    paddingVertical: ResponsiveSize(3),
    borderRadius: ResponsiveSize(10),
    backgroundColor: COLORS.black,
    marginTop: ResponsiveSize(20),
    marginBottom: ResponsiveSize(-15),
  },
  button: {
    backgroundColor: COLORS.green,
    padding: ResponsiveSize(16),
    paddingHorizontal: ResponsiveSize(130),
    marginTop: ResponsiveSize(20),
    margin: ResponsiveSize(11),
    borderRadius: ResponsiveSize(100),
  },
  buttonText: {
    fontWeight: '600',
    fontSize: ResponsiveSize(16),
    alignSelf: 'center',
    color: COLORS.white,
    fontFamily: FONTS.interSemi,
  },
});

export default Insights;
