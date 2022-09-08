import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import margins from "../../styles/margins";
import paddings from "../../styles/paddings";
import radiuses from "../../styles/radiuses";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        marginStart: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        margin: 5,
        fontWeight: "bold",
    }
});