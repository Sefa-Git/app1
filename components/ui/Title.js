import {Text, StyleSheet} from 'react-native';

import Colors from '../../constants/Color';

function Title({props,children, style}){
    

    return(
        <Text style={[styles.title,style]}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    
    title:{
        fontSize:24,
        fontFamily:'open-sans-bold',
        color: 'white',
        textAlign:'center',
        borderWidth:2,
        borderColor: 'white',
        padding:10, 
        marginTop:20,
    }
})