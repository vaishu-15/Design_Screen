import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity,Image} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import Header from '../common/header';
import InputField from '../common/InputField';
import {COLORS, FONTS} from '../utils/constants';

const data = [
  {
    id: '1',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=92',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '2',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=93',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '3',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=94',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '4',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=95',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '5',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=96',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '6',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=98',
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
  image
}) => (
  <View style={styles.contentCon}>
    <Image style={styles.imageCon}  source={{
            uri: image,
          }}/>
    <View style={styles.head}>
      <Text style={styles.headText}>{header}</Text>
    </View>
    <View style={styles.boxCon}>
      <Text style={styles.chatText}>{chatText}</Text>
      <Text style={styles.tText}>{text}</Text>
    </View>
    <View style={styles.bottom}>
      {['Option 1', 'Option 2', 'Option 3'].map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.bot,
            selectedButtonIndex === index
              ? {backgroundColor: COLORS.green}
              : {backgroundColor: COLORS.lGrey},
          ]}
          onPress={() => onPress(index)}
        />
      ))}
    </View>
  </View>
);

const Content = props => {
  const [contentData, setContentData] = useState(data);
  const [isSearching, setIsSearching] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const navigateToPostPage = () => {
    props.navigation.navigate('PostPage');
  };

  const handlePress = (index, dataIndex) => {
    const newData = [...contentData];
    newData[dataIndex].selectedButtonIndex = index;
    setContentData(newData);
  };

  return (
    <View style={styles.container}>
      <Header textThree={'Back'} 
      back={() => props.navigation.goBack('')} 
      textOne={'Content'} 
      textTwo={'Filter'}
      show />
      <View style={styles.searchField}>
        <InputField
          field={'Search'}
          isSearchField={true}
          select={handleSearchClick}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      {!isSearching ? (
        <FlatList
          data={contentData}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ContentItem
              header={item.header}
              text={item.text}
              chatText={item.chatText}
              image={item.image}
              selectedButtonIndex={item.selectedButtonIndex}
              onPress={buttonIndex => handlePress(buttonIndex, index)}
            />
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <FlatList
          data={searchData}
          renderItem={({item}) => (
            <TouchableOpacity onPress={navigateToPostPage}>
              <SearchItem result={item.result} />
            </TouchableOpacity>
          )}
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
    backgroundColor: COLORS.white,
  },
  searchField: {
    marginTop: ResponsiveSize(20),
  },
  contentCon: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: ResponsiveSize(10),
    overflow: 'hidden',
  },
  imageCon: {
    padding: ResponsiveSize(120),
    borderRadius: ResponsiveSize(8),
    backgroundColor: COLORS.lWhite,
  },
  head: {
    paddingRight: ResponsiveSize(6),
    paddingTop: ResponsiveSize(6),
    paddingBottom: ResponsiveSize(6),
  },
  headText: {
    color: COLORS.black,
    fontSize: ResponsiveSize(16),
    fontWeight: '700',
    fontFamily: FONTS.interSemi,
  },
  chatText: {
    color: COLORS.black,
    fontSize: ResponsiveSize(14),
    fontWeight: '400',
    fontFamily: FONTS.interRegular,
    paddingBottom: ResponsiveSize(5),
  },
  tText: {
    color: COLORS.grey,
    fontSize: ResponsiveSize(14),
    fontWeight: '400',
    fontFamily: FONTS.interRegular,
  },
  bottom: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bot: {
    padding: ResponsiveSize(4),
    margin: ResponsiveSize(4),
    borderRadius: ResponsiveSize(4),
  },
  searchCon: {
    margin: ResponsiveSize(10),
    paddingLeft: ResponsiveSize(10),
    paddingBottom: ResponsiveSize(10),
    borderBottomColor: COLORS.lGrey,
    borderBottomWidth: ResponsiveSize(1),
  },
  searchText: {
    color: COLORS.black,
    fontSize: ResponsiveSize(16),
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
});

export default Content;
