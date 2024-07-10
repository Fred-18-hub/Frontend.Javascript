console.log("\nTOPIC: TYPE CONVERSION")

let value = Number("50")
console.log(value, typeof value)

let value2 = Number("Name")
console.log(value2, typeof value2)

let value3 = Number(true)
console.log(value3, typeof value3)


let value4 = String(50)
console.log(value4, typeof value4)

let value5 = String(false)
console.log(value5, typeof value5)


let value6 = Boolean(-2)    // all non-zero numbers convert to true
console.log(value6, typeof value6)

let value7 = Boolean(0)
console.log(value7, typeof value7)

let value8 = Boolean("0") // all non-empty strings convert to true
console.log(value8, typeof value8)

let value9 = Boolean("")
console.log(value9, typeof value9)