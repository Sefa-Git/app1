import react from "react";
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import Colors from "../../constants/Color";

function MyAppLoading(){
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.panel_purple} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MyAppLoading;