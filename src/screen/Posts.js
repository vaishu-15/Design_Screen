import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity,Image} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS} from '../utils/constants';

const data = [
  {
    id: '1',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=10',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '2',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=9',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",

  },
  {
    id: '3',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=8',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '4',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=7',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '5',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=6',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '6',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=5',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '7',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=4',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '8',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=3',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '9',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=2',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '10',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=1',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '11',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=12',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
  {
    id: '12',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/200x200?sig=13',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
  },
];

const ChatItem = ({header, text, chatText,image}) => (
  <View style={styles.chatCon}>
    <Image style={styles.avatr}   source={{
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

const Posts = ({navigation}) => {
  
  const navigateToMessages = () => {
    navigation.navigate("Messages"); 
   
  };
return( 
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity onPress={navigateToMessages}>
          <ChatItem
            header={item.header}
            text={item.text}
            chatText={item.chatText}
            image={item.image}
          />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
 
);
      }
const styles = StyleSheet.create({
  chatCon: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:ResponsiveSize(20)
  },
  avatr: {
    padding:ResponsiveSize(35),
    backgroundColor: COLORS.lWhite,
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
});
export default Posts;
