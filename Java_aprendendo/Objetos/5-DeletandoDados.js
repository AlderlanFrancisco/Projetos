const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   // para deletar, utilizaremos o operador delete

   delete objPersonagem.aliado;
   delete objPersonagem['status']; // Pode ser escríto das duas formas
   // O valor do retorno do operador delete é um booleano, ou seja, tue ou false para cada operação.
   // Caso tente remover uma propriedade q não existe no obj ele não retorna false. Importante observar isso;
   console.log(objPersonagem.aliado);
   console.log (objPersonagem.status);
   console.log (objPersonagem);
   
   const PeterParker = {
       nome: "Peter Parker",
       Personagem: "SpiderMan",
       Status: "Vivo",
       Grupo: "Vingadores"
   }
   console.log (PeterParker)