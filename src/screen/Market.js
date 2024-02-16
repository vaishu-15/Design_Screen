import React, {useState} from 'react';
import {View, StyleSheet, Modal, TouchableOpacity, Text} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import Deals from '../common/Deals';

const Market = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        textthree={'Back'}
        textone={'Market'}
        texttwo={'Filter'}
        onpress={() => {
          setModalVisible(true);
        }}
        show
      />
      <View style={styles.searchfield}>
        <InputField field={'Search'} isSearchField={true} />
      </View>
      <Deals dealone={'Hot deals'} />
      <Deals dealone={'Trending'} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalheading}>Congratulations!</Text>
            <Text style={styles.modalcontent}>
              Consequat velit qui adipisicing sunt do reprehenderit ad laborum
              tempor ullamco exercitation. Ullamco tempor adipisicing et
              voluptate duis sit esse aliqua esse ex dolore esse. Consequat
              velit qui adipisicing sunt.
            </Text>
            <TouchableOpacity
              style={styles.modalbutton}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.btntext}>Click Me</Text>
            </TouchableOpacity>
            <Text style={styles.modalaction}>Secondary Action</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(10),
    flex: 1,
    backgroundColor: 'white',
  },
  searchfield: {
    marginTop: ResponsiveSize(20),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5DB075',
  },
  modalView: {
    margin: ResponsiveSize(20),
    padding: ResponsiveSize(30),
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#262483',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 10,
  },
  modalheading: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Inter-SemiBold',
  },
  modalcontent: {
    color: '#666666',
    marginTop: ResponsiveSize(20),
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
  modalbutton: {
    marginTop: ResponsiveSize(40),
    marginBottom: ResponsiveSize(20),
    backgroundColor: '#5DB075',
    width: ResponsiveSize(311),
    height: ResponsiveSize(51),
    borderRadius: 100,
    justifyContent: 'center',
  },
  btntext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter Regular Regular',
    alignSelf: 'center',
  },
  modalaction: {
    color: '#5DB075',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
  },
});

export default Market;
