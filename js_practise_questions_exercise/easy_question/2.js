// some basic aritmetic operators are +,-,%,*,/ . in this challange you will be given there
// prameters, num1 ,num2 , and an opertor ., Use the opertor on number 1 and 2. 

// function operate(num1, num2, operator) {
//     if (operator == '+'){
//         return num1+ num2;
//     }
//     else if(operator == '-') {
//         return num1 - num2
//     }
//     else if(operator == '*'){
//         return num1 * num2;
//     }
//     else if( operator == '/'){
//         return num1 / num2;
//     }
//     else {
//         return num1 % num2;
//     }

function evelop(num1,num2,op){
    return eval(num1 + op + num2);
}