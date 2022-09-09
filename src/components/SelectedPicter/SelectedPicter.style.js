import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import margins from "../../styles/margins";
import paddings from "../../styles/paddings";
import radiuses from "../../styles/radiuses";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.button,
        margin: margins.container,
        padding: paddings.button,
        borderRadius: radiuses.buttonRadius,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        margin: 5,
        textAlign: "center",
        fontStyle: "italic"
    }
});