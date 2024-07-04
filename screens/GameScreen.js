import {  View , StyleSheet, Alert} from "react-native";
import {useState, useEffect} from 'react';
import {} from '@expo/vector-icons';

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";


function generateRandomBetween(min,max, exclude){
    const rndNum = Math.floor(Math.random() *(max-min))+min;
    
    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    } else {    
        return rndNum;
    }
}
    let minBoundery  = 1;
    let maxBoundery  = 100;

    function GameScreen({userNumber, onGameOver}){
       
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const[currentGuess, setCurrentGuess] = useState(initialGuess);


    useEffect(() => {

        if(currentGuess === userNumber){
            
            onGameOver();
        }

    }, [currentGuess,userNumber,onGameOver]);

    function nextGuessHandler(moreOrLess){        
        if(
            (moreOrLess === 'less' && currentGuess < userNumber) ||
            (moreOrLess === 'more' && currentGuess > userNumber)
        ){
            Alert.alert(
                "Don't Lie!!",
                'Lying is bad ',
                [{text:'Sorry', style:'cancel'}]
            );
            return;
        }

        if(moreOrLess === 'more' ){
            minBoundery = currentGuess + 1;
        }    
        else{
            maxBoundery=currentGuess;            
        }    
        
        const newRandNum = generateRandomBetween(minBoundery,maxBoundery ,currentGuess);
        setCurrentGuess(newRandNum);
        
    }    

    return (
        <View style={styles.screen}>
                    
                <Title>Opponent's Guess</Title>
                        <NumberContainer>{currentGuess}</NumberContainer>
                    
                    <Card>
                        <InstructionText >Higher or Lower</InstructionText>

                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={nextGuessHandler.bind(this,'more')}>Higher</PrimaryButton>
                            </View>
                                
                            <View style={styles.buttonContainer}>

                                <PrimaryButton onPress={nextGuessHandler.bind(this,'less')}>Lower</PrimaryButton>
                            </View>
                        </View>
                    
                    </Card>

                    {/*LOGS*/}
        </View>
    )

}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
        borderColor:'white',
        borderWidth:2,
    },
    numberContainer:{
        height: 150,
        width:150,
        borderBottomWidth:4,
        flexDirection:'column-reverse',
        alignItems:'center',
    },
    buttonsContainer:{
        flexDirection:'row',
        marginTop:10,
    },
    buttonContainer:{
        flex:1,
        marginTop:10,
    },
    
    logList:{
        flex:1,
        borderColor:'blue', 
        borderWidth:2,
        marginTop:5,
        marginHorizontal:4,
        
    },

})