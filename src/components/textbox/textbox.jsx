import { TextInput } from "react-native";
import { styles } from "./textbox.style.js";

export default function TextBox(props) {
  return <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor={styles.placeholder}
      // value={props.value}
      onChangeText={(texto) => props.onChangeText?.(texto)}
    />
  
}
