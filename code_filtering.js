const toFilter = [3, -9, `12`, 6, 9, 102, 8, null, undefined, 0];

function filtering(arr =[]) {

    const result = []
    const resultNumber = []
    const resultNull = []
    const resultString = []
    const resultUndefined = []
    

    if(!Array.isArray(arr)){
    return `It is not an array`
    }
    else console.log("array:",arr)

    
    for(let i = 0; i < arr.length; i++)
    {
        if (arr[i] === undefined) 
        {
            resultUndefined.push(arr[i])
        }
        if(typeof arr[i] === "number")
        {
            result.push(arr[i])
            resultNumber.push(arr[i])
        }
    
        if (typeof arr[i] === "string" && !isNaN(parseFloat(arr[i]))) 
        {
            result.push(parseFloat(arr[i]))
            resultNumber.push(parseFloat(arr[i]))
        }
        if (typeof arr[i] === "string" && isNaN(parseFloat(arr[i]))) 
        {
            resultString.push(arr[i])
        }
        if (arr[i] === null) 
        {
            resultNull.push(arr[i])
        }
    }

    //return result
    return ["1) numbers:",resultNumber, 
        "2) string:" ,resultString, 
        "3) null:", resultNull, 
        "4) undefined:", resultUndefined]
}
const a = filtering(toFilter)

console.log(`filtering:`,a)
