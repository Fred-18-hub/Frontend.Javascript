console.log("\nTOPIC: PROMISES");

// PROMISES: provides a cleaner approach to sequential execution of requests
  
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

const invalidJsonUrl = "./todo/invalid.json"

sendPromiseRequest(funJsonUrl)
    .then(data => {
        console.log("Data:", data);     // then is ran if the promise was resolved
    })
    .catch(err => {
        console.log("Error:", err);     // catch is ran if the promise was rejected
    });

