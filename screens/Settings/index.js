import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import styleSetting from './style';
import {fakeSettings} from '../../fakesData/fakeSettings';
import SettingsItem from '../../components/settingsItem';

const Setting = () => {
  return (
    <View style={styleSetting.container}>
      <View style={styleSetting.header}>
        <Image
          source={require('../../assets/profile.jpg')}
          style={styleSetting.image}
        />
        <View style={styleSetting.userInfo}>
          <Text style={styleSetting.userName}>Esther Doe</Text>
          <Text style={styleSetting.userMail}>esthedoe@gmail.com</Text>
          <Text>+243 813678926</Text>
        </View>
      </View>
      <FlatList
        data={fakeSettings}
        renderItem={({item}) => {
          return <SettingsItem item={item} />;
        }}
      />
    </View>
  );
};

export default Setting;
