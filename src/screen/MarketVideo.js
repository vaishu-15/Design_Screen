import {React, useState,useRef} from 'react';
import {View, Text, StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS, IMAGES} from '../utils/constants';
import Deals from '../common/Deals';
import Video from 'react-native-video';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const MarketVideo = (props) => {
  const [paused, setPaused] = useState(true); 
  const playerRef = useRef(null);

  const togglePause = () => {
    setPaused(prevPaused => !prevPaused);
  };

  return (
    <View style={styles.container}>
       <View style={styles.head}>
          <TouchableOpacity onPress = {() => props.navigation.navigate('MainStack')}>
          <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.header}>Market</Text>
          <Text></Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.firstContainer}>
        <Video
          source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
          ref={ref => {
            this.player = ref;
          }}
          onBuffer={this.onBuffer}
          onError={err => alert(JSON.stringify(err))}
          style={styles.backgroundVideo}
          paused={paused}
          resizeMode="cover" 
          fullscreen={true}
        />  
         <TouchableOpacity style={styles.pauseButton} onPress={togglePause}>
        <Image source={IMAGES.play} style={styles.playBtn}></Image>
        </TouchableOpacity>   
      </View>
      <View style={styles.secContainer}>
      <Deals dealOne={'Hot deals'} navigation={props.navigation}/>
      <Deals dealOne={'Trending'} navigation={props.navigation}/>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  firstContainer: {
    paddingHorizontal: ResponsiveSize(10),
    backgroundColor: COLORS.green,
  },
  messageTextCon: {
    padding: ResponsiveSize(10),
    flex: 1,
  },
  messageText: {
    color: COLORS.black,
  },
  backgroundVideo: {
    height:ResponsiveSize(260), 
    backgroundColor:COLORS.white,
    borderRadius:ResponsiveSize(12),
    marginHorizontal:ResponsiveSize(10),
    marginVertical:ResponsiveSize(20),
  },
  head: {
    backgroundColor: COLORS.green,
    paddingHorizontal: ResponsiveSize(20),
    paddingVertical:ResponsiveSize(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  back: {
    fontSize: ResponsiveSize(16),
    fontFamily: FONTS.interMedium,
    fontWeight: '500',
    color: COLORS.white,
  },
  header: {
    fontSize: ResponsiveSize(30),
    fontWeight: '600',
    color: COLORS.white,
    fontFamily: FONTS.interSemi,
    textAlign: 'center',
    paddingRight:ResponsiveSize(40)
  },
  pauseButton:{
    alignSelf:'center',
    paddingTop:ResponsiveSize(100),
    position: 'absolute',
    top:'5%'
  },
  playBtn:{
    width:ResponsiveSize(74),
    height:ResponsiveSize(74)
  },
  secContainer:{
    padding: ResponsiveSize(10),
  }
});

export default MarketVideo;
