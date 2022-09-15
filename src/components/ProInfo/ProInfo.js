import React from "react";
import { View, Text } from "react-native";
import styles from "./ProInfo.style";

import InfoCard from "../card/InfoCard";

const ProInfo = () => {
    return (
        <View style={styles.container}>
            <InfoCard title={"isim"} dataRow={"name"} />
            <InfoCard title={"soyisim"} dataRow={"surname"}  />
            <InfoCard title={"yaş"} dataRow={"age"}  />
            <InfoCard title={"boy"} dataRow={"size"}  />
            <InfoCard title={"kilo"} dataRow={"weight"}  />
        </View>
    );
}

export default ProInfo;