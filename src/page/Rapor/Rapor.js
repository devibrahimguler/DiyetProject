import React, {useState} from 'react';
import {SafeAreaView, Text, Button, FlatList} from 'react-native';
import styles from './Rapor.style';

import useFetch from '../../hooks/useFetch';
import RaporCard from "../../components/card/RaporCard";

const Rapor = () => {
  const {data, error, loading} = useFetch(null, null, 'food');
  const renderRapor = ({item}) => <RaporCard meal={item.data()} />;
  if(loading) {return <Text>loading</Text>}
    if(error) {return <Text>error</Text>}
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderRapor}
      />
    </SafeAreaView>
  );
};

export default Rapor;
