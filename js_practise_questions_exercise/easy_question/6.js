// Let's sort the array ! 

// create a function that takes an array of numbers arr a string str and return an array of numbers 
// as per the following rules. 

// "Asc" returns a sorted array in ascending order
// "Dsc" returns a sorted array in descending order 
// "None" returns an array without any modification

const ascDesNone = (arr,str) => 
str == 'Asc' ? arr.sort((a,b) => a-b): 
str == 'Des' ? arr.sort((a,b) => b-a):
arr 