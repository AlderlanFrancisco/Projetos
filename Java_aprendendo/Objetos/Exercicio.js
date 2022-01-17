// Há duas formas de acessar o valor de propriedade de um objeto no JavaScript e podemos usar qualquer uma delas. Vamos praticar? Crie um novo objeto colecionador, como fizemos no vídeo.

const colecionador = {
    Nome: "Francisco",
    Datanasc: "33",
    Localização: "Aracaju",
    Cartas: [
        {
        Nome: "Homem caveira",
        Raridade: "comum",
        NumeroReff: 25
        },
        {
        Nome: "Mago Negro",
        Raridade: "raro",
        NumeroReff: 2
        },
        {
        Nome: "Mago do Tempo",
        Raridade: "UltraRaro",
        NumeroReff: 43
        }
    ],
    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
    }
}

for (i=0; i<4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
}
console.log (colecionador.Nome);
console.log (colecionador["nome"])