// return types 

// create a function that takes an array and returns the types of values (data typed) in a new array 

function arrayvaluesTypes(arr) {
    return arr.map(x=> typeof x)
}

console.log(arrayvaluesTypes([1,2,"erea",1.2]))