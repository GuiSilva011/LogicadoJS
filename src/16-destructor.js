 const pessoa = {
   nome: "Guilherme",
   sobrenome: "Alexandre",
   idade: 18,
   senha: "123"
 }

const { nome, idade, sobrenome } = pessoa


//const pessoaComMaisDados = {
 // ...pessoa,
  //idade: 20,
 // senha: "432"}
//console.log(pessoaComMaisDados)
  

/*
const array = [1,2,3,4]
const [a,b] = array
console.log(a)
console.log(b)
*/

const array = [10,20,3,4]
const [a,b] = array

const newArray = [0, ...array, 5]
console.log(newArray)