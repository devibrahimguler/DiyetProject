import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./Profile.style";

import ProImage from "../../components/ProImage";
import ProInfo from "../../components/ProInfo";
import useFetch from "../../hooks/useFetch";

import Button from "../../components/Button";

const Profile = ({navigation}) => {
    const {data, error, loading} = useFetch();
    const toRapor = () => {
        navigation.navigate("RaporPage");
    }
    if(loading) {return <Text>loading</Text>}
    if(error) {return <Text>error</Text>}
    
    return (
        <SafeAreaView style={styles.container}>
            <ProImage data={data.data().imageUrl} />
            <ProInfo data={data.data()} />
            <Button name={"Diyet Raporum"} onPress={toRapor} />
        </SafeAreaView>
    );
}

export default Profile;