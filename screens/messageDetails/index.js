import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styleDetail from './style';
import {fakeConversation} from '../../fakesData/fakeConversations';
import Message from '../../components/Message';
import MessageInput from '../../components/messageInput/index';
const MessageDetails = ({route, navigation}) => {
  const {item} = route.params;

  useEffect(() => {
    navigation.setOptions({title: item.fullname});
  });
  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          data={fakeConversation}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <Message item={item} />;
          }}
        />
        <MessageInput />
      </View>
    </>
  );
};

export default MessageDetails;
