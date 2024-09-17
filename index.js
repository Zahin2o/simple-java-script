//Number1.
  let result = calculateDifference(10, 4);
function calculateDifference(a, b) {
    return a - b;
}
console.log(result);


//Number 2
let result = isOdd(5);
function isOdd(num) {
    return num % 2 !== 0;
}
console.log(result);


 // Number 3 
 let numbers = [5, 3, 9, 1, 6];
 function findMin(arr) {
    
    return Math.min(...arr);
}
console.log(findMin(numbers));


//Number 4
let arr = [ 2,5,7,10,6]

function filterEvenNumbers(arr) {
    return arr.filter(function(num) {
        return num % 2 === 0;
    });
}
console.log(filterEvenNumbers(arr));


// Number 5
let num = [1,2,3,4,5,6,7];
function sortArrayDescending(arr){
    return arr.slice().sort(function(a,b){
        return b-a;
    })
    
}
console.log(sortArrayDescending(num));


// Number 6
let st= ("MY NAME IS ZAHIN FAISAL");
let index = 0;
function lowercaseFirstLetter(str){
    return str.slice(0,index)+str.charAt(index).toLowerCase()+str.slice(index+1);

    }
    

console.log(lowercaseFirstLetter(st,index));



// Number 7
let st= ("MY NAME IS ZAHIN FAISAL");

function countVowels(str){
    const vowels = "aeiouAEIOU"
    return str.split('').filter(char => vowels.includes(char)).length;
    
}
console.log(countVowels(st));


// Number 8
let numbers = [5, 10, 15, 20];

function findAverage(arr) {
    
    let sum = arr.reduce(function(total, num) {
        return total + num;
    }, 0);

    return sum / arr.length;
}


console.log(findAverage(numbers));  