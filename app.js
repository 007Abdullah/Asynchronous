console.log("Starting"); // 0.0005 v8 engin run line 

let data = 'content'; // 0.0005

setTimeout(function () {
    console.log(data);
}, 1000)

console.log("this message execute before 1 second");


// call back one function inside another function this is called callback 

function printGreeting(msg, alertGreet) {
    alertGreet(msg)
}

function alertGreet(msg) {
    alert(msg)
}

printGreeting("Hello World", alertGreet)


function printGreeting(msg, alertGreet) {
    if (msg === 'evening') {
        return evening(alertGreet);
    }
    else if (msg === 'morning') {
        return morning(alertGreet);
    }
    else {
        return night(alertGreet);
    }
}

function morning() {
    alert("Good Morning");
    alertGreet("Hello Morning");
}

function evening() {
    alert("Good evening");
    alertGreet("Hello Evening");
}

function night() {
    alert("Good night");
    alertGreet("Hello Night");
}

function alertGreet(msg) {
    alert(msg)
}

printGreeting("evening", alertGreet);


let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('New Promise');
        resolve();
    }, 1000)
})

promise.then(function () {
    console.log('Promise resolve')
})

function success() {
    console.log('Success');
}

function failure() {
    console.log('Failure');
}

function ckUserPromise(userInput, success, failure) {
    userInput === true ? success() : failure();
}

ckUserPromise(true, success, failure);



function checkUserPromise(userInput) {
    new Promise(function (resolve, reject) {
        if (userInput) {
            return resolve();
        }
        else {
            return reject();
        }
    })
}

checkUserPromise(true);


function anyFunction() {
    return (((Math.floor(Math.random() * 10)) % 2) === 0) ? true : false
}

const resolveFunction = () => console.log("success");
const rejectFunction = () => console.log("failure");


const result = new Promise((resolve, reject) => {
    setTimeout(() => {
        anyFunction() ? resolve() : reject()
    }, 2000)
})
result.then(resolveFunction).catch(rejectFunction)


console.log("End HEllo WOrld");