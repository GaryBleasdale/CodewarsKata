// Optimal Taxi Fare


// The student needs to get on a train that leaves from the station D kilometres away in T minutes.

// She can get a taxi that drives at V1 km/h for the price of R €/km or she can walk at V2 km/h for free.

// A correct solution will be a function that returns the minimum price she needs to pay the taxi driver or the string "Won't make it!".

// All the inputs will be positive integers, the output has to be a string containing a number with two decimal places - or "Won't make it!" if that is the case.

// It won't take her any time to get on the taxi or the train.

// In non-trivial cases you need to combine walking and riding the taxi so that she makes it, but pays as little as possible.



const calculateOptimalFare = (D, T, V1, R, V2) => {
    let necessaryAverageKMH = D*(60/T)
    let maxFare = parseFloat(R * D).toFixed(2)
    console.log(maxFare)
    console.log(necessaryAverageKMH)
    for (let i=maxFare; i>=0; i-=0.01){
      let currentFare 
    }
    
    let currentAverageKMH 
    
      
    
    }
    
    const Test = require('@codewars/test-compat');
    describe("Tests", () => {
      it("test", () => {
    Test.assertEquals(calculateOptimalFare(8, 10, 90, 2, 6), "15.00");
    Test.assertEquals(calculateOptimalFare(100, 10, 500, 5, 25), "Won't make it!");
      });
    });