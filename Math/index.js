let num1 = 9.40;
// let num2= Math.floor(num1); //arredondamento para baixo
// let num2= Math.ceil(num1); //arredondamento para cima
let num2= Math.round(num1); //a partir de .5 arredonda pra cima e .49 arredonda pra baixo

// console.log(num2);
// console.log(Math.max(1,2,3,4,5,6,7,8,500,510,550,668,23569,))
// console.log(Math.min(10,20,30,40,50,60,70,80,500,510,550,668,23569,))
// console.log(Math.random()); // gera números aleatório
const aleatorio = Math.round(Math.random() * (10-5) + 5);
console.log(aleatorio)