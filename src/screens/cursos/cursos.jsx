import { FlatList, View } from "react-native";
import { styles } from "../cursos/cursos.style.js";
import Button from "../../components/button/button.jsx";
import Curso from "../../components/curso/curso.jsx";
import Titulo from "../../components/titulo/titulo.jsx";
import icons from "../../contants/icons.js";
import dbCursos from "../../database/cursos.js";
import { useState, useCallback, use } from "react";
import { useFocusEffect } from "@react-navigation/native";


export default function Cursos(props) {
  const [cursos, setCursos] = useState([]);

  function clickcursos(curso) {
    props.navigation.navigate("alunos", { nome: curso });
  }

  async function listarCursos(){
    setCursos(await dbCursos.Listar());
  }

  useFocusEffect(useCallback(() => {
    listarCursos();
  }, []));

  return (
    <View style={styles.container}>
      <Titulo
        icone={icons.group}
        titulo="Cursos"
        subtitulo="Gerencie os cursos da sua escola."
      />

      <FlatList
        data={cursos}
        style={styles.list}
        keyExtractor={(curso) => curso}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Curso nome={item} onPress={clickcursos} />;
        }}
      />

      <Button
        texto="Cadastrar novo curso"
        estilo="blue"
        onPress={() => props.navigation.navigate("novo-curso")}
      />
    </View>
  );
}

