import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './InfoCard.style';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import useFetch from '../../../hooks/useFetch';

const InfoCard = ({title, dataRow}) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [value, setValue] = React.useState(title);
  const {data, error, loading} = useFetch();

  const handleEditToggle = () => {
    if (isEdit) {
      var object = {
        [dataRow]: value,
      };
      firestore().collection('user').doc(auth().currentUser.uid).update(object);
    } else {
      setValue(title);
    }
    setIsEdit(!isEdit);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        {isEdit ? (
          <TextInput
            style={styles.title}
            value={value}
            onChangeText={setValue}
          />
        ) : (
          <>
            <View style={styles.body_container}>
              <Text style={styles.title}>{data[dataRow]}</Text>
              <Text style={styles.title}>
                {dataRow == 'weight' ? 'kg' : dataRow == 'size' ? 'cm' : ''}
              </Text>
            </View>
          </>
        )}
        <TouchableOpacity onPress={handleEditToggle}>
          <Icon name={isEdit ? 'check' : 'pencil-outline'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoCard;
