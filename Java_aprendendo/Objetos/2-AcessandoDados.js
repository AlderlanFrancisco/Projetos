// Desafio - Printar infos (Acessar um objeto com informações de um cliente e exibir essas info no console);

const cliente1 = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@gmail.com"
};
// utiliza o .referencia para chamar um dado do objeto.
console.log (`Meu nome é ${cliente1.nome} e tenho ${cliente1.idade} anos`);
// Substring serve para exibir uma quantidade limitada de caracteres. Nesse caso ele só vai exibir os 3 primeiros digitos.
console.log (cliente1.cpf.substring(0, 3));