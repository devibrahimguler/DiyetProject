import React, {useState} from 'react';
import {Text, Image, View, Alert} from 'react-native';
import Counter from '../../Counter';
import styles from './MealsCard.style';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import useFetch from '../../../hooks/useFetch';
import IconButton from '../../IconButton';

const MealsCard = ({meal, docId, isProgram, curQuantity, currentDate}) => {
  const {data} = useFetch(currentDate, docId);
  const {data: foodData} = useFetch(null, null, 'food');
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
    if (counter > 0) {
      const object = {
        id: meal.id,
        name: meal.name,
        calorie: meal.calorie,
        imageUrl: meal.imageUrl,
        quantity: counter,
        isFood: false,
      };
      let newCount = counter;
      data.forEach(val => {
        if (val.id == object.id) {
          object.quantity += val.data().quantity;
        }
      });
      foodData.forEach(val => {
        if (val.id == object.id) {
          object.isFood = true;
          newCount += val.data().quantity;
        }
      });

      if (object.quantity != counter) {
        firestore()
          .collection('user')
          .doc(auth().currentUser.uid)
          .collection('date')
          .doc(currentDate)
          .collection('repasts')
          .doc(docId)
          .collection('program')
          .doc(object.id)
          .update(object);

        Alert.alert(
          'Güncellendi !',
          'İşlem Başarılı bir şekilde gerçekleşti...',
        );
      } else {
        firestore()
          .collection('user')
          .doc(auth().currentUser.uid)
          .collection('date')
          .doc(currentDate)
          .collection('repasts')
          .doc(docId)
          .collection('program')
          .doc(object.id)
          .set(object);

        Alert.alert('Eklendi !', 'İşlem Başarılı bir şekilde gerçekleşti...');
      }
      
      if (!object.isFood) {
        object.total = object.quantity * object.calorie;
        firestore()
          .collection('user')
          .doc(auth().currentUser.uid)
          .collection('food')
          .doc(object.id)
          .set(object);
      } else {
        object.quantity = newCount;
        object.total = newCount * object.calorie;
        firestore()
          .collection('user')
          .doc(auth().currentUser.uid)
          .collection('food')
          .doc(object.id)
          .update(object);
      }
      setCounter(0);
    }
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
