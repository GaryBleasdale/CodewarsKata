function code(strng) {
  let binaryArray =[]
  while (strng>0){  
    let remainder = strng % 2
    binaryArray.push(remainder) 
    strng = Math.floor(strng/2)    
  }
  let binaryArr2 = +binaryArray.reverse().join("")
  return binaryArr2

}
// function decode(str) {
//   // your code
// }

console.log(code(133))



