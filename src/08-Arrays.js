/*
Array.pop() //remove o ultimo elemento do array
Array.push(1000,"string") //adiciona elementos no array
*/

//let newArray = [10, 20, 30]

/*let i = 0
while (i < newArray.length){
  //console.log(i)
  //console.log(newArray[i])
  i++
}
*/
//for (let pos = 0; pos < newArray.length; pos++){
  //console.log(newArray[pos])

//for..in
//for(let pos in newArray){
  //console.log(pos)
  //console.log(newArray[pos])


//for..of
//for (let arr  of newArray){
 // console.log(arr)

const numbers = [10, 20, 30,]
let sum = 0
for (let num of numbers){
  sum = sum + num
}
const media = sum / numbers.length
console.log(media)
