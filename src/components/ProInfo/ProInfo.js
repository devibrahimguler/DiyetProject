import React from "react";
import { View, Text } from "react-native";
import styles from "./ProInfo.style";

import InfoCard from "../card/InfoCard";

const ProInfo = () => {
    return (
        <View style={styles.container}>
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
        </View>
    );
}

export default ProInfo;