// Desafio - Adicionando Campos: Adicionar informações importantes que ainda estão faltando, como telefone e também seus valores;

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@gmail.com"
};

console.log(cliente);
// caso passe .chave que não exista, o javascript cria uma chave e salva esse valor no objeto;
cliente.fone = "5553995864525";

console.log (cliente);

// caso já exista e coloque um novo valor, o mesmo será alterado

cliente.fone = "5553998652536"
console.log (cliente);