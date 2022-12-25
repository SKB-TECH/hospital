import {View, Text} from 'react-native';
import React from 'react';
import styleConversation from './style.js';

const Message = ({item}) => {
  const isMine = () => {
    return item.user.id === 1;
  };
  return (
    <View
      style={
        (styleConversation.container,
        {
          backgroundColor: isMine() ? '#DCF8C5' : 'white',
          alignSelf: isMine() ? 'flex-end' : 'flex-start',
        })
      }>
      <Text>{item.message}</Text>
    </View>
  );
};

export default Message;
