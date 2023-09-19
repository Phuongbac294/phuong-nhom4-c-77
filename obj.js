//1. Pocket Monster Lover 2
let pokemon = {
    name: "Pikachu",
    stats: {
        hp: 100,
        level: 50,
        attack: 86,
        spattack: 150,
        speed: 5000000000,
        belongTo: "Red"


    },
}
let pikachuSkill = ["Bite", "Thunder Bolt", "Volt Tackle", "Thunderrrr!"];

pokemon.stats.speed = 60
pokemon.pikachuSkill = [pikachuSkill]
// console.log(pokemon);

//2. Gaming
var inventory = {
    'gold':500,
    'pouch': ['flint', 'twine', 'gemstone'],
    'backpack': ['xylophone', 'dagger', 'bedroll', 'bread loaf']
}

inventory.pocket = ["seashell", "strange berry", "lint"]
inventory.backpack.splice(1,1)
inventory.gold = inventory.gold + 50;
delete inventory.pouch;
// console.log(inventory);

//3. Profile Lookup
// Setup
let contacts = [{
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
},
{
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
},
{
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
},
{
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
}
];

function lookUpProfile(name, prop) {
    var user = contacts.find(item => item.firstName === name)
if (user !== undefined) {
    for (var key in user) {
        if ( key === prop) {
            return user[key];
        }
    } return 'No such property'
} else {return "No such contact"}

// Only change code above this line
}

// console.log(lookUpProfile("Akira", "likes"));

//4. Get Sum of People's Budget
function getBudgets(arr) {
    var total = arr.reduce((a,b) => a + b.budget, 0)
    return console.log(total);
}

var getBudget1 = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]
var getBudget2=[
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]

// getBudgets(getBudget1);
// getBudgets(getBudget2);

//5. Distance Between Two Points
function getDistance(a, b) {
    var x = a.x - b.x;
    var y = a.y - b.y;
    var z = Math.sqrt(x * x + y * y)
    return console.log(z.toFixed(3));
}

// getDistance({x: -2, y: 1}, {x: 4, y: 3});
// getDistance({x: 0, y: 0}, {x: 1, y: 1});
// getDistance({x: 10, y: -5}, {x: 8, y: 16})

//6. Printer Levels

function inkLevels(a) {
    var arr = []
    for (var key in a) { 
        arr.push({[key]: key, value: a[key]})
    }
    arr.sort((a,b) => a.value - b.value)
    return console.log(arr[0]);
}
var inkLevels1 = {
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
  }
  
var inkLevels2 = {
    "cyan": 432,
    "magenta": 543,
    "yellow": 777
  } 
  
var inkLevels3 = {
    "cyan": 700,
    "magenta": 700,
    "yellow": 0
  }

//   inkLevels(inkLevels3);
//   inkLevels(inkLevels2);
//   inkLevels(inkLevels1);

//7. International Greetings
function greetings(name) {
    var arr = [];
    for ( var key in GUEST_LIST) {
        arr.push({name: key, value: GUEST_LIST[key]});
    }
    var user = arr.find(item => item.name === name)
    if (user !== undefined) {
        return console.log(`Chào! Tôi là ${user.name}, tôi dến từ ${user.value}`);
    }
    return console.log('Chào! Tôi là khách');
}

const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
  }

//   greetings('Randy')

//8. Return the Objects Keys and Values
function keysAndValues(obj) {
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    var arr = [keys, values];
    return console.log(arr);
}

// keysAndValues({ a: 1, b: 2, c: 3 })
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })

//9. Online Shopping
function freeShipping(obj) {
    var values = Object.values(obj);
    var total = values.reduce((a,b)=>a+b, 0);
    if (total > 50) {
        return console.log(true);
    } else { return console.log(false);}
}

// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 })
// freeShipping({ "Flatscreen TV": 399.99 })
// freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })

