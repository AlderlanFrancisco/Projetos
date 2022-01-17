// Desafio - Lista de telefones: Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um número em algum cadastro.

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@gmail.com",
    fones: ["7958625369", "789562485"]
};
cliente.fones.forEach(fone => console.log(fone));