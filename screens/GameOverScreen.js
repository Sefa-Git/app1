import {LinearGradient, StyleSheet, View, Text } from "react-native";

import Colors from "../constants/Color";

function GameOverScreen({amountOfTries}){

    if(amountOfTries == null){
        amountOfTries = -1;
    } 

    return(
    
        <View style={styles.ScreenView} >
            <Text colors={Colors.gradiant_yellow} fontSize={40}  style={styles.control_1} >Game Is Over</Text>


        </View>
    

    );

}

export default GameOverScreen;

const styles =  StyleSheet.create({
    ScreenView:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    control_1:{
        borderWidth:2,
        borderColor:'white',
        marginBottom:0,
    }
})