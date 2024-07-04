import {useState} from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


import AppLoading from 'expo-app-loading'; // Depracated since SDK 40. Will use Splash screen instead
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Color';

export default function App() {
  
  const [userNumber,setUserNumbmer] = useState();
  const [gameIsOver,setGameIsOver] = useState(true);

  const [fontsLoaded] =  useFonts({
    'open-sans-bold': require('./constants/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./constants/fonts/OpenSans-Regular.ttf')
  });

  if(!fontsLoaded){
    return SplashScreen.preventAutoHideAsync();
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumbmer(pickedNumber);
    setGameIsOver(false);
    
  }
  
  function gameOverHandler(){
    setGameIsOver(true);
  }


  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber ) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber ) {
    screen =  <GameOverScreen/>
  }

  return (

    <LinearGradient colors={[Colors.gradiant_purple,Colors.gradiant_yellow]} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/image.jpg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >

    <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
