import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';


export default function App() {
  return (
    <LinearGradient colors={['#992c51','#eeb32c']} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/icon.png')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >

        <StartGameScreen/>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
  },
  backgroundImage:{
   opacity:0.35,
  }
});
