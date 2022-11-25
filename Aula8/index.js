/*
Marcio Anderson tem 41 anos e pesa, 62kg
Tem 1.7 de altura e seu imc é de 
Marcio nasceu em 
*/ 

const nome = 'Marcio Anderson'
const sobrenone = 'Gomes'
const idade = 41;
const peso = 62;
const altura = 1.7;
let imc; // peso / (altura * altura)
let anonascimento; //

imc = (peso / (altura *altura))
anonascimento = (2022 - idade)

console.log(nome, 'tem', idade,'anos e pesa', peso,'kg')
console.log('Tem', altura, 'de altura e seu imc é de',imc)
console.log(`${nome} nasceu em ${anonascimento}`)

