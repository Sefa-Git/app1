import { StyleSheet, View, Text, Image } from "react-native";

import Colors from "../constants/Color";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({amountOfTries,userNumber, onStartNewGame}){

    return(
    
        <View style={styles.ScreenView} >

                <Title style={styles.titleStyle}>Game Over!</Title>
            
            <View style={styles.imageContainer} >
                    
                <Image source={require('../assets/success.png')} style={styles.image}/>    
            </View>

            <Text style={styles.sumText}>
                Your phone needed 
                <Text style={styles.highlightText}> {amountOfTries} </Text> 
                rounds to guess the number 
                <Text style={styles.highlightText}> {userNumber}</Text>                
            </Text>

            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
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
    imageContainer:{
        borderWidth:4,
        borderColor:Colors.gradiant_purple,
        height:250,
        width:250,
        borderRadius:125,
        overflow:'hidden',
        justifyContent:'center',
        margin:36,
    },
    titleStyle:{
        fontSize:30,
        borderWidth:2,
    },   
    image:{
        height:'%100',
        width:'%100',
        flex:1,
    },
    sumText:{
        fontSize:24,
        color:Colors.panel_purple,
        textAlign:'center',
        marginBottom:15,
    },
    highlightText:{
        fontStyle:'italic',
        color:Colors.gradiant_yellow,
    }
})