//4. Unique element
function uniqueElement(arr1, arr2) {
    var arr1 = arr1.concat(arr2);
    // console.log(arr1);
    var arr = []
    for (var i = 0; i < arr1.length; i++) {
        var check = arr.includes(arr1[i]);
        console.log(`${i} la ${check}`);
        if (!check) {arr.push(arr1[i]);}
    }
    return arr.sort((a,b) => a - b);
}

var arr1 = [1,2,3]
var arr2 = [1,2,5, 100,10]
// console.log(uniqueElement(arr1, arr2));

//6.Sum of Minimums
var arr2D = [
    [5,3,2,4,1],
    [6,5, 7, 8, 9],
    [21,34,20, 56, 100]
  ]

function sumMinimumsCol(arr2D) {
    for (var i = 0; i < arr2D.length; i++) {
        arr2D[i].sort((a,b) => a - b);
    }
    return arr2D.reduce((a,b) => a + b[0],0)    
}
// console.log(sumMinimumsCol(arr2D));

function sumMinimumsRow(arr2D) {
    const index = arr2D[0].length;
    arr2D = arr2D.flat()
    console.log(index);
    arr2D.sort((a,b) => a - b);
    var newarr2D = arr2D.slice(0, index)    
    console.log(newarr2D);
    return newarr2D.reduce((a,b) => a + b,0)    
}
// console.log(sumMinimumsRow(arr2D))

//9. Diff Two Arrays

function diffArray(arr1, arr2) {
    var arr = []
    for (var i = 0; i < arr1.length; i++) {
        var check = arr2.includes(arr1[i])
        if (!check) {arr.push(arr1[i]);}
    }
    for (var i = 0; i < arr2.length; i++) {
        var check = arr1.includes(arr2[i])
        if (!check) {arr.push(arr2[i]);}
    }
    return arr.toString()
}

// console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));

//10. Tuck in Array
function tuckIn(arr1, arr2) {
    var index = Math.floor(arr1.length / 2)
    for (var i = 0; i < arr2.length; i++)
    {arr1.splice(index + i, 0, arr2[i])}
    return arr1
}
console.log(tuckIn([15,150], [45, 75, 35]));
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));