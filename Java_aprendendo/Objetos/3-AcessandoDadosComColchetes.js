//Desafio - Acessar chaves. Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerado pelo sistema e printar o resultado na tela;

const cliente1 = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@gmail.com"
};
            //  	0       1       2       3
const chaves =  ["nome", "idade", "cpf", "email"];
// chama o bojeto e dentro dela informa a array e a posição do item que deve ser utilizado;
// console.log(cliente1[chaves[0]])

chaves.forEach(info => console.log(cliente1[info]));