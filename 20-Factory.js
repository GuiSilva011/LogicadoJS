function Pessoa (nome, sobrenome) {
 let pessoa = {
 nome,
 sobrenome
 }
 pessoa.nomeCompleto = `${nome} ${sobrenome} ` 
 return pessoa

}

const pessoaA = Pessoa ("Guilherme", "Silva")
const pessoaB = Pessoa ("Gustavo", "Alexandre")

console.log(pessoaA, pessoaB)
console.log(nomePessoaA, nomePessoaB)