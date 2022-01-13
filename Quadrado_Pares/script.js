let lines = gets().split('\n');

var n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
	if (i%2 === 0){
	  console.log(`${i}^2 = ${i * i}`);
    }
  }
