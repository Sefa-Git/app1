import { View,Text, StyleSheet } from "react-native";

import Colors from "../../constants/Color";


function NumberContainer({children}){
    return(
        <View style={styles.numberContainer} >
            <Text style={styles.textStyle} >{children}</Text>
        </View>

    );
}

export default NumberContainer;


const styles = StyleSheet.create({
    numberContainer:{
        borderWidth:4,
        borderColor:Colors.gradiant_yellow,
        borderRadius:8,
        padding:24,
        margin:24,
        alignItems:'center',
        justifyContent:'center',  
    },
    textStyle:{
        fontSize:40,
        color: Colors.gradiant_yellow,
        fontFamily:'open-sans-bold',
    }

})