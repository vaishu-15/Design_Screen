import {React, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity,Image} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS} from '../utils/constants';

const data = [
  {
    id: '1',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=66',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '2',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=65',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '3',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=64',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '4',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=63',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '5',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=62',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '6',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=61',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '7',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=60',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '8',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=55',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '9',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=57',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '10',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=56',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '11',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=43',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
  {
    id: '12',
    header: 'Header',
    text: '8m ago',
    image: 'https://source.unsplash.com/random/2000x2000?sig=7',
    chatText:
      "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
    selectedButtonIndex: null,
  },
];

const ContentItem = ({
  header,
  text,
  chatText,
  selectedButtonIndex,
  onPress,
  image
}) => (
  <View style={styles.contentCon}>
     <Image style={styles.imageCon}   source={{
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

const Photos = props => {
  const [contentData, setContentData] = useState(data);

  const handlePress = (index, dataIndex) => {
    const newData = [...contentData];
    newData[dataIndex].selectedButtonIndex = index;
    setContentData(newData);
  };

  return (
    <FlatList
      data={contentData}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => (
        <TouchableOpacity onPress={() => props.navigation.navigate('Images')}>
          <ContentItem
            header={item.header}
            text={item.text}
            chatText={item.chatText}
            image={item.image}
            selectedButtonIndex={item.selectedButtonIndex}
            onPress={buttonIndex => handlePress(buttonIndex, index)}
          />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  contentCon: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: ResponsiveSize(20),
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
});
export default Photos;
