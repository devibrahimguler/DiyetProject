import React from "react";
import { View , Text} from "react-native";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Logo.style";

const Logo = () => {
    return (
        <View style={styles.container}>
            <Icon 
                name={"food-apple-outline"} 
                size={300} 
                color={colors.textBack}
            />
            <Text style={styles.title}>DiyetProject</Text>
        </View>
    );
}

export default Logo;