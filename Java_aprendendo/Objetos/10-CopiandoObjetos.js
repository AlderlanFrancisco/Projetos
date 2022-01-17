const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   // caso fosse const objPersonagem2 = objPersonage, ele apenas iria referenciar, cada mudança feita em um, alteraria o outro.
   // para copiar o objeto e deixa-lo totalmente independente é necessário usar o object.create ()
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento