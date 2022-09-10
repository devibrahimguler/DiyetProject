import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {format} from 'date-fns';
import styles from './SelectedPicter.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SelectedPicter = ({onPress, date = new Date()}) => {
  const fDay = format(date, 'dd');
  const fMonth = format(date, 'MM');
  const fYear = format(date, 'yyyy');
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.inner_container}>
        <Icon style={styles.icon} name={'arrow-up-drop-circle-outline'} size={20} color={'gray'} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{fDay}</Text>
          <Text style={styles.sparator}>:</Text>
          <Text style={styles.title}>{fMonth}</Text>
          <Text style={styles.sparator}>:</Text>
          <Text style={styles.title}>{fYear}</Text>
        </View>
        <Icon style={styles.icon} name={'arrow-down-drop-circle-outline'} size={20} color={'gray'} />
      </View>
    </TouchableOpacity>
  );
};

export default SelectedPicter;
