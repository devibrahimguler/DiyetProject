import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import margins from "../../styles/margins";
import paddings from "../../styles/paddings";
import radiuses from "../../styles/radiuses";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: margins.inputHorizontal,
        marginVertical: margins.inputVertical,
        backgroundColor: colors.textBack,
        padding: paddings.input,
        borderRadius: radiuses.inputRadius,
    },
    inner_container: {
        flex: 1,
        padding: paddings.innerInput,
    },
    input: {
        fontSize: 18,
    }
});