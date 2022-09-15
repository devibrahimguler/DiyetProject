import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./Profile.style";

import ProImage from "../../components/ProImage";
import ProInfo from "../../components/ProInfo";

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ProImage dataRow={"imageUrl"} />
            <ProInfo />
        </SafeAreaView>
    );
}

export default Profile;