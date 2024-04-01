/*
Questão 9: Como você pode usar uma declaração if, else if, else para 
classificar um triângulo em equilátero, isósceles ou escaleno com base em 
seus lados em JavaScript? 
*/

let lado1 = 7;
let lado2 = 2;
let lado3 = 3;
 
 function classificarTriangulo (lado1, lado2, lado3,) {
    if( lado1 === lado2 && lado2 === lado3) {
        console.log("Equilátero")
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Isósceles");
} else {
    console.log("Escaleno")
} 
}
