// Article - Generator Functions and Anonymous functions
// This is an article from https://tharunshiv.com

// In this Article (Click to skip to that topic):

// Generator Functions

// Recap: Functions

// How does it work?

// 4 ways to use Generator Functions with Examples

// Advantages of using Generator functions



// What are Generator Functions?
// Ever imagined what would happen if a function had an infinite input or output to deal with? That is exactly what you can handle with Generator functions.

// A Generator function returns us an iterator, which can be used to stop the function in the middle, do something, and then resume it whenever. A normal function starts executing and returns when the function completes, but a Generator function can be stopped any number of times and resumed later.



// Recap: What is a Function?
// A function is a block of code that can be called any number of times to get the functionality done and sometimes the result returned.



// How does it Work?
// Calling a generator function does not execute the function completely as soon as it's called. It will return an iterator object that can be used to use the function.

// So this function can be executed part by part, where these parts are decided by the yield expression. ( Code explanation below, don’t worry ).

// To execute these parts, the .next() method is used on the iterator. When the .next() method is called, the function resumes execution until the next yield is found, or the function completes or a return statement is executed.

// Everytime you execute the .next() method, the generator function returns you with an object that looks like this { value: ‘some-value’, done: false }

// The value here is the value sent by the yield and the doneindicates if the generator function has run completely.



// Examples


// 1. Basic usage of Generator Function
// Generator functions are defined using the * asterisk either immediately after the function keyword or right before the function name. The below example creates an infinite number of natural numbers, which can be used when needed.

// function* naturalNumbers() {
//     let number=1;
//     while (true)
//         yield number++;
// }
 
// var naturalNumberIterator = naturalNumbers();
 
// console.log(naturalNumberIterator.next().value);
// console.log(naturalNumberIterator.next().value);
// console.log(naturalNumberIterator.next().value);
// console.log(naturalNumberIterator.next().value);
// The output for the above code:

// 1
// 2
// 3
// 4


// 2. Calling Generator within a Generator (wooo… inception)
// We can use the yield* to call another generator from within a generator. ( Crazy right? )

// function *anotherGenerator(name) {
//     yield `From Another Generator, ${name}`
// }
 
// function *myGenerator(name) {
//     yield `Hi ${name}`;
//     yield* anotherGenerator(name)
//     yield 'Bye!'
// }
 
// let gen = myGenerator('shiv')
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// The output for the above code:

// Hi shiv
// From Another Generator, shiv
// Bye!


// 3. Passing arguments into Generators
// Wonder what else the Generators could do? What if I told you that you can pass arguments into Generators? Again, just pass the parameters in the .next() and use it in the yield keyword inside the Generator function. Below is a demonstrated example of it.

// function *myGenerator() {
//     console.log('Hey ', yield)
//     console.log('Are you ',yield)
// }
 
// let gen = myGenerator()
 
// gen.next()
// gen.next('tharun')
// gen.next('shiv')
// Note that, you have to call .next() method once in the beginning, which will execute the function until the yield keyword. The next .next('tharun') will send the 'tharun' to the Generator and is replaced in place of yield. Below is the output of the program.

// Hey tharun
// Are you shiv


// 4. Once returned, no more yields
// Wonder what would happen if you execute a return statement inside a generator? Well, I have demonstrated just that in the below example. It returns from the generator function without providing access to any of the yield below.

// function* yieldAndReturn() {
// yield "Y";
// return "R";
// yield "unreachable";
// }
 
// var gen = yieldAndReturn()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// The output is given below. You cannot yield the “unreachable”.

// {"value":"Y","done":false}
// {"value":"R","done":true}
// {"done":true}


// Advantages of using Generators? Why Should you use them?
// 1. Lazy Evaluation - Run only when you need
// Say there is an Infinite Stream of data, we cannot spend our whole life evaluating that data. Hence we can use Generator function to evaluate as and when required.

// 2. Memory Efficient
// As the Lazy Evaluation method is used, only those data and those computations that are necessary, are used.