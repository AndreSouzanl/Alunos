import { FlatList, Image, Text, View } from "react-native";
import { styles } from "../cursos/cursos.style.js";
import icons from "../../contants/icons.js";
import Button from "../../components/button/button.jsx";
import Curso from "../../components/curso/curso.jsx";

export default function cursos() {
  const cursos = ["contabilidade", "Eletronica", "pintura", "Desenho",];

  function clickcursos(curso) {
    console.log("clicou curso " + curso);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icons.group} />
      <Text style={styles.titulo}>Cursos</Text>
      <Text style={styles.subtitulo}>Gerencie os cursos de sua escola.</Text>

      <FlatList
        data={cursos}
        style={styles.list}
        keyExtractor={(curso) => curso}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Curso nome={item} onPress={clickcursos} />;
        }}
      />

      <Button texto="Cadastrar novo curso" estilo="blue" />
    </View>
  );
}
// componente titulo