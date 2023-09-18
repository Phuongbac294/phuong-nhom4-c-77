//1. Special two-digit-number
// A special two-digit number is a number such that when the sum of the digits of the number is added to the product of its digits, the result is equal to the original two-digit number.
function  special2digits(a) {
    if (typeof a === 'number') {
        if ( a % 1 === 0) {
            if ( a > 9 && a < 100){
                var check = Math.floor(a / 10) + (a % 10) + ((Math.floor(a / 10) * (a % 10)))
                if ( check === a ) { return true}
                else { return false}
            } else { return `${a} không phải là 1 số có 2 chữ số` }
        } else { return `${a} là 1 số thập phân `}

    } else { return `${a} không phải là 1 số tự nhiên `}
}

// console.log(special2digits(19));
// console.log(special2digits(20));
// console.log(special2digits(9));
// console.log(special2digits(109));

//2. Narcissistic numbers
//By definition, a narcissistic number is full of itself. A narcissistic number is the sum of its own digits each raised to the power of the number of digits. 153 = 1^3 + 5^3 + 3^3 = 153

function  isNarcissistic(a) {
    if (typeof a === 'number') {
        if ( a % 1 === 0) {
            if ( a > 99 && a < 1000){
                var check = Math.pow(Math.floor(a / 100),3) + Math.pow(Math.floor((a % 100)  /10), 3) + Math.pow((a % 10), 3);
                if ( check === a ) { return true}
                else { return false}
            } else { return `${a} không phải là 1 số có 3 chữ số` }
        } else { return `${a} là 1 số thập phân `}
    } else { return `${a} không phải là 1 số tự nhiên mà là ${typeof a}`}
}

// console.log(isNarcissistic(153));
// console.log(isNarcissistic(156));
// console.log(isNarcissistic(98));
// console.log(isNarcissistic(1530));
// console.log(isNarcissistic("ghạ"));

//3. Area and perimetter finder
function areaPerimetter(a, b, text) {
    if ( typeof a === "number" && typeof b === "number") {
        switch (text) {
            case "area": 
                return a * b;
                break;
            case "perimetter":
                return (a + b) * 2;
                break;
            default: return "khai báo yêu cầu không đúng"
        }
    } else { return ` dữ liệu nhập vào không đúng : a là 1 ${typeof a}, b là 1 ${typeof b}`}
}

// console.log(areaPerimetter(2, 3, "area") );
// console.log(areaPerimetter(2, 3, "perimetter") );
// console.log(areaPerimetter(2, 'a', "area") );
// console.log(areaPerimetter(2, 3, "area2") );

//6. BMI Calculator
function bmi(cm, kg) {
    var bmi = (kg / (cm * 2 * 0.01)).toFixed(1)
    if (bmi <= 18.5) { return "Gầy"}
     else if (bmi <= 24.9) { return "Bình thường"}
        else if (bmi <= 29.9) { return "Tăng cân"}
            else if (bmi <= 34.9) { return "Béo phì độ 1"}
                else if (bmi <= 39.9) { return "Béo phì dộ 2"}
                    else { return "Béo phì độ 3"}
}

// console.log(bmi(170, 65));
// console.log(bmi(180, 55));
// console.log(bmi(140, 120));

//7.Last Digit Ultimate
function lastDig( a, b, c) {
    if ( typeof a === "number" && typeof b === "number" && typeof c === "number") {
        var check = ((a % 10) * (b % 10) % 10)
        var digit = c % 10
        if ( check === digit ) { return true}
        else { return false}
    } else { return 'dữ liệu vào không đúng'}
}

// console.log(lastDig(25, 21, 125));
// console.log(lastDig(55, 226, 5190));
// console.log(lastDig(12, 215, 2142));
// console.log(lastDig(25, 21, "a"));


//8. Zodiac
function zodiac(a) {
    var date = new Date()
    var year = date.getFullYear()
    var brithday = year - a
    var zodiac = (brithday - 1900) % 12;
    switch (zodiac){
        case 0:
            return "Mouse";
            break;
        case 1:
            return "Buffalo";
            break;
        case 2:
            return "Tiger";
            break;
        case 3:
            return "Cat";
            break;
        case 4:
            return "Dragon";
            break;
        case 5:
            return "Snake";
            break;
        case 6:
            return "Goat";
            break;
        case 7:
            return "Horse";
            break;
        case 8:
            return "Chicken";
            break;
        case 9:
            return "Monkey";
            break;
        case 10:
            return "Dog";
            break;
        case 11:
            return "piggy";
            break;
    }
}

