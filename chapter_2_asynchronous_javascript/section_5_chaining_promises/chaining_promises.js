console.log("\nTOPIC: CHAINING PROMISES");
  
const sendPromiseRequest = url => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject("Could not fetch to-do list");
            }
        });

        request.open("GET", url);
        request.send();
    });
    
};

const funJsonUrl = "./todo/fun.json"
const homeJsonUrl = "./todo/home.json"
const workJsonUrl = "./todo/work.json"
const invalidJsonUrl = "./todo/invalid.json"

sendPromiseRequest(funJsonUrl)
.then(data => {
    console.log("Promise 1 resolved:", data);
    return sendPromiseRequest(homeJsonUrl);
})
.then(data => {
    console.log("Promise 2 resolved:", data);
    return sendPromiseRequest(invalidJsonUrl);
})
.then(data => {
    console.log("Promise 3 resolved:", data);
})
.catch(err => {
    console.log("Error:", err);
});

