import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './RepastCard.style';

const RepastCard = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default RepastCard;
