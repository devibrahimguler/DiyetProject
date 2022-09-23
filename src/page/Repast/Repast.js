import React, {useState} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from './Repast.style';
import DatePicker from 'react-native-date-picker';
import auth from "@react-native-firebase/auth";

import RepastCard from '../../components/card/RepastCard';
import SelectedPicter from '../../components/SelectedPicter';
import useFetch from '../../hooks/useFetch';

import InputModal from '../../components/InputModal';
import Button from '../../components/Button';

const Repast = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const {data, error, loading} = useFetch(date.toDateString(),null,"repasts");
  const [repast, setRepast] = useState('');
  
  const handleToglleVisiblity = () => {
    setIsVisible(!isVisible);
    setRepast("");
  };
  const handleAddDatabase = () => {
    if (repast != '') {
      const object = {
        name: repast,
      };
      firestore()
      .collection('user')
      .doc(auth().currentUser.uid)
      .collection("date")
      .doc(date.toDateString())
      .collection("repasts")
      .add(object);
      handleToglleVisiblity();
    }
  };
  const toProgram = (repastTitle, selected, currentDate) => {
    navigation.navigate('ProgramPage', {repastTitle, selected, currentDate});
  };
  const renderRepast = ({item}) => (
    <RepastCard
      item={item.data()}
      onPress={() =>
        toProgram(item.data().name, item.ref._documentPath._parts[5], date.toDateString())
      }
    />
  );
  const handleDatePicker = date => {
    handleDatePickerToggle();
    setDate(date);
  };
  const handleDatePickerToggle = () => {
    setOpen(!open);
  };
  if(loading) {return <Text>loading</Text>}
  if(error) {return <Text>error</Text>}
  return (
    <SafeAreaView style={styles.container}>
      <SelectedPicter date={date} onPress={handleDatePickerToggle} />
      
      <FlatList
        data={data}
        renderItem={renderRepast}
        ListFooterComponent={
          <Button
            name={'Öğün Ekle'}
            thema={'tertiary'}
            onPress={handleToglleVisiblity}
          />
        }
      />
      <InputModal
        isVisible={isVisible}
        onClose={handleToglleVisiblity}
        onPress={handleAddDatabase}
        value={repast}
        onChangeText={setRepast}
        placeholder={'Öğün Adını Giriniz...'}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={handleDatePicker}
        onCancel={handleDatePickerToggle}
        mode={'date'}
      />
    </SafeAreaView>
  );
};

export default Repast;
