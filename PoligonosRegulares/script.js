let lines = gets().split("\n");
let line = lines.shift().split(' ');

function perimetro(){

  let N = parseInt(line[0]); //numero de lados
  let L = parseInt(line[1]); //comprimento

  resultado = N * L;
  return resultado;
}

console.log(perimetro());