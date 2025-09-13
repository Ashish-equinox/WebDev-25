function promiseExecutor(resolve, reject){
    setTimeout(() => {
        console.log('Promise 1 executed');
        resolve("Promise is resolved");
        // reject("Promise is rejected");
    }, 5000);
}

function PromiseCustom(executor){
    this.state = 'pending';
    executor();
}

var customPromise1 = new PromiseCustom(promiseExecutor);

