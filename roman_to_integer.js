// Roman to Integer
// given a roman numeral, turn it into an integer

const romanToInt = (s)=>{
    let finalArr =[]
    for (i=0; i<s.length;i++){

      switch(s[i]){
        case 'I':
          if (s[i+1]== 'V' || s[i+1]== 'X'){
            continue
          } else {
            finalArr.push(1)
          }
          break;
        case 'V':
            if (s[i-1]== 'I'){
                finalArr.push(4)
              } else {
                finalArr.push(5)
              }
            break;
        case 'X':
            if (s[i+1]== 'L' || s[i+1]== 'C'){
                continue
              } else if (s[i-1]=='I'){
                finalArr.push(9)
              } 
              else {
                finalArr.push(10)
              }
              break;
        case 'L':
            if (s[i-1]== 'X' ){
                finalArr.push(40)
              } else {
                finalArr.push(50)
              }
              break;
        case 'C':
            if (s[i+1]== 'D' || s[i+1]== 'M'){
                continue
              } 
            else if (s[i-1] == 'X'){
                console.log(s[i-1])
                finalArr.push(90)
            } else {
                finalArr.push(100)
              }
              break;
        case 'D':
            if (s[i-1]== 'C' ){
                finalArr.push(400)
              } else {
                finalArr.push(500)
              }
              break;
        case 'M':   
        if (s[i-1]== 'C' ){
            finalArr.push(900)
          } else {
            finalArr.push(1000)
          }
          break;
      }
    }
    finalSum = 0
    for (i=0;i<finalArr.length;i++){
      finalSum += finalArr[i]
    }
    return finalSum
}



console.log(romanToInt('DCXXI'))