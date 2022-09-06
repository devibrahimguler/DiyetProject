import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import margins from "../../styles/margins";
import paddings from "../../styles/paddings";
import radiuses from "../../styles/radiuses";

const base_style = StyleSheet.create({
    container: {
        backgroundColor: colors.button,
        borderRadius: radiuses.buttonRadius,
        padding: paddings.button,
        marginHorizontal: margins.button,
        marginTop: margins.topButton,
        marginBottom: margins.topButton
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.beyaz,
    }
});

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            
        },
        title: {
            ...base_style.title,
        }
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.back,
            marginTop: 0,
            marginBottom: 0,
        },
        title: {
            ...base_style.title,
        }
    })
};