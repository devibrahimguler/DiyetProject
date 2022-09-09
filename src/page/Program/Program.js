import React, {useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import styles from './Program.style';

import MealsCard from '../../components/card/MealsCard';
import useFetch from '../../hooks/useFetch';

import Button from '../../components/Button';

const Program = ({navigation,route}) => {
  const docId = route.params.selected;
  const {repastTitle} = route.params;
  const {data, error, loading} = useFetch('repasts', docId, 'program');

  const toProgramEdit = () => {
    navigation.navigate("ProgramEditPage", {docId});
  }
  const renderRepast = ({item}) => <MealsCard meal={item.data()} docId={docId} curQuantity={item.data().quantity} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{repastTitle}</Text>
      </View>
      <Button name={'Öğün Düzenle'} thema={'tertiary'} onPress={toProgramEdit} />
      <FlatList style={styles.list} data={data} renderItem={renderRepast} />
    </SafeAreaView>
  );
};

export default Program;
