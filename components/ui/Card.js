import {Dimensions, StyleSheet, View } from "react-native";

import Colors from "../../constants/Color";

function Card({children}){

return(
    <View style={styles.card}  >
        {children}
    </View>
);
}

export default Card;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginHorizontal:24,
        marginTop:36, 
        backgroundColor: Colors.panel_purple,
        borderRadius:8,
        elevation: 15, 
    },
})