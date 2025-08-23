var maxMarks = 1000;

// ------------- Approach 1 -------------
// var student = {
//   name: "StudName",
//   obtainedMarks: 500,
//   checkResult: function () {
//     let percentage = (student.obtainedMarks / maxMarks) * 100;
//     // return ${name} scored ${percentage}%;
//     if (percentage > 40) {
//       return "Pass";
//     } else {
//       return "Fail";
//     }
//   }
// }

// console.log(student.checkResult()); 

// But how is this code Re usable?? Its not

// So to achieve reusability, we move this inside a function

// ------------- Approach 2 ------------- using Functions
// function createStudent(name, obtainedMarks) {
//   return {
//     name: name,
//     obtainedMarks: obtainedMarks,
//     checkResult: function() {
//       let percentage = (this.obtainedMarks / maxMarks) * 100;
//       // return ${name} scored ${percentage}%;
//       if (percentage > 40) {
//         return ${this.name} passed;
//       } else {
//         return ${this.name} failed;
//       }
//     }
//   }
// }

// var stud1 = createStudent("Mox", 500)
// console.log(stud1.checkResult());

// var stud2 = createStudent("Nigesh", 300);
// console.log(stud2.checkResult());

// The problem with this approach is that the stud1 and stud2 objects are not bound to createStudent(). There is no linkage between them  after the objects are created. Any changes made in the createStudent() will not be reflected in the stud1 or any other objects returned by using this function, because its not a class! So we cannot say that we have created a blueprint yet :D
// Both the approach 1 and 2 work the same, just the lines of code differ

// So the solution is: Constructor functions
// ------------- Approach 3------------- using Constructor Functions

// Using the new keyword
// Whenever JS encounters 'new' keyword, it creates a new object, binds the 'this' keyword to the object
function createStud(name, obtainedMarks) {
  this.name = name,
  this.obtainedMarks = obtainedMarks,
  this.checkResult = function() {
    let percentage = (this.obtainedMarks / maxMarks) * 100;
    // return ${name} scored ${percentage}%;
    if (percentage > 40) {
      return ${this.name} passed;
    } else {
      return ${this.name} failed;
    }
  }
}

// just like we do var arr = new Array(), we can do

var stud1 = new createStud("Hapsi", 600); // What if we dont use 'new' here??
console.log(stud1.checkResult());
// console.log(createStud.prototype === stud1._proto_); // returns true

// A new empty object {} is created.
// That object’s prototype is set to createStud.prototype.
// Inside createStud, this refers to that new object.
// Properties (name, obtainedMarks) are assigned to it.
// Unless you explicitly return another object, the new object is returned.


// var stud2 =  createStud("ChupaPardhaan", 200);
var stud2 = new createStud("ChupaPardhaan", 200);
console.log(stud2.checkResult())
// console.log(createStud.prototype === stud2._proto_);
// No new object is created automatically.
// 'this' depends on how the function is called:
// In non–strict mode, this defaults to the global object (window in browsers, global in Node).
// In strict mode, this will be undefined, and trying to assign this.name will throw an error.
// Since your function doesn’t return anything, stud1 will be undefined.

// Now when we change the 'createStud' function, the changes are reflected in 'stud1' and 'stud2' objects i.e. Prototype is changed, and due to prototypical inheritance, the changes are reflected in the objects. There is a linkage now!