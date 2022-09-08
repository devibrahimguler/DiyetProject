import React, {useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from './Repast.style';

import RepastCard from '../../components/card/RepastCard';
import useFetch from '../../hooks/useFetch';

import InputModal from '../../components/InputModal';
import Button from '../../components/Button';

const Repast = ({navigation}) => {
  const {data, error, loading} = useFetch('repasts');
  const [isVisible, setIsVisible] = useState(false);
  const [repast, setRepast] = useState('');

  const handleToglleVisiblity = () => {
    setIsVisible(!isVisible);
  };
  const handleAddDatabase = () => {
    if (repast != '') {
      const object = {
        name: repast,
      };
      firestore().collection('repasts').add(object);
      handleToglleVisiblity();
    }
  };
  const toProgram = (repastTitle, selected) => {
    navigation.navigate('ProgramPage', {repastTitle, selected});
  };
  const renderRepast = ({item}) => (
    <RepastCard
      item={item.data()}
      onPress={() =>
        toProgram(item.data().name, item.ref._documentPath._parts[1])
      }
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderRepast} />
      <Button
        name={'Öğün Ekle'}
        thema={'tertiary'}
        onPress={handleToglleVisiblity}
      />
      <InputModal
        isVisible={isVisible}
        onClose={handleToglleVisiblity}
        onPress={handleAddDatabase}
        value={repast}
        onChangeText={setRepast}
        placeholder={'Öğün Adını Giriniz...'}
      />
    </SafeAreaView>
  );
};

export default Repast;
