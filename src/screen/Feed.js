import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import {COLORS, FONTS} from '../utils/constants';

const data = [
  {
    id: '1',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  },
  {
    id: '2',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '3',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '4',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
];

const ChatItem = ({header, text, chatText}) => (
  <View style={styles.chatCon}>
    <TouchableOpacity style={styles.avatr}></TouchableOpacity>
    <View style={styles.boxCon}>
      <View style={styles.head}>
        <Text style={styles.headText}>{header}</Text>
        <Text style={styles.tText}>{text}</Text>
      </View>
      <View style={styles.chat}>
        <Text style={styles.chatText}>{chatText}</Text>
      </View>
    </View>
  </View>
);

const Feed = props => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        textThree={'Back'}
        textOne={'Feed'}
        textTwo={'Filter'}
        onPress={() => {
          setModalVisible(true);
        }}
        show
      />
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
            <Text style={styles.modalHeading}>Congratulations!</Text>
            <Text style={styles.modalContent}>
              Consequat velit qui adipisicing sunt do reprehenderit ad laborum
              tempor ullamco exercitation. Ullamco tempor adipisicing et
              voluptate duis sit esse aliqua esse ex dolore esse. Consequat
              velit qui adipisicing sunt.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.btnText}>Click Me</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalAction}>Secondary Action</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.searchField}>
        <InputField field={'Search'} isSearchField={true} />
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ChatItem
            header={item.header}
            text={item.text}
            chatText={item.chatText}
          />
        )}
        keyExtractor={item => item.id}
      />

      <View style={styles.img}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ResponsiveSize(10),
    backgroundColor: COLORS.white,
  },
  searchField: {
    marginTop: ResponsiveSize(20),
  },
  chatCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: ResponsiveSize(10),
  },
  avatr: {
    width: ResponsiveSize(60),
    height: ResponsiveSize(60),
    backgroundColor: COLORS.lWhite,
    borderRadius: 8,
  },
  boxCon: {
    padding: ResponsiveSize(7),
    paddingLeft: ResponsiveSize(10),
    marginRight: ResponsiveSize(60),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lGrey,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: ResponsiveSize(10),
  },
  tText: {
    color: COLORS.grey,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FONTS.interRegular,
  },
  headText: {
    flex: 1,
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: FONTS.interRegular,
  },
  chatText: {
    color: COLORS.black,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: FONTS.interRegular,
    marginBottom: ResponsiveSize(10),
  },
  img: {
    flex: 1,
    padding: ResponsiveSize(70),
    backgroundColor: COLORS.bGrey,
    borderRadius: 8,
    margin: ResponsiveSize(10),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
  },
  modalView: {
    margin: ResponsiveSize(20),
    padding: ResponsiveSize(20),
    backgroundColor: COLORS.white,
    borderRadius: 8,
    alignItems: 'center',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 10,
  },
  modalHeading: {
    color: COLORS.black,
    fontSize: 30,
    fontWeight: '700',
    fontFamily: FONTS.interSemi,
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
});

export default Feed;
