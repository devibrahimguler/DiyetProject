import React from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import styles from "./Repast.style";

import repast_data from "../../Datas/Food.json";

const Repast = () => {
    const renderRepast = ({item}) => <Text>{item.name}</Text>
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={repast_data}
                renderItem={renderRepast}
            />
        </SafeAreaView>
    );
}

export default Repast;