//Find the odd int
//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

let findOdd = A => {
    let finalArr = A.map(function(e){
               let count = 0
               for (i=0;i<A.length;i++){
                   if (A[i]  == e ){
                       count++
                   }
               }
               if (count % 2 !=0){
                   return  e
               } else {
                   return null
               }
           })
       for (e of finalArr){
           if (typeof e == 'number'){
               return e
       }
     }
   }