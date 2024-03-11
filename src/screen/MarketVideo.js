import {React, useState,useRef} from 'react';
import {View, Text, StyleSheet,Dimensions} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS, IMAGES} from '../utils/constants';
import Deals from '../common/Deals';
import Video from 'react-native-video';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const MarketVideo = (props) => {
  const [paused, setPaused] = useState(true); 
  const playerRef = useRef(null);

  const togglePause = () => {
    setPaused(prevPaused => !prevPaused);
  };


  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.head}>
          <TouchableOpacity onPress = {() => props.navigation.navigate('MainStack')}>
          <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.header}>Market</Text>
        </View>
        <Video
          source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
          ref={ref => {
            this.player = ref;
          }}
          onBuffer={this.onBuffer}
          onError={err => alert(JSON.stringify(err))}
          style={styles.backgroundVideo}
          paused={paused}
        />
        <TouchableOpacity style={styles.pauseButton} onPress={togglePause}>
        
      </TouchableOpacity>     
      </View>
      <View style={styles.secContainer}>
      <Deals dealOne={'Hot deals'} />
      <Deals dealOne={'Trending'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  firstContainer: {
    padding: ResponsiveSize(10),
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
    height:ResponsiveSize(200),
    backgroundColor:COLORS.white,
    borderRadius:ResponsiveSize(12)
  },
 
  head: {
    padding: ResponsiveSize(10),
    flexDirection: 'row',
    justifyContent: "",
    alignItems: 'center',
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
    paddingLeft:ResponsiveSize(100)
  },
  secContainer:{
    padding: ResponsiveSize(10),
  }
});

export default MarketVideo;
