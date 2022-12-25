import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styleInput from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageInput = () => {
  return (
    <View style={styleInput.container}>
      <TextInput style={styleInput.input} placeholder="Message ici.." />
      <TouchableOpacity>
        <MaterialCommunityIcons name="send" style={styleInput.send} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;
