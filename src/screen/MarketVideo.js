import {React, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, FONTS} from '../utils/constants';
import Deals from '../common/Deals';
import Video from 'react-native-video';

const MarketVideo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.head}>
          <Text style={styles.back}>Back</Text>
          <Text style={styles.header}>Market</Text>
          <Text></Text>
        </View>
        <Video
          source={{uri: 'https://youtu.be/64Baf8B6sYg'}}
          ref={ref => {
            this.player = ref;
          }}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={styles.backgroundVideo}
        />
      </View>
      <Deals dealOne={'Hot deals'} />
      <Deals dealOne={'Trending'} />
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
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  head: {
    padding: ResponsiveSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    fontSize: 16,
    fontFamily: FONTS.interMedium,
    fontWeight: '500',
    color: COLORS.white,
  },
  header: {
    fontSize: ResponsiveSize(30),
    fontWeight: '600',
    color: COLORS.white,
    fontFamily: FONTS.interSemi,
   textAlign:'center'
  },
});

export default MarketVideo;
