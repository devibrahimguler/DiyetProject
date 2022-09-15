import React from 'react';
import {SafeAreaView, View,Alert} from 'react-native';
import styles from './Register.style';
import {Formik} from 'formik';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

const initialSignUpValues = {
  usermail: '',
  password: '',
  repassword: '',
};
const Register = ({navigation}) => {
  const handleSignUp = (val) => {
    if(val.usermail != ""){
      if(val.password == val.repassword) {
        auth()
        .createUserWithEmailAndPassword(val.usermail, val.password)
        .then(()=> {
          Alert.alert("", "Hoşgeldin" + val.usermail);
          navigation.navigate("InnerScreen");
        })
        .catch(err => {
          Alert.alert("Hata !", err.message);
        })
      }else {
        Alert.alert("Hata !", "Şifreler Eşleşmedi !");
      }
    }
  };

  const toSignIn = () => {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <View>
        <Formik
          style={styles.container}
          initialValues={initialSignUpValues}
          onSubmit={handleSignUp}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                name={'account'}
                value={values.usermail}
                onChangeText={handleChange('usermail')}
                placeholder={'Kullanıcı Mail...'}
              />
              <Input
                name={'lock'}
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder={'Şifre...'}
                secureTextEntry={true}
              />
              <Input
                name={'lock'}
                value={values.repassword}
                onChangeText={handleChange('repassword')}
                placeholder={'Şifre Tekrarı...'}
                secureTextEntry={true}
              />
              <Button buttonName={'Kayıt Ol'} onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
      <Button buttonName={'Geri'} thema={'secondary'} onPress={toSignIn} />
    </SafeAreaView>
  );
};

export default Register;
