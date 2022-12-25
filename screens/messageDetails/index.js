import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styleDetail from './style';
import {fakeConversation} from '../../fakesData/fakeConversations';
import Message from '../../components/Message';
const MessageDetails = ({route, navigation}) => {
  const {item} = route.params;

  useEffect(() => {
    navigation.setOptions({title: item.fullname});
  });
  return (
    <View>
      <FlatList
        data={fakeConversation}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Message item={item} />;
        }}
      />
    </View>
  );
};

export default MessageDetails;
