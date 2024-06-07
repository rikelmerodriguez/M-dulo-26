// Array de objetos representando os alunos
const alunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 8 },
    { nome: "Ana", nota: 6 },
    { nome: "Carlos", nota: 4 }
  ];
  
  // Função para retornar apenas os alunos com nota maior ou igual a 6
  function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
  }
  
  // Chamando a função e imprimindo o resultado
  const alunosAprovadosArray = alunosAprovados(alunos);
  console.log(alunosAprovadosArray);
  