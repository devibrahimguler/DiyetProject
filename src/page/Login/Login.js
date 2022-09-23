import React from 'react';
import {SafeAreaView, View, Alert} from 'react-native';
import styles from './Login.style';
import auth from "@react-native-firebase/auth";
import {Formik} from 'formik';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

const initialSignInValues = {
  usermail: '',
  password: '',
};
const Login = ({navigation}) => {

  const handleSignIn = (val) => {
    auth()
    .signInWithEmailAndPassword(val.usermail, val.password)
    .then(()=> {
      Alert.alert("Hoşgeldin !", val.usermail);
      navigation.navigate("InnerScreen");
    })
    .catch(err => {
      Alert.alert("Hata !", err.message);
    })
  };

  const toSingUp = () => {
    navigation.navigate("RegisterPage");
  }

  const forgetPassword = () => {
    Alert.alert("Uyarı !", "Geçici olarak servis dışı...");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <View>
        <Formik
          style={styles.container}
          initialValues={initialSignInValues}
          onSubmit={handleSignIn}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                name={'account'}
                value={values.usermail}
                onChangeText={handleChange('usermail')}
                placeholder={'Kullanıcı mail...'}
              />
              <Input
                name={'lock'}
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder={'Şifre...'}
                secureTextEntry={true}
              />
              <Button name={'Giriş Yap'} onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
      <Button name={'Kayıt Ol'} thema={'secondary'} onPress={toSingUp}/>
      <Button name={'Şifremi unuttum !'} thema={'secondary'} onPress={forgetPassword} />
    </SafeAreaView>
  );
};

export default Login;
