import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styles from './ProgramEdit.style';

import MealsCard from '../../components/card/MealsCard';

import food from "../../Datas/Food.json";

const ProgramEdit = ({route}) => {
  const {selected,currentDate} = route.params;
  const renderMeal = ({item}) => <MealsCard meal={item} docId={selected} isProgram={true} currentDate={currentDate} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.list} data={food} renderItem={renderMeal} />
    </SafeAreaView>
  );
};

export default ProgramEdit;
