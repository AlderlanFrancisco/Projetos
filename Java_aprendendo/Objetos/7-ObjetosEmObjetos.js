// Desafio - compondo um objeto: Adicionar dependentes para um dos clientes do banco, com nome, idade e parentesco;

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@gmail.com",
    fones: ["7958625369", "789562485"]
};

cliente.dependentes = {
    nome: "chico",
    DataDeNascimento: "10/07/1994",
    Parentesco: "tio"
}

console.log (cliente);

cliente.dependentes.nome ="francisco";
console.log (cliente);