//Stairs problem
//Create a function that given an integer, it console.logs a step shaped stair with 'n'levels using the # character.

const stairs =(n)=>{
    let arrayOfIntegersBetween1andN = []
    for (i=1; i<=n; i++){
        arrayOfIntegersBetween1andN.push(i)
    }
    arrayOfHashes = []
    for (e of arrayOfIntegersBetween1andN){
        let currentHash =[]
        for (i=1; i<=e; i++){
            currentHash.push('#')
        }
        arrayOfHashes.push(currentHash)
        arrayOfHashes.push('\n')
    }
    let joinedArray = arrayOfHashes.join()
    return joinedArray.replaceAll(',','')
}

console.log(stairs(3))
