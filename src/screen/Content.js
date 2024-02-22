// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import ResponsiveSize from '../utils/responsivesSize';
// import Header from '../common/header';
// import InputField from '../common/InputField';

// const data = [
//   {
//     id: '1',
//     header: 'Header',
//     text: '8m ago',
//     chatText:
//       "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
//     selectedButtonIndex: null,
//   },
//   {
//     id: '2',
//     header: 'Header',
//     text: '8m ago',
//     chatText:
//       "He'll want to use your yacht, and I don't want this thing smelling like fish. ",
//     selectedButtonIndex: null,
//   },
// ];

// const ContentItem = ({ header, text, chatText, selectedButtonIndex, onPress }) => (
//   <View style={styles.contentcon}>
//     <View style={styles.imagecon}></View>
//     <View style={styles.head}>
//       <Text style={styles.headtext}>{header}</Text>
//     </View>
//     <View style={styles.boxcon}>
//       <Text style={styles.chattext}>{chatText}</Text>
//       <Text style={styles.ttext}>{text}</Text>
//     </View>
//     <View style={styles.bottom}>
//       {['Option 1', 'Option 2', 'Option 3'].map((_, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[
//             styles.bot,
//             selectedButtonIndex === index ? { backgroundColor: '#5DB075' } : { backgroundColor: '#BDBDBD' },
//           ]}
//           onPress={() => onPress(index)}
//         />
//       ))}
//     </View>
//   </View>
// );

// const Content = () => {
//   const [contentData, setContentData] = useState(data);

//   const handlePress = (index, dataIndex) => {
//     const newData = [...contentData];
//     newData[dataIndex].selectedButtonIndex = index;
//     setContentData(newData);
//   };

//   return (
//     <View style={styles.container}>
//       <Header textthree={'Back'} textone={'Content'} texttwo={'Filter'} show/>    
//       <View style={styles.searchfield}>
//         <InputField field={'Search'} isSearchField={true} />
//       </View>
//       <FlatList
//         data={contentData}
//         showsVerticalScrollIndicator={false}
//         renderItem={({ item, index }) => (
//           <ContentItem
//             header={item.header}
//             text={item.text}
//             chatText={item.chatText}
//             selectedButtonIndex={item.selectedButtonIndex}
//             onPress={(buttonIndex) => handlePress(buttonIndex, index)}
//           />
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: ResponsiveSize(10),
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   searchfield: {
//     marginTop: ResponsiveSize(20),
//   },
//   contentcon: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     margin: ResponsiveSize(10),
//     overflow: 'hidden',
//   },
//   imagecon: {
//     padding: ResponsiveSize(120),
//     borderRadius: 8,
//     backgroundColor: '#F6F6F6',
//   },
//   head: {
//     paddingRight: ResponsiveSize(6),
//     paddingTop: ResponsiveSize(6),
//     paddingBottom: ResponsiveSize(6),
//   },
//   headtext: {
//     color: '#000000',
//     fontSize: 16,
//     fontWeight: '700',
//     fontFamily: 'Inter Regular Regular',
//   },
//   chattext: {
//     color: '#000000',
//     fontSize: 14,
//     fontWeight: '400',
//     fontFamily: 'Inter Regular Regular',
//     paddingBottom: ResponsiveSize(5),
//   },
//   ttext: {
//     color: '#BDBDBD',
//     fontSize: 14,
//     fontWeight: '400',
//     fontFamily: 'Inter Regular Regular',
//   },
//   bottom: {
//     alignSelf: 'flex-end',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   bot: {
//     padding: ResponsiveSize(4),
//     margin: ResponsiveSize(4),
//     borderRadius: 4,
//   },
// });

// export default Content;
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
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

const ContentItem = ({ header, text, chatText, selectedButtonIndex, onPress }) => (
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
            selectedButtonIndex === index ? { backgroundColor: '#5DB075' } : { backgroundColor: '#BDBDBD' },
          ]}
          onPress={() => onPress(index)}
        />
      ))}
    </View>
  </View>
);

const Content = () => {
  const [contentData, setContentData] = useState(data);
  const [searchText, setSearchText] = useState('');
  const [showSearchView, setShowSearchView] = useState(false);

  const handlePress = (index, dataIndex) => {
    const newData = [...contentData];
    newData[dataIndex].selectedButtonIndex = index;
    setContentData(newData);
  };

  const handleSearch = () => {
    // Implement search functionality here
    // Filter contentData based on searchText
    // Update state with search results
  };

  const toggleSearchView = () => {
    setShowSearchView(!showSearchView);
  };

  return (
    <View style={styles.container}>
      <Header
        textthree={'Back'}
        textone={'Content'}
        texttwo={'Filter'}
        show
        onSearchPress={toggleSearchView}
      />
      {showSearchView ? (
        <View style={styles.searchView}>
          {/* Implement search view here */}
          <InputField
            field={'Search'}
            isSearchField={true}
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
        </View>
      ) : (
        <View style={styles.contentView}>
          <View style={styles.searchfield}>
            <InputField field={'Search'} isSearchField={true} />
          </View>
          <FlatList
            data={contentData}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <ContentItem
                header={item.header}
                text={item.text}
                chatText={item.chatText}
                selectedButtonIndex={item.selectedButtonIndex}
                onPress={(buttonIndex) => handlePress(buttonIndex, index)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
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
  searchView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    flex: 1,
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
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bot: {
    padding: ResponsiveSize(4),
    margin: ResponsiveSize(4),
    borderRadius: 4,
  },
});

export default Content;
