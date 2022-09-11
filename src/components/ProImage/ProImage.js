import React from "react";
import { View, Image } from "react-native";
import styles from "./ProImage.style";

const ProImage = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:"https://firebasestorage.googleapis.com/v0/b/diyetproject.appspot.com/o/user%2Fplaceholder.png?alt=media&token=31be700b-934e-4fc5-bfde-008a610c0866"}} />
        </View>
    );
}

export default ProImage;