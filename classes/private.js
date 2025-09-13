// public => can be accessed from anywhere
// private => can be accessed only within the class and that also using # ; for outside the class access use getter and setter for manipulation
class Student{
    #fName;
    #obtainedMarks;
    
    //will use Student.maxMarks now rather than this.maxMarks
    static maxMarks = 100;

    constructor(fName, obtainedMarks){
        this.#fName = fName;
        this.#obtainedMarks = obtainedMarks;
    }

    // making this fn private
    #checkResult(){
        let percentage = (this.#obtainedMarks / Student.maxMarks) * 100;
        if(percentage >= 40){
            console.log(`${this.#fName} is Passed`);
        } else {
            console.log(`${this.#fName} is Failed`);
        }
    }

    // Getter for Name
    getName(){
        return this.#fName;
    }

    // Getter for Obtained Marks
    getObtainedMarks(){
        return this.#obtainedMarks;
    }

    // getter for checkResult
    getCheckResult(){
        this.#checkResult();
    }

}

var student1 = new Student("name1", 70);
console.log(student1.getName());
console.log(student1.getObtainedMarks());
student1.getCheckResult();

