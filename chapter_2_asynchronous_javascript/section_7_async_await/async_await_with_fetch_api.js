console.log("\nTOPIC: ASYNC AWAIT WITH FETCH API");

const workJsonUrl = "./todo/work.json"
const invalidJsonUrl = "./todo/invalid.json"

const sendRequest = async () => {   // this returns a promise
    const response = await fetch(workJsonUrl);   // await ensures the fetch promise is resolved or rejected before moving on

    if (response.status === 200) {
        const data = await response.json();
        
        return data;    // this (and all returned values) is returned as the resolved component of the sendRequest promise
    }
    
    throw new Error("Could not fetch response");
}

sendRequest()
    .then(data => console.log("Resolved:", data))
    .catch(err => console.log("Rejected:", err.message));
    
console.log(sendRequest())