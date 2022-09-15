import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './InfoCard.style';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const InfoCard = ({title, dataRow, data}) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [value, setValue] = React.useState(data[dataRow]);
  console.log(data[dataRow]);
  const handleEditToggle = () => {
    if (isEdit) {
      if(value) {
        var object = {
          [dataRow]: value,
        };
        firestore().collection('user').doc(auth().currentUser.uid).update(object);
      }
    }
    setIsEdit(!isEdit);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.body_container}>
        <Text style={styles.title}>{title} :</Text>
          {isEdit ? (
            <TextInput
              style={styles.title}
              value={value}
              onChangeText={setValue}
            />
          ) : (
            <Text style={styles.title}>{value}</Text>
          )}
          <Text style={styles.title}>
            {dataRow == 'weight' ? 'kg' : dataRow == 'size' ? 'cm' : ''}
          </Text>
        </View>
        <TouchableOpacity onPress={handleEditToggle}>
          <Icon name={isEdit ? 'check' : 'pencil-outline'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoCard;
