//spread operator use-case
//spread => break any data structure , create its duplicate in new data structure and then breaks that duplicate ;

var num1 = [1,2,3,4];
var num2 = [5,6,7,8];

var combinedArray = [...num1, ...num2];

var arr1 = new Array(...[1,2,3,4]);
var arr2 = new Array(1,2,3,4);

var studentObjectDetail1 = {name:"name1", age:20};
var studentObjectDetail2 = {rollno:101, marks:100};

var studentObjectDetail3 = {...studentObjectDetail1, ...studentObjectDetail2};


//rest operator => allows us to represent an indefinite number of arguments as an array; inverse of "spread" this combines all scattered elements in an array always
console.log(sumAll(1,2));
console.log(sumAll(1,2,3,4,5,6,7,8,9));

function sumAll(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}

//we will use rest on an object now ; Object → basic key–value store (keys mostly strings) ; Map → advanced key–value store (any key type, better iteration, ordered).

function objPrint(...array) {
    array.forEach((obj) => {
        // print key pairs of each object present in array
        for (let key in obj) {
            console.log(key);
        }
        console.log("-------------------");
    });
}


//fn call
objPrint(
    {name:"name1", age:20, rollno:101, marks:100, school:"school1", city:"city1"},

    {name:"name2", age:21, rollno:102, marks:90, school:"school2", city:"city2"},

    {islogged: true}

);

