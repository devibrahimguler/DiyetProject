import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import margins from "../../styles/margins";
import paddings from "../../styles/paddings";
import radiuses from "../../styles/radiuses";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    inner_container:{
        margin: margins.container,
        paddingVertical: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    body_container:{
        flexDirection: "row",
    },
    title: {
        fontSize: 20,
        margin: 5,
        fontStyle: "italic"
    },
    sparator: {
        fontSize: 20,
        margin: 5,
        fontStyle: "italic"
    },
    icon: {
        textAlign: "center"
    },
});