// import { multiplication, addition } from "./export.js";
// let multiply = multiplication(2, 3, 4);
// console.log(multiply);
// let add = addition(2, 3, 4);
// console.log(add);

// import { multiplication as mul, addition as ad } from "./export.js";
// let multiply = mul(2, 3, 4);
// console.log(multiply);
// let add = ad(2, 3, 4);
// console.log(add);

// import { mul, ad } from "./export.js";
// let multiply = mul(2, 3, 4);
// console.log(multiply);
// let add = ad(2, 3, 4);
// console.log(add);

// all files import
import * as exp from "./export.js";
let multiply = exp.mul(2, 3, 4);
console.log(multiply);
let add = exp.ad(2, 3, 4);
console.log(add);
