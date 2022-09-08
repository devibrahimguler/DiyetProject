import React from "react";
import { View, Text } from "react-native";
import styles from "./Counter.style";
import IconButton from "../IconButton";

const Counter = ({counter, onAdd, onRemove}) => {
    return (
        <View style={styles.container}>
            <IconButton name={"plus"} thema={"plus"} onPress={onAdd}/>
            <Text style={styles.title} >{counter}</Text>
            <IconButton name="minus" thema={"minus"} onPress={onRemove}/>
        </View>
    );
}

export default Counter;