console.log("\nTOPIC: WORKING WITH JSONs");
  
const sendRequest = (method, url, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
        
            callback(null, data);
        }
        else if (request.readyState === 4) {
            callback("Could not fetch to-do list", null);
        }
    });

    request.open(method, url);
    request.send();
};

const toDoUrl = "https://jsonplaceholder.typicode.com/todos";
const localJsonUrl = "./tododb.json"
const requestMethod = "GET";

sendRequest(requestMethod, localJsonUrl, (err, data) => {
    if (data) {
        console.log(data);
    }
    else {
        console.log(err);
    }
});

