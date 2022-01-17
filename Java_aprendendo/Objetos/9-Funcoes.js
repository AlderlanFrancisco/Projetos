// Desafio - Fazendo depósitos
// Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancárias.

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@gmail.com",
    fones: ["7958625369", "789562485"],
    dependentes: [
        {
        nome: "Francisco",
        DataDeNascimento: "10/07/1994",
        Parentesco: "tio" },
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
}

console.log (cliente.Saldo);

cliente.depositar(30);

console.log (cliente.Saldo)