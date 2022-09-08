import React, {useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from './ProgramEdit.style';

import MealsCard from '../../components/card/MealsCard';
import useFetch from '../../hooks/useFetch';

import Button from '../../components/Button';
import food from "../../Datas/Food.json";

const ProgramEdit = ({route}) => {
  const {docId} = route.params;
  const renderMeal = ({item}) => <MealsCard meal={item} docId={docId} isProgram={true} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.list} data={food} renderItem={renderMeal} />
    </SafeAreaView>
  );
};

export default ProgramEdit;
