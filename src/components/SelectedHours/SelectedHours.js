import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {format} from 'date-fns';
import styles from './SelectedHours.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SelectedHours = ({onPress, date = new Date()}) => {
  const fHours = format(date, 'HH');
  const fMinute = format(date, 'mm');
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.inner_container}>
        <Icon style={styles.icon} name={'arrow-up-drop-circle-outline'} size={20} color={'gray'} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{fHours}</Text>
          <Text style={styles.sparator}>:</Text>
          <Text style={styles.title}>{fMinute}</Text>
        </View>
        <Icon style={styles.icon} name={'arrow-down-drop-circle-outline'} size={20} color={'gray'} />
      </View>
    </TouchableOpacity>
  );
};

export default SelectedHours;
