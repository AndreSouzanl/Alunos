import { FlatList, View, TouchableOpacity, Image, Alert } from "react-native";
import { styles } from "./alunos.style.js";
import Button from "../../components/button/button.jsx";

import Titulo from "../../components/titulo/titulo.jsx";
import icons from "../../contants/icons.js";
import TextBox from "../../components/textbox/textbox.jsx";
import Aluno from "../../components/aluno/aluno.jsx";
import dbAlunos from "../../database/alunos.js";
import dbCursos from "../../database/cursos.js";
import { useEffect, useState } from "react";

export default function Alunos(props) {
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState("");

  const curso = props.route.params.nome;

  async function ListarAlunos() {
    setAlunos(await dbAlunos.Listar(curso));
  }

  function onchangeText(texto) {
    setAluno(texto);
  }

  async function CriarAluno() {
    try {
      await dbAlunos.Inserir(curso, aluno);
      ListarAlunos();
      setAluno("");
    } catch (error) {
      Alert.alert(error);
    }
  }

  async function DeleteAlunos(aluno) {
    try {
      await dbAlunos.Excluir(curso, aluno);
      ListarAlunos();
    } catch (error) {
      Alert.alert(error);
    }
  }
  async function DeleteCurso() {
    try {
      await dbCursos.Excluir(curso);
      props.navigation.navigate("cursos")
    } catch (error) {
      Alert.alert(error);
    }
  }

  useEffect(() => {
    ListarAlunos();
  }, []);

  return (
    <View style={styles.container}>
      <Titulo
        icone={icons.group}
        titulo={curso}
        subtitulo="Gerencie os alunos desse curso."
      />

      <View style={styles.form}>
        <TextBox
          placeholder="Nome do Aluno.."
          onChangeText={onchangeText}
          value={aluno}
        />

        <TouchableOpacity onPress={CriarAluno}>
          <Image source={icons.add} style={styles.add} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={alunos}
        style={styles.list}
        keyExtractor={(curso) => curso}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Aluno nome={item} onDelete={DeleteAlunos} />;
        }}
      />

      <Button texto="Remover Curso" estilo="red" onPress={DeleteCurso} />
    </View>
  );
}
