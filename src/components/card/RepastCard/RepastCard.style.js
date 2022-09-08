import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import margins from "../../../styles/margins";
import paddings from "../../../styles/paddings";
import radiuses from "../../../styles/radiuses";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.back,
        padding: paddings.button,
        marginVertical: margins.container,
        marginHorizontal: margins.button,
        borderRadius: radiuses.buttonRadius
    },
    title : {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
    }
});