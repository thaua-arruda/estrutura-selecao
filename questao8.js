/*
Questão 8: Como você pode usar uma declaração if, else if, else para 
determinar se uma idade corresponde a bebê, criança, adolescente, adulto ou 
idoso em JavaScript? 
*/

let idade = 13;

if (idade >=0 || idade <= 3) {
   console.log("É um bebê")
} else if (idade >= 4 || idade <=12) {
    console.log("É uma criança")
} else if (idade >= 13 || idade <= 17) {
    console.log("É um adolescente")
} else if (idade >=18 || idade <= 60) {
    console.log("É um adulto")
} else if (idade >= 61) {
    console.log("É um idoso");
} else {
    console.log("É pcg");
}