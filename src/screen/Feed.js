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
      <Header textthree={'Back'} textone={'Feed'} texttwo={'Filter'} show />
      <View style={styles.searchfield}>
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
    padding: ResponsiveSize(10),
    backgroundColor: 'white',
  },
  searchfield: {
    marginTop: ResponsiveSize(20),
  },
  chatcon: {
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
  boxcon: {
    padding: ResponsiveSize(7),
    paddingLeft: ResponsiveSize(10),
    marginRight:ResponsiveSize(60),
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:ResponsiveSize(10)
  },
  ttext: {
    color: '#BDBDBD',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter Regular Regular',
  },
  headtext: {
    flex: 1,
    color: '#000000',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Inter Regular Regular',
  },
  chattext: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Inter Regular Regular',
    marginBottom:ResponsiveSize(10)
  },
  img: {
    flex: 1,
    padding: ResponsiveSize(70),
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    margin:ResponsiveSize(10)
  },
});

export default Feed;
