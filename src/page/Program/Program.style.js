import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import margins from "../../styles/margins";
import paddings from "../../styles/paddings";
import radiuses from "../../styles/radiuses";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    inner_container: {
        marginTop: margins.container,
        marginHorizontal: margins.button,
        padding: paddings.button,
        backgroundColor: colors.back,
        borderRadius: radiuses.buttonRadius,
    },
    row_container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
    },
    list: {
        borderTopWidth: 2,
        borderColor: colors.back,
    },
});