/*
Questão 5: Como você pode usar uma declaração if, else if, else para verificar 
se um número é par, ímpar ou zero em JavaScript?
*/

let numero = 34;

if (numero % 2 === 0 && numero != 0 ) {
    console.log("É par")
} else if (numero % 2 !== 0) {
    console.log("É impar") 
} else {
    console.log("0")
}