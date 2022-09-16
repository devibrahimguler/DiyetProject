import React, {useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import styles from './Program.style';

import MealsCard from '../../components/card/MealsCard';
import useFetch from '../../hooks/useFetch';

import Button from '../../components/Button';

const Program = ({navigation,route}) => {
  const {repastTitle, selected, currentDate} = route.params;
  const {data, error, loading} = useFetch(currentDate,selected);
  const toProgramEdit = () => {
    navigation.navigate("ProgramEditPage", {selected, currentDate});
  }
  const renderRepast = ({item}) => <MealsCard meal={item.data()} docId={selected} curQuantity={item.data().quantity} currentDate={currentDate} />;
  if(loading) {return <Text>loading</Text>}
  if(error) {return <Text>error</Text>}
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
