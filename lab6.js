//1
function reverse(word){
    let arrayWord = [];
    arrayWord = word.split('');
    let reverseWord;
    let letters = [];
    let newWord = ' ';

    newWord = arrayWord.reverse();
    newWord = newWord.join('');

    return newWord;
}

let wordtoreverse = 'string';
let rev = reverse(wordtoreverse);
console.log(rev);

 //2
let newInput = 'javacript is awesome';
let inputRefactor = newInput.substring(0, 3);
console.log(inputRefactor);

//3
let x = 21;
let ok = false;
if(x % 3 === 0 && x % 7 === 0) {
    ok  = true;
    console.log(ok);
} else {
    console.log(ok)
}

//4
let checkIfNumerical = 'word';
if(isNaN(checkIfNumerical)) {
    console.log('This variable is not a number');
} else {
    console.log('This variable is a number')
}

//5
let arr = [1,2,3,4,5];
let sum = 0;

for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(`Sum is ${sum}`);

//6
function checkIfHasProprety(arg, prop) {
        if(arg.hasOwnProperty(prop)) {
            return true;
        } else return false;
}
console.log(checkIfHasProprety({red: "red", green: "green"}, "green"));
