import {React, useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Header from '../common/header';
import {Send, GiftedChat, InputToolbar, Bubble} from 'react-native-gifted-chat';
import ResponsiveSize from '../utils/responsivesSize';
import {COLORS, IMAGES} from '../utils/constants';

const Messages = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. ',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.green,
            color: COLORS.white,
          },
          left: {
            backgroundColor: COLORS.lGrey,
            color: COLORS.darkGrey,
          },
        }}
      />
    );
  };

  const handleChatBubblePress = (messages) => {
    props.navigation.navigate('Compose', { messages });
  };

  renderInputToolbar = props => {
    return (
    <InputToolbar {...props} 
    containerStyle={styles.inputToolbar} >
    </InputToolbar>
    );
  };

  renderSend = props => {
    return (
      <Send {...props}>
        <Image source={IMAGES.send} style={styles.send}/>
      </Send>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        textThree={'Back'}
        textOne={'Messages'}
        textTwo={'Filter'}
        show
      />
      <GiftedChat
        renderAvatar={() => null}
        placeholder="Message here..."
        renderTime={()=>null}
        renderSend={this.renderSend}
        renderInputToolbar={this.renderInputToolbar}
        renderBubble={this.renderBubble}
        alwaysShowSend
        messages={messages}
        onPress={(context, messages) => handleChatBubblePress(messages)}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ResponsiveSize(10),
    flex: 1,
    backgroundColor: COLORS.white,
  },
  inputToolbar: {
    marginLeft: ResponsiveSize(10),
    marginRight: ResponsiveSize(10),
    marginBottom: ResponsiveSize(5),
    borderColor: COLORS.lGrey,
    borderRadius: ResponsiveSize(25),
    backgroundColor: COLORS.lWhite,
  },
  send: {
    width: ResponsiveSize(60),
    height: ResponsiveSize(60),
    margin:ResponsiveSize(-10)
  },
});

export default Messages;
