import {useState} from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading'; // SDK 40 ile kullanımm dışı. kendiminkini yaptım 
import MyAppLoading from './components/ui/MyAppLoading';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Color';

export default function App() {
  
  const [userNumber,setUserNumbmer] = useState();
  const [gussAmounts,setGussAmounts] = useState(0);
  const [gameIsOver,setGameIsOver] = useState(true);
  const [startNewGame,setStartNewGame] = useState(false);

  const [fontsLoaded] =  useFonts({
    'open-sans-bold': require('./constants/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./constants/fonts/OpenSans-Regular.ttf')
  });

  if(!fontsLoaded){
    return <MyAppLoading/>;
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumbmer(pickedNumber);
    setGameIsOver(false);
    
  }
  
  function gameOverHandler(numberOfGuesses){
    setGameIsOver(true);
    setGussAmounts(numberOfGuesses);
  }

  function newGameHandler(){
    setUserNumbmer(null);
    setGussAmounts(0);
    setStartNewGame(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber ) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber ) {
    screen =  <GameOverScreen amountOfTries={gussAmounts} userNumber={userNumber} onStartNewGame={newGameHandler}/>
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
   opacity:0.25,
  }
});
