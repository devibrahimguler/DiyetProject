import React, {useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import styles from './Program.style';

import MealsCard from '../../components/card/MealsCard';
import useFetch from '../../hooks/useFetch';

import Button from '../../components/Button';
import SelectedHours from '../../components/SelectedHours';

const Program = ({navigation,route}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const {repastTitle, selected, currentDate} = route.params;
  const {data, error, loading} = useFetch(currentDate,selected);
  const toProgramEdit = () => {
    navigation.navigate("ProgramEditPage", {selected, currentDate});
  }
  const renderRepast = ({item}) => <MealsCard meal={item.data()} docId={selected} curQuantity={item.data().quantity} currentDate={currentDate} />;
  const handleDatePicker = date => {
    handleDatePickerToggle();
    date.setSeconds(0);
    if (Platform.OS === 'ios') {
      PushNotificationIOS.requestPermissions().then(() => {
        PushNotificationIOS.addNotificationRequest({
          id: selected,
          title: repastTitle,
          body: "Yemek Vakti!...",
          fireDate: date,
          repeatsComponent: {
            hour: true,
            minute: true,
            day: true,
          }
        })
        
      });
    } else {
      
    }
    setDate(date);
  };
  const handleDatePickerToggle = () => {
    setOpen(!open);
  };
  if(loading) {return <Text>loading</Text>}
  if(error) {return <Text>error</Text>}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{repastTitle}</Text>
      </View>
      <View style={styles.row_container}>
      <Text style={styles.title}>Alarm Oluştur: </Text>
      <SelectedHours date={date} onPress={handleDatePickerToggle} />
      </View>
      <Button name={'Öğün Düzenle'} thema={'tertiary'} onPress={toProgramEdit} />
      <FlatList style={styles.list} data={data} renderItem={renderRepast} />
      <DatePicker
        modal
        open={open}
        date={date}
        locale={"fr"}
        onConfirm={handleDatePicker}
        onCancel={handleDatePickerToggle}
        mode={"time"}
      />
    </SafeAreaView>
  );
};

export default Program;
