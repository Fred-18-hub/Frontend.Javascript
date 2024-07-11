console.log("\nTOPIC: CALLBACK FUNCTION USE IN HTML")

let ul = document.querySelector(".pets");

let pets = ["cat", "dog", "fish"];

let html = ``;

pets.forEach(pet => {
    html += `<li style="color: purple">${pet}</li>`;
});

console.log(html)

ul.innerHTML = html;