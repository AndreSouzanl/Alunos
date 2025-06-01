import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "./src/contants/theme.js";
import Home from "./src/screens/home/home.jsx";
import Cursos from "./src/screens/cursos/cursos.jsx";
import NovoCurso from "./src/screens/novo-curso/novo-curso.jsx";
import Alunos from "./src/screens/alunos/alunos.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const formatScreens = {
    title: "",
    headerShadowVisible: false,
    headerTransparent: true,
    headerTintColor: COLORS.white,
    headerStyle: {
      backgroundColor: COLORS.gray,
    },
  };

  return fontsLoaded ? (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="cursos"
            component={Cursos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="novo-curso"
            component={NovoCurso}
            options={formatScreens}
          />
          <Stack.Screen
            name="alunos"
            component={Alunos}
            options={formatScreens}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  ) : (
    <ActivityIndicator />
  );
}

// Preparando para receber os dados com AsyncStorage
