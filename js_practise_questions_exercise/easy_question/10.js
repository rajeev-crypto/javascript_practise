// Convert a number to base-2 

// create a function that returns a base-2 (binary) respresentation of a  base-10 )decimal 
// string number . to convert is simple (2) means base 2 and 10 means base 10 

// going from right to left the valye of the most right bit is 1l. now from that evety bit to the left will 
// be x2 the value. 

function binary(decimal) {

    return decimal.toString(2);

}
console.log(binary(198))