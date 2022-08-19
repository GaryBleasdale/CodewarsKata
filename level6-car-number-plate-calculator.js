// the alphabet: 'abcdefghijklmnopqrstuvwxyz'
function findTheNumberPlate(customerID){
  let alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let thirdLetterIndex=Math.floor(customerID/675324)
  let thirdLetter = alphabetArray[thirdLetterIndex]
  let secondLetterValue = customerID%675324
  let secondLetterIndex=Math.floor(secondLetterValue/25974)
  let secondLetter = alphabetArray[secondLetterIndex]
  let firstLetterValue = secondLetterValue%25974
  let firstLetterIndex=Math.floor(firstLetterValue/999)
  let firstLetter = alphabetArray[firstLetterIndex]
  let lastThreeDigits = firstLetterValue%999 + 1
  if (lastThreeDigits<10){
    lastThreeDigits = '0'+'0'+lastThreeDigits.toString()
  } else if (lastThreeDigits<100){
    lastThreeDigits = '0'+lastThreeDigits.toString()
  } else {
    lastThreeDigits = lastThreeDigits
  }

  return firstLetter + secondLetter + thirdLetter + (lastThreeDigits)
}


