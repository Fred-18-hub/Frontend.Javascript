console.log("\nTOPIC: XMLHTTP REQUESTS");

// XMLHttpRequest() has 5 readyStates to inform the state of the request
/* 
    state 0: when request is created
    state 1: open() has been called
    state 2: send() is called
    state 3: downloading requested data
    state 4: request is completed
*/    
const request = new XMLHttpRequest();   // state 0
// console.log(request, request.readyState);

request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
        console.log("Request successful", request, request.responseText);
    }
    if (request.readyState === 4) {
        console.log("Request failed", request, request.responseText);
    }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos");  // state 1 -> valid url
// request.open("GET", "https://jsonplaceholder.typicode.com/todossss");  // state 1 -> invalid url
request.send(); // sate 2

