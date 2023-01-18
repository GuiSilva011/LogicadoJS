const array = [1,5,10, 4, 2 ,6 ,7, 9,8]

// forEach: passa por todos os elementos do array
array.forEach((elemento, posicao) => {
   //console.log(`${elemento} - posicao ${posicao}`)
})


//find
const valor = array.find(elemento  => elemento === 10)

//findIndex: retorn a posição do elemento
const index = array.findIndex (elemento =>   elemento === 10)


//some: retorna true se pelo menos um numero satisfazer a condição
const some = array.some(elemento => elemento >= 1  )

// every: retorna true se todos os numeros respeitarem a condição 
const every = array.every(elemento => elemento >= 1 )


const newArray = [1, 2, 3, 4, 5,8,10]

 //Splice: corta o array, o primeiro parâmetro é o inicio e o segundo é a quantidade
console.log(newArray.splice(2, 2))

//map: alterar os valores dentro do array seguindo uma regra
console.log(newArray.map((elemento) => {
  return elemento * 2
}))


//filter: filtrar os elementos dentro do array

console.log(newArray.filter((elemento)  =>  {
  return elemento % 2 === 0
}))


//reduce: reduz o array para algum outro elemento

console.log(newArray.reduce((acumulado, elemento) => {
  return acumulado + elemento
}, 0))
