// Destructuring
var arr1 = [1, "Ashish", "Raj" , {name: "name1", age: 20}]; 
var [code, firstName, lastName, {name, age}] = arr1;

console.log(arr1);

// destructuring is beneficial for objects not for arrays to extract values easily from large objects
var obj1 = {
    fName: "Alex",
    age: 20, 
    lName: "Bob",
    details : {age : 10, college: "XYZ"}
};

var{
    fName: firstName, //to use key of obj1 with a diff name use aliasing
    age,
    lName,
    details : {age, college} //details is an object which is aliased into age and college
} = obj1;

console.log(firstName, age, lName, age, college);
