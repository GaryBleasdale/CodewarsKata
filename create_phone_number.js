// Create phone number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. "(123) 456-7890"



const createPhoneNumber = numbers => {
    numbers.splice(0,0,'(')
    numbers.splice(4,0,')')
    numbers.splice(5,0,' ')
    numbers.splice(9,0,'-')
    stringNumb = numbers.join('')
    return stringNumb
  }
  