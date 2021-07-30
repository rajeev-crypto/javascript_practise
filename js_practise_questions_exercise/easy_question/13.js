// IS it true 

// In this challange you will be given a realtions between two number , writen as string 
// Write a function that determines if the realtions is true or false 

function istrue(realtion) {
     return eval(realtion.replace('=','==='))
}