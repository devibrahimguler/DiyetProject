import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './IconButton.style';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const IconButton = ({name, thema="plus", onPress}) => {
  return (
    <TouchableOpacity style={styles[thema].container} onPress={onPress}>
      <Icon name={name} size={20} />
    </TouchableOpacity>
  );
};

export default IconButton;
