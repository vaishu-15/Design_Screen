import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Modal} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchCamera} from 'react-native-image-picker';
import {COLORS, FONTS, IMAGES} from '../utils/constants';
import ResponsiveSize from '../utils/responsivesSize';
import {AirbnbRating} from 'react-native-ratings';
import Posts from './Posts';
import Photos from './Photos';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPosts, setShowPosts] = useState(true);

  const toggleSwitch = value => {
    setShowPosts(value === 'Posts');
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 158,
      maxWidth: 158,
    };

    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.head}>
          <TouchableOpacity
            onpress={() => {
              setModalVisible(true);
            }}>
            <Text style={styles.setting}>Settings</Text>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <AirbnbRating
                  type="star"
                  ratingCount={5}
                  size={25}
                  onFinishRating={this.ratingCompleted}
                  selectedColor="COLORS.yellow"
                  starContainerStyle={{
                    width: ResponsiveSize(180),
                    justifyContent: 'space-between',
                  }}
                  reviews={false}
                  ratingContainerStyle={{height: 10, marginBottom: 35}}
                />

                <Text style={styles.modalheading}>Rate our app</Text>
                <Text style={styles.modalcontent}>
                  Consequat velit qui adipisicing sunt do reprehenderit ad
                  laborum tempor ullamco exercitation. Ullamco tempor
                  adipisicing et voluptate duis sit esse aliqua esse ex dolore
                  esse. Consequat velit qui adipisicing sunt.
                </Text>
                <TouchableOpacity
                  style={styles.modalbutton}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.btntext}>I love it!</Text>
                </TouchableOpacity>
                <Text style={styles.modalaction}>
                  Don’t like the app? Let us know.
                </Text>
              </View>
            </View>
          </Modal>
          <Text style={styles.profile}>Profile</Text>
          <Text style={styles.logOut}>Logout</Text>
        </View>
        <View style={styles.image}>
          <TouchableOpacity onPress={handleCameraLaunch}>
            {selectedImage ? (
              <Image
                source={{uri: selectedImage}}
                style={styles.pImg}
                resizeMode="contain"
                onError={error => console.error('Image loading error:', error)}
              />
            ) : (
              <Image source={IMAGES.profilePic} style={styles.pImg} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Victoria Robertson</Text>
          <Text style={styles.bio}>A mantra goes here</Text>
        </View>
        <View style={styles.toggle}>
          <TouchableOpacity
            onPress={() => toggleSwitch('Posts')}
            style={[
              styles.toggleOption,
              showPosts ? styles.activeOption : null,
            ]}>
            <Text
              style={[styles.optionText, showPosts ? styles.activeText : null]}>
              Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleSwitch('Photos')}
            style={[
              styles.toggleOption,
              !showPosts ? styles.activeOption : null,
            ]}>
            <Text
              style={[
                styles.optionText,
                !showPosts ? styles.activeText : null,
              ]}>
              Photos
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {showPosts && <Posts />}
          {!showPosts && <Photos />}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: COLORS.white,
  },
  firstContainer: {
    padding: ResponsiveSize(10),
    backgroundColor: COLORS.green,
    height: ResponsiveSize(200),
  },
  head: {
    padding: ResponsiveSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    padding: ResponsiveSize(10),
  },
  profile: {
    fontSize: ResponsiveSize(30),
    fontWeight: '600',
    color: COLORS.white,
    fontFamily: FONTS.interSemi,
  },
  setting: {
    fontSize: 16,
    fontFamily: FONTS.interMedium,
    fontWeight: '500',
    color: COLORS.white,
  },
  logOut: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
  },
  pImg: {
    width: ResponsiveSize(158),
    height: ResponsiveSize(158),
    borderWidth: 4,
    borderColor: COLORS.white,
    marginTop: ResponsiveSize(5),
    borderRadius: ResponsiveSize(158 / 2),
  },
  secondContainer: {
    flexDirection: 'column',
  },
  profileDetails: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60,
  },
  profileName: {
    color: COLORS.black,
    fontFamily: FONTS.interSemi,
    fontSize: 30,
    fontWeight: '600',
  },
  bio: {
    color: COLORS.black,
    fontFamily: FONTS.interSemi,
    fontSize: 16,
    fontWeight: '600',
  },

  toggle: {
    flexDirection: 'row',
    width: ResponsiveSize(346),
    height: ResponsiveSize(51),
    margin: ResponsiveSize(20),
    backgroundColor: COLORS.lGrey,
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
  },
  toggleOption: {
    width: ResponsiveSize(171),
    height: ResponsiveSize(46),
    borderRadius: 100,
    justifyContent: 'center',
  },
  activeOption: {
    backgroundColor: COLORS.white,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.interSemi,
    textAlign: 'center',
  },
  activeText: {
    color: COLORS.green,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
  },
  modalView: {
    margin: ResponsiveSize(20),
    padding: ResponsiveSize(30),
    backgroundColor: COLORS.white,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: COLORS.blue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 10,
  },
  modalheading: {
    color: COLORS.black,
    fontSize: 30,
    fontWeight: '700',
    fontFamily: FONTS.interSemi,
  },
  modalcontent: {
    color: COLORS.dGrey,
    marginTop: ResponsiveSize(20),
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.interMedium,
    textAlign: 'center',
  },
  modalbutton: {
    marginTop: ResponsiveSize(40),
    marginBottom: ResponsiveSize(20),
    backgroundColor: COLORS.green,
    width: ResponsiveSize(311),
    height: ResponsiveSize(51),
    borderRadius: 100,
    justifyContent: 'center',
  },
  btntext: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.interSemi,
    alignSelf: 'center',
  },
  modalaction: {
    color: COLORS.green,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.interSemi,
  },
});

export default Profile;
