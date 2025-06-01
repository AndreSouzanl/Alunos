import { View } from "react-native";
import TextBox from "../../components/textbox/textbox";
import Titulo from "../../components/titulo/titulo";
import icons from "../../contants/icons";
import Button from "../../components/button/button";
import { styles } from "../novo-curso/novo-curso.style.js";

export default function NovoCurso() {
  function onchange(texto) {
    console.log(texto);
  }
  function criarCurso() {
    console.log("criar curso");
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
          value="Teste"
          onChangeText={onchange}
         
        />
      </View>
      <Button texto="Criar" estilo="blue" OnPress={criarCurso} />
    </View>
  );
}
