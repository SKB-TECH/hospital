import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';

const SymptomeItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View>
        <Image
          style={styles.itemImg}
          source={require('../../assets/imgs/img1.png')}
        />
        <Text>{item.libelle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SymptomeItem;
