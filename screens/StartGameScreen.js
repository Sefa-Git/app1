import {useState} from 'react';
import { TextInput,View,Text,StyleSheet,Alert} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Colors from '../constants/Color';

function StartGameScreen({onPickNumber}) {
    
    const [enteredNumber,setEnteredNumber] = useState('');
    
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler(){
    
        const chosenNumber = parseInt(enteredNumber);


        if ( isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99 ) {
            Alert.alert(
                'Invalidnumber',
                'Number has to be a number between 1 and 99',
                [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
            )
            return;
        }
        onPickNumber(chosenNumber);
   }

    function resetInputHandler(){ 
        setEnteredNumber('');
    }
    return(
    <View style={styles.rootContainer} >
        <Title> Guess The Number</Title>
        
        <Card>
            
            <InstructionText>Enter A Number</InstructionText>
            <TextInput
             style={styles.numberInput}
             maxLength={2}
             keyboardType="number-pad" 
             autoCapitalize="none"
             autoCorrect={false}
             onChangeText={numberInputHandler}
             value={enteredNumber}
             />
            <View style={styles.buttonsContainer}>                
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>  
                </View>

                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>  
                </View>
            </View>   
        </Card>
        
    </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({

    numberInput:{
        height:50,
        width:60,
        fontSize:32,
        borderBottomColor: Colors.gradiant_yellow,
        borderBottomWidth:2,
        color: Colors.gradiant_yellow,
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center',
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    },
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center',
    },
    
})