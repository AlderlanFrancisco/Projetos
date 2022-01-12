let arrayNums = [1, 2, 3, 4];

let arrayNumsMultiplicados = arrayNums.map (num => num*10);

console.log (arrayNumsMultiplicados);

function multiplicaarray(num) {
    return num*10;
}
let test = arrayNums.map (multiplicaarray);
console.log (test);