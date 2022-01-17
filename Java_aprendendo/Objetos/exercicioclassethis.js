    const pessoa = 
    {
        nome: "Ana",
        Email: "ana@gmail.com",
        imprimenome: function()
            {
                console.log (`${pessoa.nome}`);
            }
    }
    pessoa.imprimenome()

    const pessoa2 = 
    {
        nome: "Ana",
        Email: "ana@gmail.com",
        imprimenome: function()
            {
                console.log (`${this.nome}`);
            },
        imprimeInfo: function()
        {
            console.log(`nome: ${this.nome}, email ${this.Email}`);
        }
    }
    pessoa2.imprimeInfo ()

    // é possível manipular os valores de this e o JavaScript tem três métodos para isso:
    //Call (): Permite que a função seja chamada com parâmetors e valor de this específicos.
function imprimeNomeEmail(tipoCliente){
 console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}

const cliente1 = {
 nome: "Carlos",
 email: "c@email.com"
}

const cliente2 = {
 nome: "Fred",
 email: "f@email.com"
}
imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

//Apply (): Funciona de forma semelhante ao call, porém recebe os argumentos em uma array ao invés de separados;

function imprimeNomeEmail2(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
   const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
   const clienteEstudante = ["cliente estudante", "Fortaleza"]
   
   imprimeNomeEmail2.apply(cliente1, clienteEspecial)
   // cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com
   
   imprimeNomeEmail2.apply(cliente2, clienteEstudante)
   // cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

   //blind() "prende" ou "liga" uma função ao contexto de um objeto.

   const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

   const personagemGenerico = personagem.apresentar
   
console.log(personagemGenerico())
//a personagem é undefined

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia