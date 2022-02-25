import { View, StatusBar, SafeAreaView } from 'react-native';
import Carrinho from './src/screens/Carrinho';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/carrinho';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  
  });

  if(!fonteCarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView>
      <Carrinho {...mock}></Carrinho>
      <StatusBar/>
    </SafeAreaView>
  );
}

