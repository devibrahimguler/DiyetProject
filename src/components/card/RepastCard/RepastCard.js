import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './RepastCard.style';

const RepastCard = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RepastCard;