// console.log(zodiac(28));

//9. Quadratic expression Calculate - phương trình bậc 2
function Quadratic(a, b, c) {
   
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        if (a !== 0) {
            var deta = Math.pow(b,2) - (4 * a * c)
            if (deta < 0){ return "Phương trình vô nghiệm"}
                else if (deta === 0) { return - b / (2 * a)}
                    else {
                        var x1 = (  - b + Math.sqrt(deta)) / (2 * a)
                        var x2 =( - b - Math.sqrt(deta)) / (2 * a)
                        return `${x1} and ${x2}`
                    }
        } else { var x = ( - c) / b; return `${x}`}
    } else { return "Khai báo sai dữ kiện"}
}

// console.log(Quadratic(1, -2, 1));
// console.log(Quadratic(1, -5, 6));
// console.log(Quadratic(1, 5, 6));
// console.log(Quadratic(3, 2, 5));
// console.log(Quadratic(3, 2, "ưe"));

//2.1. Right-angled triangle
function rightAngledTriangle(a) {
    var x = "";
    for (var i = 1 ; i <= a ; i++) {
        x = x + "#"
        console.log(x);
    }
}

// rightAngledTriangle(4)

function leftAngledTriangle(a) {
    var x = "";   
    for (var i = 1 ; i <= a ; i++) {
        x = x + "#"
        var  y = " ";
        for (j = i+1; j <= a ; j++) { y = y + " "}
        console.log(`${y}${x}`);
    }
}

// leftAngledTriangle(6)

//3. Fizz Buzz
function fizzBuzz(n, a, b) {
    var arr = [];
    for (var i = 1 ; i <= n ; i++) {
        if ( i % (a * b)=== 0 ) { arr.push('FizzBuzz')}
            else if (i % a === 0 ) { arr.push('Fizz')}
                else if (i % b === 0 ) { arr.push('Buzz')}
                    else { arr.push(i)}
    }
    return arr.join(' ')

}

// console.log(fizzBuzz(15, 3, 5));

//4. Perfect Number
function perfectnumber(n) {
    var arr = [];
    for (var i = 1 ; i < n ; i++) {
        if ( n % i === 0 ) { arr.push(i)}
    }

    var check = arr.reduce(function (a, b) { return a + b; },0)
    if (check === n) { return true} else { return false}
}

// console.log(perfectnumber(8128));
// console.log(perfectnumber(12));
// console.log(perfectnumber(28));
// console.log(perfectnumber(64));
// console.log(perfectnumber(496));

//6. Amicable Numbers
function amicableNumber(a,b) {
    function total(n) {
        var arr = []
        for (var i = 1 ; i < n ; i++) {
            if ( n % i === 0 ) { arr.push(i)}
        }
        return arr.reduce(function (a, b) { return a + b; },0)
    }
    // console.log(`a = ${total(a)} and b = ${total(b)}`);
    if (total(a) === b && total(b) === a) {return true}
    else {return false}
}

// console.log(amicableNumber(220, 284));

//9. Isosceles triangle
function isoscelesTriangle(a) {
    var x = "";   
    for (var i = 1 ; i <= a ; i++) {
        if ( x === "") { x = x + "#"}
        else { x = x + "##"} 
        var  y = " ";
        for (j = i+1; j <= a; j++) { y = y + " "}
        console.log(`${y}${x}`);
    }
}

// console.log(isoscelesTriangle(5));

// 10. Chessboard
function Chessboard(n, a, b) {
    for (var i = 1 ; i <= n ; i++) {
        var arr = [];
        for (var j = 1; j <= n ; j++) {
            if ((i+j) % 2 === 0) {
                arr.push(a)
            } else {arr.push(b)}
        }
        console.log(arr.join(" "));
    }
}

// console.log(Chessboard(8, "#", "*"));

