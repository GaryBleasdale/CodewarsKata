//Find the Smallest and Biggest Numbers

//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

const minMax = (arr) => {
    arr.sort((a,b)=>{return a-b})
    console.log(arr)
    let maxIndex = arr.length-1
    let min = parseFloat(arr.slice(0,1))
    let max = parseFloat(arr.slice(maxIndex))
    return [min, max]
 }
 
 
 console.log(minMax([-0.473, -0.6834, -0.1287, 0.5632]))
 
 
 
 
 