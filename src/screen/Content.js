import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
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
    selectedButtonIndex: null,
  },
  {
    id: '2',
    header: 'Header',
    text: '8m ago',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
];

const searchData = [
  {id: '1', result: 'Search result'},
  {id: '2', result: 'Search result'},
  {id: '3', result: 'Search result'},
  {id: '4', result: 'Search result'},
  {id: '5', result: 'Search result'},
  {id: '6', result: 'Search result'},
];

const SearchItem = ({result}) => (
  <View style={styles.searchCon}>
    <Text style={styles.searchText}>{result}</Text>
  </View>
);

const ContentItem = ({
  header,
  text,
  chatText,
  selectedButtonIndex,
  onPress,
}) => (
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
      {['Option 1', 'Option 2', 'Option 3'].map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.bot,
            selectedButtonIndex === index
              ? {backgroundColor: '#5DB075'}
              : {backgroundColor: '#BDBDBD'},
          ]}
          onPress={() => onPress(index)}
        />
      ))}
    </View>
  </View>
);

const Content = () => {
  const [contentData, setContentData] = useState(data);
  const [isSearching, setIsSearching] = useState(false);

  const handlePress = (index, dataIndex) => {
    const newData = [...contentData];
    newData[dataIndex].selectedButtonIndex = index;
    setContentData(newData);
  };

  return (
    <View style={styles.container}>
      <Header textthree={'Back'} textone={'Content'} texttwo={'Filter'} show />
      <View style={styles.searchfield}>
        <InputField field={'Search'} isSearchField={true} />
      </View>
      {!isSearching && (                 //for the content
        <FlatList
          data={contentData}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ContentItem
              header={item.header}
              text={item.text}
              chatText={item.chatText}
              selectedButtonIndex={item.selectedButtonIndex}
              onPress={buttonIndex => handlePress(buttonIndex, index)}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
      {isSearching && (          //for the search history
        <FlatList
          data={searchData}
          renderItem={({item}) => <SearchItem result={item.result} />}
          keyExtractor={item => item.id}
        />
      )}
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
  contentcon: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: ResponsiveSize(10),
    overflow: 'hidden',
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
    fontFamily: 'Inter-SemiBold',
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
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bot: {
    padding: ResponsiveSize(4),
    margin: ResponsiveSize(4),
    borderRadius: 4,
  },
  searchCon: {
    margin: ResponsiveSize(10),
    paddingLeft: ResponsiveSize(10),
    paddingBottom: ResponsiveSize(10),
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  searchText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
});

export default Content;
