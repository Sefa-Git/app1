import {useState} from 'react';
import { TextInput,View,StyleSheet} from "react-native";

import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen() {
    
    const [enteredNumber,setEnteredNumber] = useState('');
    
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler(){
    }
    return(
        <View style={styles.inputContainer}>
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
                    <PrimaryButton>Reset</PrimaryButton>  
                </View>

                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>  
                </View>
            </View>   
        </View>

    )
}

export default StartGameScreen;

const styles = StyleSheet.create({

    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginHorizontal:24,
        marginTop:100, 
        backgroundColor:'#731836',
        borderRadius:8,
        elevation: 15, 
    },
    numberInput:{
        height:50,
        width:60,
        fontSize:32,
        borderBottomColor:'#eeb32c',
        borderBottomWidth:2,
        color:'#eeb32c',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center',
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    }
})