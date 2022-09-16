import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './RaporCard.style';

const RaporCard = ({meal}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: meal.imageUrl}} />
        <View style={styles.body_container}>
          <Text style={styles.name}>{meal.name}</Text>
          <Text style={styles.kalori}>Kalori: {meal.calorie}</Text>
        </View>
        <View>
        <Text style={styles.total}>{meal.quantity * meal.calorie}</Text>
        <Text style={styles.total}>calorie</Text>
        </View>
      </View>
    </View>
  );
};

export default RaporCard;
