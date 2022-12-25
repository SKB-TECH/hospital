import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {fakeChats} from '../Home/fakeChats';
import MessageList from '../../components/messages';
import styles from './style';

const Message = ({navigation}) => {
  return (
    <FlatList
      data={fakeChats}
      keyExtractor={item => item.id}
      style={styles.root}
      renderItem={({item}) => {
        return <MessageList item={item} navigation={navigation} />;
      }}
    />
  );
};

export default Message;
