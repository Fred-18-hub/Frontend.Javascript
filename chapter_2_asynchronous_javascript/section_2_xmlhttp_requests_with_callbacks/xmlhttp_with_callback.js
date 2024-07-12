console.log("\nTOPIC: XMLHTTP REQUESTS WITH CALLBACKS");
  
const getToDo = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(null, request.responseText);
        }
        else if (request.readyState === 4) {
            callback("Could not fetch to-do list", null);
        }
    });

    request.open("GET", "https://jsonplaceholder.typicode.com/todos");
    request.send();
};

getToDo((err, data) => {
    if (data) {
        console.log(data);
    }
    else {
        console.log(err);
    }
});

