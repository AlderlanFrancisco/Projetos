// Desafio - Puxando relatório
// Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível
// e de forma automatizada para fornecer a outros departamentos do banco.

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

let relatorio = "";
//   cria a let, para cada uma informação do cliente
for (let info in cliente){
    // esses retornos de object, function, number, etc em forma de string é do javascript.
    if (typeof cliente[info] === "object" || typeof cliente [info] === "function" ) {
        continue
    }
    else {
        relatorio += ` 
        ${info} ==> ${cliente[info]}
        `;   
    }
}

console.log (relatorio);

const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
   }

   let dados = "";
for (let info in paciente) {
if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
  continue
} else {
 dados += `${info} ==> ${paciente[info]}
  `}
};
console.log (dados)
