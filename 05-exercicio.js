const limite = 50
const ValorDaMulta = 4
const pesoDePeixes = 51

let multa 
let excesso 

if (pesoDePeixes > limite){
  excesso = pesoDePeixes - limite
}
else {
  excesso = 0
}
multa = excesso * pesoDePeixes

console.log("excesso", excesso)
console.log ("Valor Da Multa R$", multa)