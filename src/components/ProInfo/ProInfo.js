import React from "react";
import { View, Text } from "react-native";
import styles from "./ProInfo.style";

import InfoCard from "../card/InfoCard";

const ProInfo = ({data}) => {
    return (
        <View style={styles.container}>
            <InfoCard title={"isim"} dataRow={"name"} data={data} />
            <InfoCard title={"soyisim"} dataRow={"surname"} data={data}  />
            <InfoCard title={"yaş"} dataRow={"age"} data={data} />
            <InfoCard title={"boy"} dataRow={"size"} data={data} />
            <InfoCard title={"kilo"} dataRow={"weight"} data={data} />
        </View>
    );
}

export default ProInfo;