import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para listar cursos armazenados no AsyncStorage
async function Listar(curso) {
  try {
    const storage = await AsyncStorage.getItem("app-alunos-cursos." + curso);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
}
// Função para inserir um novo curso no AsyncStorage
async function Inserir(curso, aluno) {
  if (curso.length == 0) {
    throw "Informe o nome do curso";
    return;
  }
  if (aluno.length == 0) {
    throw "Informe o nome do Aluno";
    return;
  }

  try {
    const alunos = await Listar(curso);

    const resultado = alunos.filter((a) => a == aluno);

    if (resultado.length > 0) {
      throw "Esse aluno já está matriculado na escola!";
      return;
    } else {
      alunos.push(aluno);
    }

    await AsyncStorage.setItem(
      "app-alunos-cursos." + curso,
      JSON.stringify(alunos)
    );
  } catch (error) {
    throw error;
  }
}
// Função para excluir um curso no AsyncStorage
async function Excluir(curso, aluno) {
  if (curso.length == 0) {
    throw "Informe o nome do curso";
    return;
  }

  if (aluno.length == 0) {
    throw "Informe o nome do Aluno";
    return;
  }

  try {
    const alunos = await Listar(curso);
    const novaLista = alunos.filter((item) => item != aluno);
    await AsyncStorage.setItem(
      "app-alunos-cursos." + curso,
      JSON.stringify(novaLista)
    );
  } catch (error) {
    throw error;
  }
}

export default { Listar, Inserir, Excluir };
