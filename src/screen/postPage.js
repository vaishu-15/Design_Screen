import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS} from '../utils/constants';
import {ScrollView} from 'react-native-gesture-handler';

const PostPage = props => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack('Content')}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
          &larr;
        </Text>
      </TouchableOpacity>
      <View style={Styles.poster}></View>
      <View style={Styles.postContent}>
        <Text style={Styles.postTitle}>Post Title Here...</Text>
        <Text style={Styles.postAuthor}>Author</Text>

        <Text style={Styles.postData}>
          Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum
          elit ex ut. Dolore exercitation nulla tempor consequat aliquip
          occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure quis nulla
          eu consequat fugiat Lorem sunt magna et consequat labore. Laboris
          incididunt id Lorem est duis deserunt nisi dolore eiusmod culpa
          exercitation consectetur. Fugiat do aliqua laboris cillum sint dolor
          officia adipisicing excepteur fugiat officia. Cupidatat ut elit
          consequat ea laborum occaecat laborum aute consectetur Lorem
          exercitation. Lorem anim minim officia aliquip commodo deserunt
          mollit. Duis deserunt quis cillum voluptate duis ipsum quis incididunt
          elit excepteur excepteur labore duis cillum. Voluptate sint nulla
          minim eiusmod in nulla. Ea id ad duis esse adipisicing culpa ex esse
          ea dolore consequat. Reprehenderit eu minim veniam aliquip do ipsum
          duis do qui adipisicing aliquip ad occaecat. Enim reprehenderit sunt
          do do. Ex fugiat nisi sit anim culpa nisi. Non labore fugiat culpa
          magna. Commodo esse Lorem ex duis do et do. Est laboris cupidatat ad
          est anim adipisicing sit labore do dolor officia. Fugiat consequat in
          excepteur reprehenderit id aliquip voluptate sint enim proident
          aliquip occaecat quis non. Ad nulla aliqua est amet aliqua sint est
          occaecat amet sunt. Ullamco laborum qui sint officia officia ad Lorem
          culpa minim voluptate occaecat id duis esse. Ullamco sunt magna
          consectetur excepteur. Id cupidatat proident ex ad elit laboris. Nulla
          aute sit occaecat laboris. Laboris minim aliquip exercitation elit
          commodo ipsum et fugiat sit anim laborum proident cillum laboris. Et
          cillum tempor esse sit anim et veniam. Tempor magna irure ex ea id
          fugiat. Ex eu sint tempor quis exercitation amet ut deserunt sit
          fugiat aliquip nostrud nulla. Eu sunt laborum elit consectetur tempor
          sunt dolore in sunt reprehenderit voluptate dolore adipisicing.
          Proident eiusmod reprehenderit quis sint exercitation voluptate non
          labore. Sunt non sint in Lorem occaecat dolore tempor ipsum et
          proident sit Lorem ipsum officia.
        </Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(20),
    flex: 1,
    backgroundColor: COLORS.white,
  },
  poster: {
    padding: ResponsiveSize(120),
    backgroundColor: COLORS.lWhite,
    marginBottom: ResponsiveSize(30),
    borderRadius: 8,
  },
  postTitle: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
  postAuthor: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.interSemi,
  },
  postData: {
    marginTop: ResponsiveSize(10),
    color: COLORS.dGrey,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
  },
});

export default PostPage;
