function solution(string) {
  let arr = string.split('');
  let returnArr = []
  for (char of arr){
    char.match(/[A-Z]/g) ? returnArr.push(' ' + char) : returnArr.push(char)
  }
  return returnArr.join('')
}

// Instructions

// Complete the solution so that the function will break up camel casing, using a space between words.

