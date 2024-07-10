console.log("\nTOPIC: OBJECT//ARRAYS DATATYPE")

let brands = ["hp", "del", "apple", "asus"]
console.log(brands)

brands[2] = "acer"
console.log(brands)

// Array Properties & Methods
console.log(brands.length)

let join = brands.join('/')
console.log(join)

let concat = brands.concat([24, "products", 34.21])
console.log(concat)

let arrayIndex = brands.indexOf("asus")
console.log(arrayIndex)

brands.push("samsung")  // .push() is a destructive method: it alters the object it's called on
console.log(brands)

brands.pop()    // another destructive method
console.log(brands)