console.log("\nTOPIC: CALLBACK HELL");
  
const sendRequest = (url, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
        
            callback(data);
        }
        else if (request.readyState === 4) {
            callback("Could not fetch to-do list");
        }
    });

    request.open("GET", url);
    request.send();
};

const funJsonUrl = "./todo/fun.json"
const homeJsonUrl = "./todo/home.json"
const workJsonUrl = "./todo/work.json"

// To sequentially send multiple requests and display their responses in that order can be achieved with Callbacks:
// sendRequest(funJsonUrl, (data) => {
//     console.log(data);

//     sendRequest(homeJsonUrl, data => {
//         console.log(data);

//         sendRequest(workJsonUrl, data => {          // THIS SCENARIO IS A *CALLBACK HELL*
//             console.log(data);

//             /* Another request and on... */
//         });
//     });
// });

