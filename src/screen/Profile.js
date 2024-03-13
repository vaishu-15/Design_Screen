import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {COLORS, FONTS, IMAGES} from '../utils/constants';
import ResponsiveSize from '../utils/responsivesSize';
import {AirbnbRating} from 'react-native-ratings';
import Posts from './Posts';
import Photos from './Photos';
import LogoutConfirmationModal from '../common/Logout';

const Profile = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPosts, setShowPosts] = useState(true);

  const handleLogout = () => {
    setIsModalVisible(true);
    // props.navigation.navigate('Login');
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleConfirmLogout = () => {
    props.navigation.navigate('Login');
    setIsModalVisible(false);
  };

  const handleUserOptions = () => {
    setModalVisible(false);
    props.navigation.navigate('UserOptions');
  };

  const toggleSwitch = value => {
    setShowPosts(value === 'Posts');
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
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
          <TouchableOpacity onPress={() => setModalVisible(true)}>
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
                    selectedColor="#FFB84E"
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
                    onPress={handleUserOptions}>
                    <Text style={styles.btntext}>I love it!</Text>
                  </TouchableOpacity>
                  <Text style={styles.modalaction}>
                    Don’t like the app? Let us know.
                  </Text>
                </View>
              </View>
            </Modal>
            <Text style={styles.setting}>Settings</Text>
          </TouchableOpacity>

          <Text style={styles.profile}>Profile</Text>
          <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logOut}>Logout</Text>
      </TouchableOpacity>
      <LogoutConfirmationModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onLogout={handleConfirmLogout}
      />
        </View>
        </View>
        <View style={styles.image}>
          <TouchableOpacity onPress={handleCameraLaunch}>
            {selectedImage ? (
              <Image
                source={{uri: selectedImage}}
                style={styles.pImg}
                resizeMode="cover"
                onError={error => console.error('Image loading error:', error)}
              />
            ) : (
              <Image source={IMAGES.profilePic} style={styles.pImg} />
            )}
          </TouchableOpacity>
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
        <View style={{flex:1}}>
          {showPosts && <Posts navigation={props.navigation} />}
          {!showPosts && <Photos navigation={props.navigation} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    overflow:'scroll'
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
    alignSelf: 'center',
    padding: ResponsiveSize(10),
    position:'absolute',
    paddingTop:ResponsiveSize(90)
  },
  profile: {
    fontSize: ResponsiveSize(30),
    fontWeight: '600',
    color: COLORS.white,
    fontFamily: FONTS.interSemi,
  },
  setting: {
    fontSize: ResponsiveSize(16),
    fontFamily: FONTS.interMedium,
    fontWeight: '500',
    color: COLORS.white,
  },
  logOut: {
    fontSize: ResponsiveSize(16),
    fontWeight: '500',
    color: COLORS.white,
  },
  pImg: {
    width: ResponsiveSize(158),
    height: ResponsiveSize(158),
    borderWidth: ResponsiveSize(4),
    borderColor: COLORS.white,
    marginTop: ResponsiveSize(5),
    borderRadius: ResponsiveSize(158 / 2),
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  profileDetails: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: ResponsiveSize(60),
  },
  profileName: {
    color: COLORS.black,
    fontFamily: FONTS.interSemi,
    fontSize:ResponsiveSize(30),
    fontWeight: '600',
  },
  bio: {
    color: COLORS.black,
    fontFamily: FONTS.interSemi,
    fontSize: ResponsiveSize(16),
    fontWeight: '600',
  },
  toggle: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width: ResponsiveSize(345),
    height: ResponsiveSize(51),
    margin: ResponsiveSize(20),
    backgroundColor: COLORS.lGrey,
    borderRadius: ResponsiveSize(100),
    alignSelf: 'center',
    alignItems: 'center',
    padding:ResponsiveSize(4)
  },
  toggleOption: {
    
    width:ResponsiveSize(169),
    height: ResponsiveSize(45),
    borderRadius: ResponsiveSize(100),
    justifyContent: 'center',
    alignContent:'center'
  },
  activeOption: {
    
    backgroundColor: COLORS.white,
  },
  optionText: {
   
    fontSize: ResponsiveSize(16),
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
    padding: ResponsiveSize(20),
    backgroundColor: COLORS.white,
    borderRadius: ResponsiveSize(8),
    alignItems: 'center',
    shadowColor: COLORS.blue,
    shadowOffset: {
      width: 0,
      height: ResponsiveSize(2),
    },
    shadowOpacity: 0.25,
    elevation: 10,
  },
  modalheading: {
    color: COLORS.black,
    fontSize: ResponsiveSize(30),
    fontWeight: '700',
    fontFamily: FONTS.interSemi,
  },
  modalcontent: {
    color: COLORS.dGrey,
    marginTop: ResponsiveSize(20),
    fontSize: ResponsiveSize(16),
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
    borderRadius: ResponsiveSize(100),
    justifyContent: 'center',
  },
  btntext: {
    color: COLORS.white,
    fontSize: ResponsiveSize(16),
    fontWeight: '600',
    fontFamily: FONTS.interSemi,
    alignSelf: 'center',
  },
  modalaction: {
    color: COLORS.green,
    fontSize: ResponsiveSize(16),
    fontWeight: '600',
    fontFamily: FONTS.interSemi,
  },
});

export default Profile;
