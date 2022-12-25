import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import './style.js';
import styles from './style.js';
import SVG_HOPITAL from './../../assets/svg/hopital1.svg';

const ActivityItems = ({item}) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      <SVG_HOPITAL width={60} height={60} />
      <Text style={styles.mainText}>{item.mainText}</Text>
      <Text style={styles.subText}>{item.subText}</Text>
    </TouchableOpacity>
  );
};

export default ActivityItems;
