import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {COLORS, FONTS, IMAGES} from '../utils/constants';
import ResponsiveSize from '../utils/responsivesSize';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
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
    <View>
      <View style={styles.halfCon}>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.setting}>Settings</Text>
          </TouchableOpacity>
          <Text style={styles.profile}>Profile</Text>
          <Text style={styles.logOut}>Logout</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center',}}>
          {selectedImage ? (
            <Image
              source={{uri: IMAGES.profilePic}}
              style={{flex: 1,width:200,height:200}}
              resizeMode="contain"
              onError={error => console.error('Image loading error:', error)}
            />
          ) : (
            <Text>No image selected</Text>
          )}
          <View style={styles.buttons}>
          <View style={{marginTop: 20}}>
            <Button title="Device" onPress={openImagePicker} />
          </View>
          <View style={{marginTop: 20}}>
            <Button title="Camera" onPress={handleCameraLaunch} />
          </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  halfCon: {
    padding: ResponsiveSize(10),
    backgroundColor: COLORS.green,
    height: ResponsiveSize(245),
  },
  container: {
    padding: ResponsiveSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  buttons:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});

export default Profile;
