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
import {AirbnbRating} from 'react-native-ratings';

const data = [
  {
    id: '1',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
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

const ChatItem = ({header, text, chatText, setModalVisible, modalVisible}) => (
  <View style={styles.chatCon}>
    <View style={styles.avatr}></View>
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

const Feed = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header textThree={'Back'} textOne={'Feed'} textTwo={'Filter'} show />
      <View style={styles.searchField}>
        <InputField field={'Search'} isSearchField={true} />
      </View>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onpress={() => {
              setModalVisible(true);
            }}>
            <ChatItem
              header={item.header}
              text={item.text}
              chatText={item.chatText}
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
                    Consequat velit qui adipisicing sunt do reprehenderit ad
                    laborum tempor ullamco exercitation. Ullamco tempor
                    adipisicing et voluptate duis sit esse aliqua esse ex dolore
                    esse. Consequat velit qui adipisicing sunt.
                  </Text>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.btnText}>Click Me</Text>
                  </TouchableOpacity>
                  <Text style={styles.modalAction}>Secondary Action</Text>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.img}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(10),
    backgroundColor: 'white',
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
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  boxCon: {
    padding: ResponsiveSize(7),
    paddingLeft: ResponsiveSize(10),
    marginRight: ResponsiveSize(60),
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: ResponsiveSize(10),
  },
  tText: {
    color: '#BDBDBD',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter Regular Regular',
  },
  headText: {
    flex: 1,
    color: '#000000',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Inter Regular Regular',
  },
  chatText: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Inter Regular Regular',
    marginBottom: ResponsiveSize(10),
  },
  img: {
    flex: 1,
    padding: ResponsiveSize(70),
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    margin: ResponsiveSize(10),
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
  modalHeading: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Inter-SemiBold',
  },
  modalContent: {
    color: '#666666',
    marginTop: ResponsiveSize(20),
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
  },
  modalButton: {
    marginTop: ResponsiveSize(40),
    marginBottom: ResponsiveSize(20),
    backgroundColor: '#5DB075',
    width: ResponsiveSize(311),
    height: ResponsiveSize(51),
    borderRadius: 100,
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter Regular Regular',
    alignSelf: 'center',
  },
  modalAction: {
    color: '#5DB075',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
  },
});

export default Feed;

// centeredView: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#5DB075',
// },
// modalView: {
//   margin: ResponsiveSize(20),
//   padding: ResponsiveSize(30),
//   backgroundColor: '#FFFFFF',
//   borderRadius: 8,
//   alignItems: 'center',
//   shadowColor: '#262483',
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
//   shadowOpacity: 0.25,
//   elevation: 10,
// },
// modalheading: {
//   color: '#000000',
//   fontSize: 30,
//   fontWeight: '700',
//   fontFamily: 'Inter-SemiBold',
// },
// modalcontent: {
//   color: '#666666',
//   marginTop: ResponsiveSize(20),
//   fontSize: 16,
//   fontWeight: '500',
//   fontFamily: 'Inter-Medium',
//   textAlign: 'center',
// },
// modalbutton: {
//   marginTop: ResponsiveSize(40),
//   marginBottom: ResponsiveSize(20),
//   backgroundColor: '#5DB075',
//   width: ResponsiveSize(311),
//   height: ResponsiveSize(51),
//   borderRadius: 100,
//   justifyContent: 'center',
// },
// btntext: {
//   color: '#FFFFFF',
//   fontSize: 16,
//   fontWeight: '600',
//   fontFamily: 'Inter-SemiBold',
//   alignSelf: 'center',
// },
// modalaction: {
//   color: '#5DB075',
//   fontSize: 16,
//   fontWeight: '600',
//   fontFamily: 'Inter-SemiBold',
// },

// <Modal
//         animationType="fade"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <AirbnbRating
//               type="star"
//               ratingCount={5}
//               size={25}
//               onFinishRating={this.ratingCompleted}
//               selectedColor="#FFB84E"
//               starContainerStyle={{
//                 width: ResponsiveSize(180),
//                 justifyContent: 'space-between',
//               }}
//               reviews={false}
//               ratingContainerStyle={{height: 10, marginBottom: 35}}
//             />

//             <Text style={styles.modalheading}>Rate our app</Text>
//             <Text style={styles.modalcontent}>
//               Consequat velit qui adipisicing sunt do reprehenderit ad laborum
//               tempor ullamco exercitation. Ullamco tempor adipisicing et
//               voluptate duis sit esse aliqua esse ex dolore esse. Consequat
//               velit qui adipisicing sunt.
//             </Text>
//             <TouchableOpacity
//               style={styles.modalbutton}
//               onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.btntext}>I love it!</Text>
//             </TouchableOpacity>
//             <Text style={styles.modalaction}>
//               Don’t like the app? Let us know.
//             </Text>
//           </View>
//         </View>
//       </Modal>
