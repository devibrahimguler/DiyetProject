import { StyleSheet } from "react-native";
import margins from "../../styles/margins";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        margin: margins.logo,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: colors.textBack
    },
    title: {
        fontSize: 18,
        color: colors.textBack,
        margin: margins.logo
    }
});