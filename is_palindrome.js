//Find the Smallest and Biggest Numbers

//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

const isPalindrome = (x) => {
    let xString = x.toString()
    let xArr = xString.split('')
    let validationArr =[]
    for (i=0;i<xArr.length;i++) {
     if (xArr[i] === xArr[xArr.length-i-1]){
        console.log(xArr[i])
        validationArr.push('ok')
     }
    }
    if (validationArr.length === xArr.length){
     return true
    } else {
     return false
    }
  }
  
  const isPalindrome2 = (x) => {
     let xString = x.toString()
     let xStringReversed = []
     for (char of xString){
      xStringReversed.unshift(char)
     }
     let comparor = xStringReversed.join('')
     return comparor === xString ? true : false
   }