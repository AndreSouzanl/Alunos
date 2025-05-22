import { View, Text, Image } from 'react-native'
import { styles } from "./home.style"
import icons from '../../contants/icons.js'
import Button from '../../components/button/button.jsx'


export default function Home() {
  const teste = () => {
    console.log("clicou")
  }
  return (
    <View style={styles.container}>
      <Image source={icons.logo} style={styles.logo} />
      <Text style={styles.titulo}>Alunos</Text>
      <Text style={styles.subtitulo}>
        Faça a gestão dos alunos de sua escola com app Alunos
      </Text>
      
      <Button texto="Acessar" estilo="blue" onPress={teste}/>
    </View>
  )
}

