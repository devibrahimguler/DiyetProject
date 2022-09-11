import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import margins from "../../../styles/margins";
import paddings from "../../../styles/paddings";
import radiuses from "../../../styles/radiuses";

export default StyleSheet.create({
    container: {
        margin: 10
    },
    inner_container:{
        borderBottomWidth: 1,
        borderColor: colors.back
    },
    title : {
        fontSize: 18,
        margin: 5,
        textTransform: "uppercase",
        color: colors.button,
    }
});