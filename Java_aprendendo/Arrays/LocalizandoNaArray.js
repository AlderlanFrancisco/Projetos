const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediadosalunos = [10,7,9,6];
let ListaDeNotasEAlunos = [alunos, mediadosalunos];

const ExibeNomeNota = (nomeDoAluno) => {
//Includes (ele pega uma array e faz uma busca para ver se existe nela), ele retorna um true ou false, um booleano;
    if (ListaDeNotasEAlunos [0].includes(nomeDoAluno)){
//IndexOF ele traz qual é o númnero do índice onde o nome esta presente. Caso não esteja, ele vai retornar -1
        let índice = ListaDeNotasEAlunos[0].indexOf(nomeDoAluno);
                                //  [0] [3]
        return `${ListaDeNotasEAlunos[0][índice]} a sua média é ${ListaDeNotasEAlunos[1][índice]}`;
    }
    else {
        return `O Aluno não está cadastradado no sistema`;
    }
}

console.log (ExibeNomeNota("Ana"));