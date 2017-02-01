
var max = 0;
var a = [1, 4 ,2];

function highestNum() {

  a.forEach(function(element) {
    if (element > max) {
      max = element;
    }
  });
 return max
}


//min

var max = -10 ;
var a = [-1, -2, -4];

function highestNum() {

  a.forEach(function(element) {
    if (element > max) {
      max = element;
    }
  });
 return max
}

//

var min = 5 ;
var a = [1, 4, 2];

function lowestNum() {

  a.forEach(function(element) {
    if (element < min) {
      min = element;
    }
  });
 return min
}

//

var min = 0 ;
var a = [-1, -4, -2];

function lowestNum() {

  a.forEach(function(element) {
    if (element < min) {
      min = element;
    }
  });
 return min
}

// Closest to 0 (zero)


var a = [-0.1, -0.01, -0.001];
var small = 0.2;

function smallestNum() {
  a.forEach(function(element) {
    if (Math.abs(element) < (Math.abs(small)) {
      small = element;
    }
  });
  return small;
}

// calculate sum

var numbers = [1, 2, 3]
sum = 0;
function sumOfNum() {
  numbers.forEach(function(element){
     sum = sum + element;
  });
  return sum
}
sumOfNum();
//==>returns 6

//// Create a function that calculate the mean value.

// Mean([1,2,3]) should return 2


var numbers = [20,21,22,23,24,25]
sum = 0;
function sumOfNum() {
  numbers.forEach(function(element){
     sum = sum + element;
  });
  return sum/numbers.length
}

sumOfNum();

// Create a function that finds the index of the highest number.

// indexHighestNumber([1,4,2]) should return 1
// indexHighestNumber([-1,-2,-4]) should return 0



 var a = [-1, -2, -4]
 var highestNum = -5
function indexHighestNumber() {
  a.forEach(function(element){
    if (element > highestNum) {
      highestNum = element
    }
  });
  return a.lastIndexOf(highestNum);
}
indexHighestNumber();

///

var siblings = ["Dija", "Maha", "Jamela", "Yousef"];
var parents = ["Steve", "Susan", "Mary", "Mohammed"];
var both = siblings.concat(parents);

// function to determine if a given name is in the array




var siblings = ["Dija", "Maha", "Jamela", "Yousef"];
var parents = ["Steve", "Susan", "Mary", "Mohammed"];
var both = siblings.concat(parents);
var name = "Susan"
// function to determine if a given name is in the array
name = prompt("What is the name you are looking for?");

function findName(both) {
  return both.includes(name); //.includes() returns true or false
}
both.filter(findName); //both.filter accepts ONLY A FUNCTION THAT RETURNS TRUE OR FALSE

// ==> both.filter(findName); returns "Susan"
// ==>both.every(findName); returns false
// ==>both.some(findName); returns true


//Advanced Functions
//
// var numEvenOdd = [1, 2, 3, 4]
// var evenNum = element % 2;
// function evenElements() {
//   numEvenOdd.forEach(function(element) {
// });
// if (evenNum === 0) {
//   return element;
// }
// }

// function lowestNum() {
//
//   a.forEach(function(element) {
//     if (element < min) {
//       min = element;
//     }
//   });
//  return min
// }


var numEvenOdd = [1, 2, 3, 4];

// var evenNum = 0;

function evenElements() {
  var evenArray = [];
  numEvenOdd.forEach(function(element) {
    var evens = element % 2;
    if (evens === 0) {
      evenArray.push(element)
    }
});
return evenArray;
}

// oddElements

var numEvenOdd = [1, 2, 3, 4];

// var evenNum = 0;

function oddElements() {
  var oddArray = [];
  numEvenOdd.forEach(function(element) {
    var odds = element % 2;
    if (odds != 0) {
      oddArray.push(element)
    }
});
return oddArray;
}

// Function and an Array
 //goes in big function







var array = [5, 6, 7, 8];


function mapArray() {
  var returnArray = [];
    array.forEach(function(element) {
      var result = (2 * element);
        returnArray.push(result);
    });
return returnArray;
}


//
// function mapArray(array, double) {
//
//   array.forEach(function())
// }
