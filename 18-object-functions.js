const person = {
  name: "Guilherme",
  lastName:"Alexandre"
}
  //object.keys(): Cria um array com todasa as chaves do objeto
  console.log(Object.keys(person))



  //object.values(): Cria um array com todos os valores do objeto
  console.log(Object.values(person))

  //object.entries(): Criar um array dentro de objetos e valores
  const array = console.log(Object.entries(livros))

const livros = {
  'livro A' : 19.90,
  'livro B' : 97.00,
  'Livro C' : 20.00
}
values = [19.90, 97.00, 20.00]
const values = Object.values(livros)
const sum = values.reduce((val, acc) => val + acc , 0 )
console.log (sum)