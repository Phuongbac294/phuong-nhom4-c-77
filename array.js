//1. Pocket Monster Lover
var Pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
  ];

Pokemon.splice((Pokemon.length -1), 1, "pikachu");
Pokemon.unshift("Meow");
// console.log(Pokemon);

//2. Outlier Number
function OutlierNumber(arr, index) {
   if (index === "chẵn") { return arr.filter((value) => {return value % 2 === 0}).toString() }
   else if (index === "lẻ") { return arr.filter(value => { return value % 2 !== 0}).toString() }
}

// var arr = [1, 3, 4, 5, 7]
// var arr1 = [2,4,5,6,8,10]
// console.log(OutlierNumber(arr, 'chẵn'));
// console.log(OutlierNumber(arr1, 'lẻ'));

//3. Return Types

var arr3 = [1, 2, 'hello', 'world', null, NaN, [1,2], {name: 'hello'}, true, false]
var newArr3 = arr3.map(item => typeof item)
// console.log(newArr3);

//4. Unique element
function difference(arr1, arr2) {
   var arr = arr2.concat(arr1)
   var newArr = [];
   for (let i = 0; i < arr.length; i++) {
     var check = newArr.includes(arr[i]);
     if (!check) {newArr.push(arr[i]);}
   }
   return newArr.sort((a,b) => a-b)
}
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));