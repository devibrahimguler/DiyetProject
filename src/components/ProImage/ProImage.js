import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./ProImage.style";
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from "@react-native-firebase/auth";

import useFetch from '../../hooks/useFetch';

const ProImage = ({dataRow}) => {
    const {data, error, loading} = useFetch();

    const handleSelectImage = async() => {
        const result = await launchImageLibrary();
        const reference = storage().ref(`${auth().currentUser.uid}.png`);
        const pathToFile = result.assets[0].uri;
        console.log(pathToFile);
        await reference.putFile(pathToFile);
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handleSelectImage}>
            <Image style={styles.image} source={{uri:data[dataRow] == "" ? data[dataRow] : "https://firebasestorage.googleapis.com/v0/b/diyetproject.appspot.com/o/user%2Fplaceholder.png?alt=media&token=3096b600-4494-415a-8bb4-db55254b64fc"}} />
        </TouchableOpacity>
    );
}

export default ProImage;