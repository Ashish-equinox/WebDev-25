// Class in js
// Classes are just the syntactical sugar over JavaScript's existing prototype-based inheritance and constructor functions.

/**
 * ES6 defined :-
 * Class specification
 *  - constructor
 *  - inheritance
 */

//Problem
// - frameworks implemented class based approach much earlier than popular frameworks like react, angular, vue 
// - Browser for that reason couldn't understand class

//Class Based Approach
// earlier for 2 objs, 2 different checkResult fn were being created but after ES-6 js made it compulsory that whatever fns are there in class they have to be declared in parent's prototype so any of its object can inherit it...

class Student{
    constructor(fName, obtainedMarks){
        this.fName = fName;
        this.obtainedMarks = obtainedMarks;
    }

    checkResult(){
        let percentage = (this.obtainedMarks / 100) * 100;
        if(percentage >= 40){
            console.log(`${this.fName} is Passed`);
        } else {
            console.log(`${this.fName} is Failed`);
        }
    }
}

var student1 = new Student("name1", 70);
var student2 = new Student("name2", 30);

student1.checkResult();
student2.checkResult();

// Transpilers are tools that converts uncompatible languages into browser-compatible versions.

