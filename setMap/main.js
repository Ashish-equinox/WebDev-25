// sets are basically arrays or collection of unique elements
// whatever we create from new keyword or constructor function is an object
// since set is created from new keyword it is an object represented as arrays

var set1 = new Set([5,4,3,6]);
set1.add(7);

// in array key is index but in set key is value itself

// both sets and maps are based on same interface so even if key is value itself we still have to mention key as to use that interface set has to implement all methods of that interface


// all iterable methods of set are in github repo

// -------------------------------------------------------------------------------------//

// MAPS

// maps are key value pairs like objects but in maps key and value can be of any data type whereas in objects key is always string or symbol

var map1 = new Map([
    ['lname' , 'singh'],
    ['fname', 'ashish'],
    [null , 'hello']

]);

for(let [key, value] of map1.entries()) {
    console.log(key, value);
}   

/*  map1.entries returns an object with array containing key value pair like this which we destructure using [key,value] => { [], [], []} */

// if we don't destructure it will be like this
for(let item of map1.entries()) {
    console.log(item);
}

// we can never break out of forEach loop early




