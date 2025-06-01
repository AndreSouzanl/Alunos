import { Image, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./aluno.style.js";
import icons from "../../contants/icons.js";

export default function Aluno(props) {

  return (
    <View style={styles.aluno}>
      <Image style={styles.icone} source={icons.user} />
      <Text style={styles.titulo}>{props.nome}</Text>
      <TouchableOpacity onPress={() => props.onDelete(props.nome)}>
        <Image style={styles.btnDelete} source={icons.remove} />
      </TouchableOpacity>
    </View>
  );
}
