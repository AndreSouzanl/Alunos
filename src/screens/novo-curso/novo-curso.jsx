import { Alert, View } from "react-native";
import TextBox from "../../components/textbox/textbox";
import Titulo from "../../components/titulo/titulo";
import icons from "../../contants/icons";
import Button from "../../components/button/button";
import { styles } from "../novo-curso/novo-curso.style.js";
import dbCursos from "../../database/cursos.js";
import { useState } from "react";

export default function NovoCurso(props) {
  const [curso, setCurso] = useState("");
  function onchange(texto) {
    setCurso(texto);
  }
  async function criarCurso() {
    try {
      await dbCursos.Inserir(curso);
      props.navigation.navigate("cursos");
      setCurso("");
    } catch (error) {
      Alert.alert(error);
    }
  }
  return (
    <View style={styles.container}>
      <Titulo
        icone={icons.group}
        titulo="Novo Curso"
        subtitulo="Vamos criar o seu novo curso"
        marginExtra
      />
      <View style={styles.form}>
        <TextBox
          placeholder="Nome do Curso.."
          value={curso}
          onChangeText={onchange}
        />
      </View>
      <Button texto="Criar" estilo="blue" onPress={criarCurso} />
    </View>
  );
}
