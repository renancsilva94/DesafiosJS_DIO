let lines = gets().split("\n");
let line = lines.shift().split(' ');

function tomadasUteis(){ //parseInt() para converter os números antes de realizar qualquer operação aritmética.

 let T1 = parseInt(line[0]);
 let T2 = parseInt(line[1]);
 let T3 = parseInt(line[2]);
 let T4 = parseInt(line[3]);

 let totalTomadas = T1 + T2 + T3 + T4 - 3;

 return totalTomadas;

}
console.log(tomadasUteis()); //escreve resultado da função