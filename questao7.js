/*
Questão 7: Como você pode usar uma declaração if, else if, else para verificar 
se um número é múltiplo de 2, 3 ou 5 em JavaScript?
*/

let numero = 6;

if(numero % 2 == 0 ) {
    console.log("É um múltiplo de 2");
} else if (numero % 3 === 0) {
    console.log("É um múltiplo de 3");
} else if (numero % 5 === 0) {
    console.log("É um múltiplo de 5");
} else {
    console.log("Não existe");
}