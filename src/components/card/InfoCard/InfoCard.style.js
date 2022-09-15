import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderBottomLeftRadius: 15,
        borderColor: colors.back
    },
    inner_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center" 
    },
    body_container: {
        flex: 1,
        flexDirection: "row",
    },
    title: {
        fontSize: 20,
        fontStyle: "italic",
        marginStart: 10,
        padding: 3,
    },
});