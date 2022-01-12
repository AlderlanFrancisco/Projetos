    const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
    const notas = [7, 4.5, 8, 7.5];
// filter serve para filtrar elementos. indice (parametro, vai dar o número)
//                              Elemento, indice    => array  de referência [indice]
// como o parametro aluno não está sendo usado, ele pode ser trocado por _. O java reclamou disso.
// Apesar dele não estar sendo usando para fazer essa comparação, ainda é o dado que ele retorna.
    const reprovados = nomes.filter ((aluno, indice) => notas [indice] <5)
    console.log (`Reprovados: ${reprovados}`);
