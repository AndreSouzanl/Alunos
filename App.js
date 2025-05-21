import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return ( fontsLoaded ? 
    <View>
      <Text>Alunos</Text>
      <StatusBar style="auto" />
    </View>: <ActivityIndicator />
  ) 
  
}

