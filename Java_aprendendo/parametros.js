// parâmetros de função (servem para as funções receberem os parametros para funcionarem corretamente)

// Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações 
// se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) 
// e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).

// ordem dos parâmetros

function nomeidade (nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log (nomeidade("chico", 27));
console.log (nomeidade(27, "chico")); // vai dar invertida a ordem.

function soma (num1, num2){
    return num1 + num2;
}

console.log (soma (4,2));

function multiplica (num1, num2){
    return num1*num2;
}
console.log (multiplica(soma(3,4), soma (3,3)));
console.log (multiplica(soma(3,4)));

function multiplicacomvalor (num1=1, num2=1){
    return num1*num2
}
console.log(multiplicacomvalor(soma(4,7))) // não vai dar erro, caso não tivesse definido o valor de 1, teria dado NaN

// É de boa prática não colocar muitos parâmetros para a função, caso ela esteja recebendo muitos 
//argumentos é provavel que você consiga quebrar ela para que seja mais fácil de entender e 
// dar manutenção depois;