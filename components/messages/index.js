import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styleChat from './style.js';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const MessageList = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styleChat.messageContainer}
      onPress={() => navigation.navigate('MessageDetails', {item})}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        }}
        style={styleChat.messageImg}
      />
      <View style={styleChat.messageInfo}>
        <View style={styleChat.data_name}>
          <Text style={styleChat.name}>{item.fullname}</Text>
          <Text>{dayjs(item.date).fromNow()}</Text>
        </View>
        <Text>{item.last_message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageList;
