
import React from 'react';

//External Components
import { Text, View, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import AppLoading from 'expo-app-loading';

//Custom Components
import Type from './components/Type'

//Nav
import AuthStack from './components/AuthStack';
import AppTabs from './components/AppTabs'

//Fonts
import { useFonts, Nunito_200ExtraLight, Nunito_200ExtraLight_Italic, Nunito_300Light, Nunito_300Light_Italic, Nunito_400Regular, Nunito_400Regular_Italic, Nunito_600SemiBold, Nunito_600SemiBold_Italic, Nunito_700Bold, Nunito_700Bold_Italic, Nunito_800ExtraBold, Nunito_800ExtraBold_Italic, Nunito_900Black, Nunito_900Black_Italic } from '@expo-google-fonts/nunito';

//Styles
import styles from './styles'

//Hooks
import useAsyncStorage from './hooks/useAsyncStorage'

//dependencies
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const [token, setToken, clearToken] = useAsyncStorage('token')
  // setToken('')
  const Stack = createStackNavigator()
  const tokenActions = {
    token,
    setToken,
    clearToken
  }
  
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight, 
    Nunito_200ExtraLight_Italic, 
    Nunito_300Light, 
    Nunito_300Light_Italic, 
    Nunito_400Regular, 
    Nunito_400Regular_Italic, 
    Nunito_600SemiBold, 
    Nunito_600SemiBold_Italic, 
    Nunito_700Bold, 
    Nunito_700Bold_Italic, 
    Nunito_800ExtraBold, 
    Nunito_800ExtraBold_Italic, 
    Nunito_900Black, 
    Nunito_900Black_Italic
  });
  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.app} >
        <Type size='large' />
      </SafeAreaView>)
  }
  return (

    <NavigationContainer>
      {token?<AppTabs tokenActions={tokenActions} />:<AuthStack tokenActions={tokenActions} />}
    </NavigationContainer>
  );
}

