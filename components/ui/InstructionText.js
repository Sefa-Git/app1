import { Text,StyleSheet } from "react-native";

import Colors from "../../constants/Color";

function InstructionText({children, style}){

    return(
        <Text style={[styles.instructionText,style]}>{children}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText:{
        fontSize:20,
        color: Colors.gradiant_yellow,
        fontFamily:'open-sans',
    }
})