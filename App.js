import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Home from "./src/screens/home/home.jsx";
import Cursos from "./src/screens/cursos/cursos.jsx";
import NovoCurso from "./src/screens/novo-curso/novo-curso.jsx";
import Alunos from "./src/screens/alunos/alunos.jsx";


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (fontsLoaded ? 
    <>
      <StatusBar style="light" />
      {/* <Home /> */}
      <Alunos />
    </> : <ActivityIndicator />
  ) 
  
}

// componente Aluno

