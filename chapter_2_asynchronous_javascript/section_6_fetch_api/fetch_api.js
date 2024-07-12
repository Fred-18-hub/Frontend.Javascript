console.log("\nUSING THE FETCH API");

const funJsonUrl = "./todo/fun.json"
const invalidJsonUrl = "./todo/invalid.json"

fetch(invalidJsonUrl)  // Returns a promise
.then(response => {     // Promise is still resolved when resource is not found but network had no issues
    console.log("Response promise resolved: Response =", response); // var response here is the whole response object
    
    return response.json();    // .json() gets the actual data under request: it returns a promise
})
.then(data => {
    console.log("Data promise resolved: Data =", data)
})
.catch(err => {     // Promise is rejected only when there is network issue while executing the request
    console.log("Promise rejected: Error = ", err.message);
});
