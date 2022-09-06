import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Input.style';

const Input = ({
  value,
  onChangeText,
  placeholder,
  name,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <Icon name={name} size={30} />
      <View style={styles.inner_container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default Input;
