import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {COLORS, FONTS, IMAGES} from '../utils/constants';
import ResponsiveSize from '../utils/responsivesSize';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
          <TouchableOpacity>
            <Text style={styles.setting}>Settings</Text>
          </TouchableOpacity>
          <Text style={styles.profile}>Profile</Text>
          <Text style={styles.logOut}>Logout</Text>
        </View>
        <View style={styles.image}>
          {selectedImage ? (
            <TouchableOpacity onPress={handleCameraLaunch}>
            <Image
              source={{uri: selectedImage}}
              style={styles.pImg}
              resizeMode="contain"
              onError={error => console.error('Image loading error:', error)}
            />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleCameraLaunch}>
              <Image source={IMAGES.profilePic} style={styles.pImg} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Victoria Robertson</Text>
          <Text style={styles.bio}>A mantra goes here</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  firstContainer: {
    padding: ResponsiveSize(10),
    backgroundColor: COLORS.green,
    height: ResponsiveSize(245),
  },
  head: {
    padding: ResponsiveSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    alignSelf:'center',
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
    marginTop: ResponsiveSize(50),
  },
  secondContainer: {},
  profileDetails: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:60
  },
  profileName: {
    color: COLORS.black,
    fontFamily: FONTS.interSemi,
    fontSize: 30,
    fontWeight: '600',
  },
  bio: {
    color: COLORS.black,
  },
});

export default Profile;
