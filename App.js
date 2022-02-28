
import Carrinho from './src/screens/Carrinho';
import Finalizar from './src/screens/Finalizar';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  
  });

  if(!fonteCarregada){
    return <AppLoading/>
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Carrinho">
      <Stack.Screen name="Carrinho" component={Carrinho} />
      <Stack.Screen name="Finalizar" component={Finalizar} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

