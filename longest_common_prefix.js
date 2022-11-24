//Longest Common Prefix
//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

const longestCommonPrefix = strs => {  

    finalArray=[]
        for (i=0; i<strs[0].length;i++) {
            let array1=[]
            for (e of strs){
                array1.push(e[i])
            }    
    
            if (array1.every( val => val === array1[0] )===true ){
                finalArray.push(array1)
            } else {
                break
            }
            
        }
    
    return finalArray.length > 0 ? strs[0].slice(0,[finalArray.length]) : ""    
    
    };
    
    console.log(longestCommonPrefix(['cir','car']))