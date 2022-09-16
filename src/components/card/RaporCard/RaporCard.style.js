import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import margins from "../../../styles/margins";
import paddings from "../../../styles/paddings";
import radiuses from "../../../styles/radiuses";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    inner_container: {
        flex: 1,
        flexDirection: "row",
        marginTop: margins.container,
        marginStart: margins.container,
        padding: paddings.input,
        borderBottomWidth: 2,
        borderColor: colors.back
    },
    body_container: {
        flex:1,
        justifyContent: "space-around",
        alignItems: "flex-end",
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.back,
    },
    kalori : {
        fontSize: 12,
        fontStyle: "italic",
    },
    total: {
        fontSize: 18,
        margin: 5,
        width: 80,
        textAlign: "right",
    },
});