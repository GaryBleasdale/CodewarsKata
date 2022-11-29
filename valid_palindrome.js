//Valid Palindrome
//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

let isPalindrome = s => {
    alphaArr =[]
    for (e of s){
        if (e.match(/^[0-9a-zA-Z]+$/)){
            alphaArr.push(e.toLowerCase())
            
        }
    }
    comparisonArrOne=[]
    comparisonArrTwo=[]
    if (alphaArr.length <3){
        if (alphaArr[alphaArr.length-1]==alphaArr[0]){
            return true
        } else {   
            return false
        }
    } else if (alphaArr.length%2 == 0) {
        for (i=0;i<alphaArr.length/2;i++){
           comparisonArrOne.push(alphaArr[i])
        }
        for (i=Math.floor(alphaArr.length/2);i<alphaArr.length;i++){
            comparisonArrTwo.push(alphaArr[i])
        }
        let reversedComparisonArrTwo = comparisonArrTwo.reverse()

        if(comparisonArrOne.join("") == reversedComparisonArrTwo.join("")){
            return true
        } else {
            return false
        }
    } else {  
        for (i=0;i<alphaArr.length/2-1;i++){
        comparisonArrOne.push(alphaArr[i])
        }
        for (i=Math.ceil(alphaArr.length/2);i<alphaArr.length;i++){
            comparisonArrTwo.push(alphaArr[i])
        }
        let reversedComparisonArrTwo = comparisonArrTwo.reverse()
        console.log(reversedComparisonArrTwo)
        if(comparisonArrOne.join("") == reversedComparisonArrTwo.join("")){
            return true
        } else {
            return false
        }
    }
  
}


// The code above works - however, for extremely long strings, it will require excess use of computational power and would crash most computers.  A good challenge would be to refactor in order to be able to make it more efficient.