//1. Return the Index of the First Vowel
function firstVowel(string) {
    const newstring = string.toUpperCase();
    const arr = newstring.split("")
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "A" || arr[i] === "I" || arr[i] === "E" || arr[i] === "O" || arr[i] === "U") {
            return console.log(i);
        }
    }
}

// firstVowel("Characters in words")

//2. Count Instances of a Character in a String
function charCount(a, b) {
    let arr = b.split("")
    let newarr = arr.filter(item=> item === a)
    return console.log(newarr.length)
}
// charCount("c", "Chamber of secrets");
// charCount("b", "big fat bubble")

//3. How Many Vowels?
function countVowels(string) {
    const arr = string.toUpperCase().split("")
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "A" || arr[i] === "I" || arr[i] === "E" || arr[i] === "O" || arr[i] === "U") {
            count++
        }
    }
    return console.log(count);
}
// countVowels("Celebration")
// countVowels("Prediction")

//4. Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    if (num > 2) {
        let arr = [1,1];
        let result = []
        let i = 2;
        while ( i < num) {
            arr.push(i);
            let j = arr.length - 2
            i = i + arr[j];
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !==0) {
                result.push(arr[i])
            }
        }
        return console.log(result.reduce((a,b) => a + b));
    }
}
// sumFibs(4000000)

//5. Find the Longest Word in a String
function findLongestWordLength(str) {
    let arr = str.split(' ');
    arr.sort((a,b) => a.length - b.length);
    let result = arr[arr.length - 1].length;
    return console.log(`${arr[arr.length-1]} =  ${result}`);
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

//6. Panlindrome checker
function palindrome(str) {
    let kyhieu = [' ', '!', '*', '#', '$', '_', '@', '%']
    let arr = str.toUpperCase().split("")
    let newarr = arr.filter(item => kyhieu.every(e => e !== item))   
    let index = Math.floor(newarr.length / 2)
    let check = true
    for ( i = 0; i < index; i++ ) {
        if ( newarr[i] !== newarr[newarr.length - 1 - i] ) {return check = false}
    }
    return check;
}
// console.log(palindrome("2_A3* 3#A214"));
// console.log(palindrome("2_A3* 3#A2"));
// console.log(palindrome("RaceCar"));

//7. Reverse the Case
function reverseCase(str) {
    var arr = []
    for ( var index in str) {
        console.log(index, str.charCodeAt(index), str.charAt(index));
        if ( str.charCodeAt(index) < 65) {arr.push(str.charAt(index))}
        else if ( str.charCodeAt(index) < 97) {arr.push(str.charAt(index).toLowerCase());} 
        else {arr.push(str.charAt(index).toUpperCase());}
    }
    let result = arr.join("");
    return console.log(result);
}
// reverseCase("Happy Birthday")

//8. Max Consecutive Ones
function findMaxConsecutiveOnes(arr) {
    var number = []
    var num = 1;
    for ( var i =1 ;i < arr.length; i++ ) {
        if ( arr[i] === arr[i-1] ) { num = num +1}
            else { number.push(num); num = 1}
        if ( i === arr.length - 1 ){
             if ( arr[i] === arr[i-1] ) {number.push(num)}
            }
    }
    number.sort((a,b) => a-b);
    return console.log(number[number.length-1]);
}
// findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])

// 9. Even All the Way
function getOnlyEvens(arr)  {
    var result = [];
    let i = 0;
    while (i < arr.length) {
        if ((arr[i] % 2 )=== 0) {result.push(arr[i])}
        i = i + 2;
    }
    return console.log(result);
}

// getOnlyEvens([1, 3, 2, 6, 4, 8])
// getOnlyEvens([0, 1, 2, 3, 4])

//10. Transform into an Array with No Duplicates
function set(arr) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        if ( result.every(item => item !== arr[i])) {
            result.push(arr[i])
        }
    }
    return console.log(result);
}

// set([1, 3, 3, 5, 5])

//11. Find Numbers with Even Number of Digits
function findEvenNumberOfDigits(arr) {
    for (var i = 0; i < arr.length; i++) {
        if ( arr[i].toString().length % 2 === 0 ) {
            console.log(`${arr[i]} có  ${arr[i].toString().length} chữ số ( số chẵn)`);
        } else {console.log(`${arr[i]} có ${arr[i].toString().length} chữ số (số lẻ)` )}
    }
}
// findEvenNumberOfDigits([12, 234, 2, 6, 7896])

//12. Sock Merchant
let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
function sockMerchant(n, arr) {
    if (arr.length === n ) {
        
    } else { console.log(`dữ liệu đầu vào không đúng
    `)}
    return result;
}
