// Desafio - Lista de dependentes
// Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única,
// para análise de outros departamentos do banco.

const clientes = [
    {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@gmail.com",
    fones: ["7958625369", "789562485"],
    dependentes: 
        [
        {
        nome: "Francisco",
        DataDeNascimento: "10/07/1994",
        parentesco: "tio" },
        {
        nome: "Maria",
        DataDeNascimento: "25/02/1998",
        parentesco: "Prima"
        }
        ],
    Saldo: 100,
    depositar: function (valor){
        this.Saldo +=valor;
        // this é uma palavra reservada, faz referencia ao objeto, chama o saldo.
        }
    },
    {
    nome: "Julliana",
    idade: 32,
    cpf: "145678919",
    email: "julliana@gmail.com",
    fones: ["586256369", "78926525"],
    dependentes: 
        [
        {
        nome: "Sophia",
        DataDeNascimento: "14/09/2007",
        parentesco: "filha" },
        {
        nome: "Joana",
        DataDeNascimento: "26/25/2010",
        parentesco: "Filha"
        }
        ],
    Saldo: 530,
    depositar: function (valor){
        this.Saldo +=valor;
        // this é uma palavra reservada, faz referencia ao objeto, chama o saldo.
        }
    }
];
/// "..." é o operador de espelhamento, ele retira cada elemento dentro da array e vai colocando eles espalhados dentro de uma única array.
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];
console.log(listaDependentes);
// console.table mostra em forma de tabela
console.table (listaDependentes)
