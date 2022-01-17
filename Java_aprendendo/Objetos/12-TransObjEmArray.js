// Desafio - Oferta de seguro;
// Percorrer um objeto, verificar se existe a chave "dependentes" e, caso exista, enviar uma msg de oferta de seguro;

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

// object.keys pega todas as chaves do objeto que passou como parâmetro e cria uma array;

function oferecerseguro(obj){
    var propsClientes = Object.keys (obj);
    // includes faz uma varredura na array em busca de uma chave, sempre retorna true ou false.
    if(propsClientes.includes("dependentes")){
        console.log (`Oferta de seguro de vida para ${obj.nome}`)
    }
}
//object.values traz os valores de um objeto

console.log(Object.values(cliente));
// object.entries que traz uma array com várias arrays dentro dele,
console.log(Object.entries(cliente))

//São os 3 modos de trazer os objetos para arrays.

oferecerseguro(cliente);