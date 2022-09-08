import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import margins from "../../styles/margins";
import paddings from "../../styles/paddings";
import radiuses from "../../styles/radiuses";

const basic_style = StyleSheet.create({
    container: {
        borderRadius: 15,
        height: 20,
        width: 20,
        justifyContent:"center",
        alignItems: "center",
    },
});

export default {
    plus: StyleSheet.create({
        ...basic_style,
        container: {
            ...basic_style.container,
            backgroundColor: colors.button,
        },
    }),
    minus: StyleSheet.create({
        container: {
            ...basic_style.container,
            backgroundColor: "red",
        },
    }),
    adding: StyleSheet.create({
        container: {
            ...basic_style.container,
            height: 30,
            width: 30,
            margin:10,
            borderRadius: 5,
            backgroundColor: colors.button,
        },
    }),
}