/*
?? (Nullish Coalescing Operator)
- Used to provide a default value when the left side is null or undefined.
- Example: let name = null ?? "Guest"; // "Guest"

?. (Optional Chaining Operator)
- Used to safely access nested object properties.
- Returns undefined instead of throwing an error if a property doesn’t exist.
- Example: let city = user.address?.city; // undefined
*/

var firstName;
var lastName;
var userName;

// if none of the variables are defined, "Guest" will be used as the default value
var displayName = firstName ?? lastName ?? userName ?? "Guest";

return displayName; // "Guest"

var user = {
    "academic": {
        "degree": "Masters",
        "university": "XYZ University"
    }
};

// console.log(user.academic.profile.name);
console.log(user.academic?.profile?.name); 
//returns undefined instead of throwing an error


