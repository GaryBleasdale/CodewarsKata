function racePodium(blocks) {
  let firstPlace = 3;
  let secondPlace = 2;
  let thirdPlace = 1;
  let justRanFirst = false;
  let justRanSecond = false;
  let justRanThird = true;
  for (let i=6; i<blocks;i++){
    if (justRanFirst===true){
      secondPlace +=1
      justRanFirst = false
      justRanSecond = true  
    } else if (justRanSecond === true){
      thirdPlace +=1
      justRanSecond = false
      justRanThird = true
    } else if (justRanThird === true){
      firstPlace +=1
      justRanThird = false
      justRanFirst = true
    }
    
  }
  return [secondPlace, firstPlace, thirdPlace]
}

console.log(racePodium(100000))
