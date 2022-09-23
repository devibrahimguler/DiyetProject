import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./Profile.style";
import auth from "@react-native-firebase/auth";

import ProImage from "../../components/ProImage";
import ProInfo from "../../components/ProInfo";
import useFetch from "../../hooks/useFetch";

import Button from "../../components/Button";

const Profile = ({navigation}) => {
    const {data, error, loading} = useFetch(null,null,"user");
    const toRapor = () => {
        navigation.navigate("RaporPage");
    }
    const logOut = () => {
        auth().signOut().then(()=>{
            navigation.navigate("EntryScreen");
        });
    }
    if(loading) {return <Text>loading</Text>}
    if(error) {return <Text>error</Text>}
    
    return (
        <SafeAreaView style={styles.container}>
            <ProImage data={data.data().imageUrl} />
            <ProInfo data={data.data()} />
            <Button name={"Diyet Raporum"} onPress={toRapor} />
            <Button name={"Çıkış Yap"} onPress={logOut} />
        </SafeAreaView>
    );
}

export default Profile;