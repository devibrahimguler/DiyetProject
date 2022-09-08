import React, {useState} from 'react';
import {Text, Image, View, Alert} from 'react-native';
import Counter from '../../Counter';
import styles from './MealsCard.style';
import firestore from '@react-native-firebase/firestore';

import useFetch from '../../../hooks/useFetch';
import IconButton from '../../IconButton';

const MealsCard = ({meal, docId, isProgram, curQuantity}) => {
  const {data, error, loading} = useFetch('repasts', docId, 'program');
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleRemove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleAddlist = () => {
    const object = {
      id: meal.id,
      name: meal.name,
      calorie: meal.calorie,
      imageUrl: meal.imageUrl,
      quantity: counter,
    };
    let ref = '';

    data.forEach(val => {
      if (val.data().id == object.id) {
        object.quantity += val.data().quantity;
        ref = val.ref._documentPath._parts[3];
      }
    });

    if (object.quantity != counter) {
      if (counter > 0) {
        firestore()
          .collection('repasts')
          .doc(docId)
          .collection('program')
          .doc(ref)
          .update(object);
      }
      Alert.alert('Güncellendi !', 'İşlem Başarılı bir şekilde gerçekleşti...');
    } else {
      if (counter > 0) {
        firestore()
          .collection('repasts')
          .doc(docId)
          .collection('program')
          .add(object);
      }
      Alert.alert('Eklendi !', 'İşlem Başarılı bir şekilde gerçekleşti...');
    }
    setCounter(0);
  };
  return (
    <View style={styles.container}>
      {isProgram && (
        <Counter counter={counter} onAdd={handleAdd} onRemove={handleRemove} />
      )}
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: meal.imageUrl}} />
        <View style={styles.body_container}>
          <Text style={styles.name}>{meal.name}</Text>
          <Text style={styles.kalori}>Kalori: {meal.calorie}</Text>
        </View>

        {isProgram ? (
          <IconButton
            name={'playlist-plus'}
            thema={'adding'}
            onPress={handleAddlist}
          />
        ) : (
          <Text style={styles.title}>{curQuantity} Adet</Text>
        )}
      </View>
    </View>
  );
};

export default MealsCard;
