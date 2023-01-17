const pessoa =  {
 nome: "Guilherme",
 idade: 18,
 casado:false,
 notas: [6, 8, 10],

 endereco: {
  rua: "x y z",
  numero: 100
 }
}
console.log(pessoa["nome"])
console.log(pessoa.nome)
console.log(pessoa["idade"])
console.log(pessoa.idade)
console.log(pessoa["casado"])
console.log(pessoa.casado)
console.log(pessoa["notas"][2])
console.log(pessoa.notas[2])
console.log(pessoa["endereco"]["numero"])
console.log(pessoa.endereco.rua)

const array = [pessoa, pessoa]
console.log(array)