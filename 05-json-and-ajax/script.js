
// usingPromise();
fetchData();
console.log("Hello World");

async function fetchData() {
    console.log("executing fetchData()");
    // await and async
    // when we await a promise, the execution pauses at that
    // line of code until the promise is resolved
    let request = await fetch("data.json");
    console.log(request);
    let json = await request.json();
    console.log(json);
}


function usingPromise() {
    // Any browser-based JavaScript
    // is running on the user's computer

    // takes in one parameter: the URL of where the data is
    // fetch() will on data hosted on a web server (i.e available
    // on the public Internet)

    // THOSE LINES ARE SYNCHRONOUS
    console.log("hello world");
    let m = 1 + 2 + 3;
    console.log("fetching data");

    // fetch is ASYNCRHONOUS. JS will execute the function in the background
    // and returns a PROMISE so that you can keep track of it 
    // and then move on the next statement
    let request = fetch("data.json"); // by default, if a relative URL (i.e, does not begin with https) 
    // is given, then use the current browser's
    // URL as the starting point

    // In JS a promise that a function that takes a long time to
    // execute and will only finish execution in the future (100ms onwards)

    // A function that takes a long time to finish and returns a promises
    // is known as ASYNCHRONOUS FUNCTION or ASYNCHRONOUS OPERATION
    console.log(request);

    // we can tell JS when the promise finishes
    request.then(function (response) {
        console.log(response);
        return response.json();  // response.json() also returns a promise
    }).then(function (data) {
        console.log(data);
    })
}

