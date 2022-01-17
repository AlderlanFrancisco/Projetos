// Desafio - Listas de dependentes
// Verificar a melhor forma de agregar a informação de um novo dependente ao cliente;

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@gmail.com",
    fones: ["7958625369", "789562485"],
    dependentes: [{
        nome: "Francisco",
        DataDeNascimento: "10/07/1994",
        Parentesco: "tio"
    },{
        nome: "Maria",
        DataDeNascimento: "25/02/1998",
        parentesco: "Prima"
    }]
}

cliente.dependentes.push ({
    nome: "Samia monica",
    DataDeNascimento: "04/01/2014",
    parentesco: "filha"
})

console.log (cliente);

console.log (cliente.dependentes[0]);
// o filter vai salvar em filha mais nova como uma array, nesse caso, apenas com 1 índice.
const FilhaMaisNova = cliente.dependentes.filter (dependente => dependente.DataDeNascimento ==="04/01/2014");

console.log (FilhaMaisNova[0].nome);
