import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { format } from "date-fns";
import styles from "./SelectedPicter.style";

const SelectedPicter = ({onPress, date = new Date()}) => {
    const formattedDate = format(date, "dd - MM - yyyy");
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title} >Tarih Seç: {formattedDate}</Text>
        </TouchableOpacity>
    );
}

export default SelectedPicter;