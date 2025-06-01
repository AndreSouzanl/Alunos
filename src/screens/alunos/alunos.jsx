import { FlatList, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./alunos.style.js";
import Button from "../../components/button/button.jsx";

import Titulo from "../../components/titulo/titulo.jsx";
import icons from "../../contants/icons.js";
import TextBox from "../../components/textbox/textbox.jsx";
import Aluno from "../../components/aluno/aluno.jsx";

export default function Alunos(props) {
  const alunos = ["Andre", "Helber", "Maria", "Ana"];
  const cursos = props.route.params.nome;

  function onchangeText(texto) {
    console.log(texto);
  }

  function DeleteAlunos(aluno) {
    console.log("clicou aluno " + aluno);
  }

  return (
    <View style={styles.container}>
      <Titulo
        icone={icons.group}
        titulo={cursos}
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
          return <Aluno nome={item} onDelete={DeleteAlunos} />;
        }}
      />

      <Button texto="Remover Curso" estilo="red" />
    </View>
  );
}

