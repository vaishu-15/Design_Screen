import {React ,useState} from 'react';
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

const ContentItem = ({
  header,
  text,
  chatText,
  selectedButtonIndex,
  onPress,
}) => (
  <View style={styles.contentCon}>
    <View style={styles.imageCon}></View>
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
              : {backgroundColor: COLORS.white},
          ]}
          onPress={() => onPress(index)}
        />
      ))}
    </View>
  </View>
);

const Photos = () => {
  const [contentData, setContentData] = useState(data);
  return(
    <View >
      <FlatList
          data={contentData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity>
              <ContentItem
                header={item.header}
                text={item.text}
                chatText={item.chatText}
                selectedButtonIndex={item.selectedButtonIndex}
                onPress={(buttonIndex) => handlePress(buttonIndex, index)}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
contentCon: {
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: ResponsiveSize(10),
  overflow: 'hidden',
},
imageCon: {
  padding: ResponsiveSize(120),
  borderRadius: 8,
  backgroundColor: COLORS.lWhite,
},
head: {
  paddingRight: ResponsiveSize(6),
  paddingTop: ResponsiveSize(6),
  paddingBottom: ResponsiveSize(6),
},
headText: {
  color: COLORS.black,
  fontSize: 16,
  fontWeight: '700',
  fontFamily: FONTS.interSemi,
},
chatText: {
  color: COLORS.black,
  fontSize: 14,
  fontWeight: '400',
  fontFamily: FONTS.interRegular,
  paddingBottom: ResponsiveSize(5),
},
tText: {
  color: COLORS.grey,
  fontSize: 14,
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
  borderRadius: 4,
}
})
export default Photos;