import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./Profile.style";

import ProImage from "../../components/ProImage";
import ProInfo from "../../components/ProInfo";
import useFetch from "../../hooks/useFetch";

const Profile = () => {
    const {data, error, loading} = useFetch();
    
    if(loading) {return <Text>loading</Text>}
    if(error) {return <Text>error</Text>}
    
    return (
        <SafeAreaView style={styles.container}>
            <ProImage data={data.imageUrl} />
            <ProInfo data={data} />
        </SafeAreaView>
    );
}

export default Profile;