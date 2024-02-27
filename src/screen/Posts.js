import React from 'react';
import {View, Text, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import { COLORS,FONTS } from '../utils/constants';

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

const Posts = () => (
    <View >
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
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );

  const styles = StyleSheet.create({
    chatCon: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: ResponsiveSize(20),
      overflow: 'hidden',
    },
    avatr: {
      width: ResponsiveSize(60),
      height: ResponsiveSize(60),
      backgroundColor: COLORS.lWhite,
      borderRadius: 8,
    },
    boxCon: {
      padding: ResponsiveSize(7),
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
 
  })
  export default Posts;