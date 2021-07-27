// function lengthme(...params){
//     console.log(params)
//     return params.length;
// }

// console.log(lengthme(5,6,3,2))

// //>>>>>>>>>>>>>>>>>>>>>>>>
// function factorial(num){
//     if(num <= 0){
//         return 1;
//     }
//     else {
//         return num * factorial(num-1)
//     }
// }
// console.log(factorial(6));

// (function() {
//     console.log("I an anonymous")
// })();

// var food = (x,y,z) => {
//     return x+y+z;
// }
// console.log("food",food(10,20,30));

// var food = x => x+100 
// console.log("food : ",food(10))

// genrator function 

function* query() {
    const name = yield "Whats your name";
    const sport = yield "Whats you fav sport ";
    return `${name}  fav sport is ${sport}`;

}

const instance = query();
console.log(instance.next());
console.log(instance.next("shiv"));
console.log(instance.next("basketball"));