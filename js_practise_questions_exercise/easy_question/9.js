// Matchstick house 
// this challange will help you interpret mathematical realtionship both algebrically and geomatrically 
// create a function that takes a number as an argument and returns the number of matchstick 

function matchHouse(step){
    return step === 0 ? 0 : 5 *step + 1;
}

console.log(matchHouse(2))