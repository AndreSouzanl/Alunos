import { FlatList, View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import { styles } from "./alunos.style.js";
import Button from "../../components/button/button.jsx";

import Titulo from "../../components/titulo/titulo.jsx";
import icons from "../../contants/icons.js";
import TextBox from "../../components/textbox/textbox.jsx";

export default function Alunos() {
  const alunos = ["Andre", "Helber", "Maria", "Ana"];

  function clickcursos(curso) {
    console.log("clicou curso " + curso);
  }

  function onchangeText(texto) {
    console.log(texto);
  }

  return (
    <View style={styles.container}>
      <Titulo
        icone={icons.group}
        titulo="Contabilidade"
        subtitulo="Gerencie os alunos desse curso."
      />

      <View style={styles.form}>
        <TextBox placeholder="Nome do Aluno.." onchangeText={onchangeText} />

        <TouchableOpacity>
          <Image source={icons.add} style={styles.add} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={alunos}
        style={styles.list}
        keyExtractor={(curso) => curso}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />

      <Button texto="Remover Curso" estilo="red" />
    </View>
  );
}
// componente textbox
