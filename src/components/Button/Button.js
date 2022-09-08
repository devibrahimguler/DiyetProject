import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

const Button = ({name, thema = 'primary', onPress}) => {
  return (
    <TouchableOpacity style={styles[thema].container} onPress={onPress}>
      <Text style={styles[thema].title}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
