// nn bb ss u
// null number boolean bigint string symbol undefined
let a = null
let b = 1234
let c = true
let d = BigInt("123") + BigInt("123")
let e = "Milind"
let f = Symbol("I am a nice symball")
let g
console.log(a, b, c, d, e, f, g)
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g)

// Objects in JavaScript
const item = {
	Milind: 1,
	"Suketu": false,
	"Yashvee": undefined,
	"Nikunj": "Bechmate"
}

console.log(item[Milind])