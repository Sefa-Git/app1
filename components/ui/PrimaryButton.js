import { View,Text,StyleSheet, Pressable } from "react-native";

import Colors from "../../constants/Color";

function PrimaryButton({children, onPress, }){

    return(
        <View style={styles.buttonOuterContainer} >
            <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{color:'#ffffff',foreground:true}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({

    buttonOuterContainer:{
        margin:4,
        borderRadius:24,
        overflow:'hidden', 
    },

    buttonInnerContainer:{
        padding:16,
        backgroundColor: Colors.button_purple,
        elevation: 15,

    },

    buttonText:{
        color:'white',
        fontSize:20,
        textAlign:'center',
    }
    
})