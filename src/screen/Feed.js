import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';

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

const ChatItem = ({header, text, chatText}) => (
  <View style={styles.chatcon}>
    <View style={styles.avatr}></View>
    <View style={styles.boxcon}>
      <View style={styles.head}>
        <Text style={styles.headtext}>{header}</Text>
        <Text style={styles.ttext}>{text}</Text>
      </View>
      <View style={styles.chat}>
        <Text style={styles.chattext}>{chatText}</Text>
      </View>
    </View>
  </View>
);

const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hcontainer}>
        <Header texttwo={'Back'} />
        <Header textone={'Feed'} />
        <Header texttwo={'Filter'} />
      </View>
      <View style={styles.searchfield}>
        <InputField field={'Search'} />
      </View>
      <FlatList
        data={data}
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
    padding: ResponsiveSize(10),
    flex: 1,
    backgroundColor: 'white',
  },
  hcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ResponsiveSize(10),
  },
  searchfield: {
    marginTop: ResponsiveSize(32),
  },
  chatcon: {
    padding:ResponsiveSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: ResponsiveSize(3),
    alignItems: 'center',
  },
  avatr: {
    padding: ResponsiveSize(35),
    backgroundColor: '#F6F6F6',
    marginRight: ResponsiveSize(5),
    borderRadius:8
  },
  boxcon: {
    flexDirection: 'column',
    padding:ResponsiveSize(2),
    paddingLeft:ResponsiveSize(10),
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ttext: {
    marginRight: ResponsiveSize(70),
    color: '#BDBDBD',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter Regular Regular',
  },
  headtext: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Inter Regular Regular',
  },
  chat: {
    marginTop:ResponsiveSize(5),
    marginRight:ResponsiveSize(60),
    paddingBottom:ResponsiveSize(10)
  },
  chattext: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Inter Regular Regular',
  },
  img:{
    flex:1,
    paddingTop:ResponsiveSize(120),
    backgroundColor:'#F0F0F0',
    borderRadius:8,
    marginLeft:ResponsiveSize(10),
    marginRight:ResponsiveSize(10)
  }
});

export default Feed;
