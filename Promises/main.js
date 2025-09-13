// Promise
// Promise is an object created using Promise constructor function and primarily have 2 properties 

// 1. state -possible values: pending, fulfilled, rejected
// 2. result -possible values: undefined, any valid value


/* 
// using a fn
function promiseExecutor(){
    setTimeout(() => {
        console.log('Promise is created')
    }, 5000);
}

// Simple promise
var promise1 = new Promise(promiseExecutor); //don't have to call that fn, it will be called by JS engine when promise is created 
// */

// promise is a constructor fn which takes an executor fn as an argument
// Executor fn is called immediately when promise is created
// Executor fn takes 2 args - resolve and reject which are also fn
// Simple promise with resolve and reject

function promiseExecutor(resolve, reject){
    setTimeout(() => {
        console.log('Promise 1 executed');
        resolve("Promise is resolved");
        // reject("Promise is rejected");
    }, 5000);
}

var promise1 = new Promise(promiseExecutor); 

promise1.then((resolvedReturnValue) => {
    alert("Promise resolved with value: " + resolvedReturnValue);
});

promise1.catch((rejectedReturnValue) => {
    alert("Promise rejected with value: " + rejectedReturnValue);
});

