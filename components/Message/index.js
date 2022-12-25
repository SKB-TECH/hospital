import {View, Text} from 'react-native';
import React from 'react';
import styleConversation from './style.js';
import {COLORS} from '../../outils/constants.js';

const Message = ({item}) => {
  const isMine = () => {
    return item.user.id === 1;
  };
  return (
    <View
      style={[
        styleConversation.container,
        {
          backgroundColor: isMine() ? COLORS.main : 'white',
          alignSelf: isMine() ? 'flex-end' : 'flex-start',
        },
      ]}>
      <Text style={{color: isMine() ? 'white' : 'black'}}>{item.message}</Text>
    </View>
  );
};

export default Message;
