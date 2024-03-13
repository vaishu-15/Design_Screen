import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  Image
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
    image: 'https://source.unsplash.com/random/200x200?sig=7'
  },
  {
    id: '2',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
      image: 'https://source.unsplash.com/random/200x200?sig=9'
  },
  {
    id: '3',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
      image: 'https://source.unsplash.com/random/200x200?sig=10'
  },
  {
    id: '4',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
      image: 'https://source.unsplash.com/random/200x200?sig=11'
  },
  {
    id: '5',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
      image: 'https://source.unsplash.com/random/200x200?sig=8'
  },
  {
    id: '6',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
      image: 'https://source.unsplash.com/random/200x200?sig=12'
  },
  {
    id: '7',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
      image: 'https://source.unsplash.com/random/200x200?sig=13'
  },
  {
    id: '8',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
      image: 'https://source.unsplash.com/random/200x200?sig=14'
  },
  {
    id: '9',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
      image: 'https://source.unsplash.com/random/200x200?sig=15'
  },
];

const ChatItem = ({header, text, chatText,image}) => (
  <View style={styles.chatCon}>
    <Image style={styles.avatr}  source={{
            uri: image,
          }}/>
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
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Header
        textOne={'Feed'}
        textTwo={'Filter'}
        filter={() => {
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
        <TouchableOpacity style={styles.centeredView} onPress={() => setModalVisible(!modalVisible)} >
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
        </TouchableOpacity>
      </Modal>
      <View style={styles.searchField}>
        <InputField field={'Search'} isSearchField={true} value={search} onChangeText={setSearch}/>
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ChatItem
            header={item.header}
            text={item.text}
            chatText={item.chatText}
            image={item.image}
          />
        )}
        keyExtractor={item => item.id}
      />

    <Image style={styles.img}   source={{
            uri: "https://source.unsplash.com/random/6000x6000?sig=4",
          }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: ResponsiveSize(10),
    backgroundColor: COLORS.white,
  },
  searchField: {
    marginTop: ResponsiveSize(20),
  },
  chatCon: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: ResponsiveSize(10),
    height:ResponsiveSize(100)
  },
  avatr: {
    padding:ResponsiveSize(35),
    borderRadius: ResponsiveSize(8),
  },
  boxCon: {
    flex:1,
    padding: ResponsiveSize(7),
    margin:ResponsiveSize(5),
    borderBottomWidth: ResponsiveSize(1),
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
    fontSize: ResponsiveSize(14),
    fontWeight: '400',
    fontFamily: FONTS.interRegular,
  },
  headText: {
    flex: 1,
    color: COLORS.black,
    fontWeight: '700',
    fontSize: ResponsiveSize(16),
    fontFamily: FONTS.interRegular,
  },
  chatText: {
    color: COLORS.black,
    fontWeight: '400',
    fontSize: ResponsiveSize(14),
    fontFamily: FONTS.interRegular,
  },
  img: {
    flex: 1,
    padding: ResponsiveSize(70),
    borderRadius: ResponsiveSize(8),
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
    borderRadius: ResponsiveSize(8),
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
    fontSize: ResponsiveSize(30),
    fontWeight: '700',
    fontFamily: FONTS.interSemi,
  },
  modalContent: {
    color: COLORS.dGrey,
    marginTop: ResponsiveSize(20),
    fontSize:ResponsiveSize(16),
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
    borderRadius: ResponsiveSize(100),
    justifyContent: 'center',
  },
  btnText: {
    color: COLORS.white,
    fontSize: ResponsiveSize(16),
    fontWeight: '600',
    fontFamily: FONTS.interRegular,
    alignSelf: 'center',
  },
  modalAction: {
    color: COLORS.green,
    fontSize: ResponsiveSize(16),
    fontWeight: '700',
    fontFamily: FONTS.interBold,
  },
});

export default Feed;
