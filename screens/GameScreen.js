import {  View , StyleSheet, Text} from "react-native";
import {useState} from 'react';

import Title from "../components/ui/Title";
import Colors from "../constants/Color";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

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

function GameScreen({userNumber}){
    
    function nextGuessHandler(moreOrLess){

        if(moreOrLess === 'more'){
            minBoundery = currentGuess + 1;
        }
        else{
            maxBoundery=currentGuess - 1;
        }
        const newRandNum = generateRandomBetween(minBoundery,maxBoundery ,currentGuess);
        setCurrentGuess(newRandNum);
        
    }
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const[currentGuess, setCurrentGuess] = useState();


    return (
        <View style={styles.screen}>
                    
                <Title>Opponent's Guess</Title>
                        <NumberContainer>{initialGuess}</NumberContainer>
                    
                    <View>
                        <Text>Higher or Lower?</Text>

                        <View>
                            <PrimaryButton onPress={nextGuessHandler.bind(this,'more')}>+</PrimaryButton>
                            
                            <PrimaryButton onPress={nextGuessHandler.bind('less')}>-</PrimaryButton>
                        </View>
                    
                    </View>

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
    numberTextContainer:{
        fontSize:90,
        color:Colors.gradiant_yellow,
    },
    topContainer:{
        flex:5, 
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'flex-end',
    },
    bottomContainer:{
        flex:8,
    },
    buttonsContainer:{
        flexDirection:'row',
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