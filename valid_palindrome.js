//Valid Palindrome
//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

let isPalindrome = s => {
    alphaArr =[]
    for (e of s){
    if (e.match(/^[0-9a-zA-Z]+$/)){
        alphaArr.push(e.toLowerCase())
        console.log(alphaArr)
      }
  }
    console.log(alphaArr.length)
    comparisonArrOne=[]
    comparisonArrTwo=[]
    for (i=0;i<alphaArr.length/2-1;i++){
        console.log(i)
       comparisonArrOne.push(alphaArr[i])
    }
    console.log(comparisonArrOne.length)
    for (i=Math.ceil(alphaArr.length/2);i<alphaArr.length;i++){
        console.log(i)
        comparisonArrTwo.push(alphaArr[i])
    }
    console.log(comparisonArrOne)
    console.log(comparisonArrTwo)
    let reversedComparisonArrTwo = comparisonArrTwo.reverse()
    console.log(reversedComparisonArrTwo)
    if(comparisonArrOne.join("") == reversedComparisonArrTwo.join("")){
        return true
    } else {
        return false
    }
  
}

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome(" ")) //true
console.log(isPalindrome("aa")) //false