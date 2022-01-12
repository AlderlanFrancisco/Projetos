const nomes = ["Ana", "Ju", "Chico", "André"];
// o foreach apenas aceita funções, caso tente colocar um array, uma string ou number não vai funcionar;
nomes.forEach (imprimeNomes);

function imprimeNomes (nome){
    console.log(nome)
};