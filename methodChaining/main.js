/* // concat won't change the original string
var str = "first";

var newStr = str.concat('1').concat('2').concat('3').concat('4');

console.log(str, newStr); */

// Implementing method chaining
function customString(initialValue){
    this.value = initialValue;

    this.infiniteConcat = function(stringToConcat){
        let newValue = this.value + " " + stringToConcat;
        return new customString(newValue); 

        //returned that newValue as a new customString object so it has same methods as the original string; coz if we just returned a string, we would lose access to the infiniteConcat method and many other methods from the original string so we made the new string and original string as part of same parent class
    }

}

var x = new customString("first");
var y = x.infiniteConcat("second").infiniteConcat("third");
console.log(y.value);


