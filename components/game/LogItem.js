import {Text, StyleSheet, View } from "react-native"

import Colors from "../../constants/Color";


function LogItem({children,guessCount}){
return(
    <View style={thisStyles.itemView} >
        <View style={thisStyles.itemContainer} >
            <Text style={thisStyles.numberTextStyle} >#{guessCount}</Text>
            <Text style={thisStyles.textStyle} >Opponent's Guess: {children}</Text>
        </View>

            
    </View>
);
}

export default LogItem;

const thisStyles = StyleSheet.create({
    
    itemView:{
        justifyContent:'space-around',
        marginBottom:5,
        borderRadius:25,
        backgroundColor: Colors.gradiant_yellow,
        borderColor:Colors.panel_purple,
        borderWidth:2,
    },
    itemContainer:{
        flex:1,
        padding:5,
        flexDirection:'row',
    },
    numberTextStyle:{
        color: Colors.gradiant_purple,
        fontSize:20,
        fontWeight:'bold',
        marginVertical:10,
        flex:3,
    },
    textStyle:{
        color: Colors.gradiant_purple,
        fontSize:15,
        marginVertical:10,
        textAlign:'right',
        flex:10,
        paddingRight:15,
    },
        
        
})
