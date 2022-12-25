import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styleSettingsItem from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../outils/constants';

const SettingsItem = ({item}) => {
  return (
    <TouchableOpacity style={styleSettingsItem.container}>
      <Text>{item.libelle}</Text>
      <AntDesign name="arrowright" size={30} style={{color: COLORS.main}} />
    </TouchableOpacity>
  );
};

export default SettingsItem;
