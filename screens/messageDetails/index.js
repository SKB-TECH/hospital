import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styleDetail from './style';

const MessageDetails = ({route, navigation}) => {
  const {item} = route.params;

  useEffect(() => {
    navigation.setOptions({title: item.fullname});
  });
  return (
    <View>
      <Text>{item.fullname}</Text>
    </View>
  );
};

export default MessageDetails;
