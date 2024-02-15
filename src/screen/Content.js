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
];

const ContentItem = ({header, text, chatText}) => (
  <View style={styles.contentcon}>
    <View style={styles.imagecon}></View>
    <View style={styles.head}>
      <Text style={styles.headtext}>{header}</Text>
    </View>
    <View style={styles.boxcon}>
      <Text style={styles.chattext}>{chatText}</Text>
      <Text style={styles.ttext}>{text}</Text>
    </View>
    <View style={styles.bottom}>
      <View style={styles.bot}></View>
      <View style={styles.bot}></View>
      <View style={styles.bot}></View>
    </View>
  </View>
);

const Content = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hcontainer}>
        <Header texttwo={'Back'} />
        <Header textone={'Content'} />
        <Header texttwo={'Filter'} />
      </View>
      <View style={styles.searchfield}>
        <InputField field={'Search'} isSearchField={true} />
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ContentItem
            header={item.header}
            text={item.text}
            chatText={item.chatText}
          />
        )}
        keyExtractor={item => item.id}
      />
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
    marginTop: ResponsiveSize(20),
  },
  contentcon: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: ResponsiveSize(10),
  },
  imagecon: {
    padding: ResponsiveSize(120),
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
  head: {
    paddingRight: ResponsiveSize(6),
    paddingTop: ResponsiveSize(6),
    paddingBottom: ResponsiveSize(6),
  },
  headtext: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Inter Regular Regular',
  },
  chattext: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter Regular Regular',
    paddingBottom: ResponsiveSize(5),
  },
  ttext: {
    color: '#BDBDBD',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter Regular Regular',
  },
  bottom: {
    width: ResponsiveSize(40),
    height: ResponsiveSize(8),
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bot: {
    backgroundColor: '#5DB075',
    width: ResponsiveSize(8),
    height: ResponsiveSize(8),
    borderRadius: 4,
  },
});
export default Content;
