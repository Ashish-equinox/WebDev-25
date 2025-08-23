// custom map => but this is basic map working; will implement after this...
var arr1 = new Array(1,2,3,4,5);

var arr1Ans = arr1.map((it, idx) =>{
    return it * 2;
})

// did same as above just using callback fn rather than inline fn
var arr1X2 = arr1.map(callbackMultiplyBy2);

function callbackMultiplyBy2(item){
    return item * 2;
}

//---------------------------------------------------------------------------//

var arr5 = [1,2,3,4,5];
var arr10 = [1,2,3,4,5,6,7,8,9,10];

arr10.customMap();

Array.prototype.customMap = function(callback){
    console.log(this); // this refers to arr5 or arr10
    for(let i=0; i<this.length; i++){
        //passing value of original array
        let callbackValue = callback(this[i]);
        returnArray.push(callbackValue);
    }
    return returnArray;
}
