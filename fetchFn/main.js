// fetch method is used for making api calls and server side calls
// just pass it any url and it will return a promise
// which you can use to get the response

// fetch is not a part of javascript; its a part of browser api used to call apis
fetch('www.google.com');

var x = fetch('www.google.com');

x.then((response) => {
    console.log('response received', response);
})

// fetch returns a promise which can be used to get the response
// most important use of fetch is to call apis as it returns a promise
// which can be used to get the response when it is received

// fetch is based on xmlhttprequest constructor which returns a promise

// we will see how xmlhttprequest is used to make network requests and fetch custom implementation using this xmlhttprequest

// use xmlhttprequest constructor to use its methods to make network requests
var xmlHTTPRequest = new XMLHttpRequest();
xmlHTTPRequest.open('GET', 'https://localhost:3000/data');
xmlHTTPRequest.send();

xmlHTTPRequest.onreadystatechange = function() {
    if (xmlHTTPRequest.readyState === 4) {
        console.log('response received', xmlHTTPRequest.responseText);
    }       
}


// this is good but fetch is better cuz it returns a promise which can be used to get the response when it is received whereas here we have to use onreadystatechange event listener to get the response when it is received 

function fetchCustom(url) {
    // return promise object 

    /* Since XMLHttpRequest is asynchronous (it finishes in the future), you need something to hold that future value.
    That “holder” is the Promise object. */
    return new Promise(executorFunc);

    function executorFunc(resolve, reject) {
        var xmlHTTPRequest1 = new XMLHttpRequest();
        xmlHTTPRequest1.open('GET', url);
        xmlHTTPRequest1.send();

        xmlHTTPRequest1.onreadystatechange = function() {
            if (xmlHTTPRequest1.readyState === 4) {
                console.log('response received', xmlHTTPRequest1.response);
                resolve(xmlHTTPRequest1.response);
                // once response is received ; it is available for .then to use
            }       
        };

    }   

}

var data = fetchCustom('https://localhost:3000/data');
data.then((response) => {
    console.log('custom fetch response received', response);
});

/*
Old XMLHttpRequest:
- We had to keep listening with onreadystatechange 
  and check if readyState === 4 to know when response arrived.
- This meant manually handling async flow and often nesting callbacks.

With Promise:
- We wrap XHR inside a Promise object.
- The Promise is returned immediately from the function.
- Instead of continuously listening, we just attach .then(...) to the Promise.
- When the response arrives, resolve() is called, and .then(...) executes automatically.
- This makes async code cleaner and easier to manage.
*/

// One basic functionality of promises is of emulating timer and delays using await and async
// await can be used to wait for a promise to resolve before executing the next line of code




