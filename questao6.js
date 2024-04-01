/*
Questão 6: Como você pode usar uma declaração if, else if, else para 
determinar a estação do ano com base no mês em JavaScript?
*/

let mes = 4;

if( mes === 3 ||  mes === 12) {
    console.log("Estamos no verão");

} else if (mes === 4 || mes === 5) {
    console.log("Estamos no outono.");  

} else if (mes === 7 || mes === 8 || mes === 9) {
    console.log("Estamos no inverno meu biririco :)")
} else if (mes === 10){
    console.log("Estamos na primavera."); 
} else {
   console.log("Impossível determinar :(");
}