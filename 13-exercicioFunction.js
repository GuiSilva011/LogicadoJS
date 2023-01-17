
function fatorial (n){
   let i = n
   let fatorial = 1
   while(n >= 2){
    fatorial = fatorial * n
    n--
   }
    return fatorial
}

const number = 2
const resposta = fatorial (number)
console.log(resposta)
