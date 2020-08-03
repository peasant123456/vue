// 1.使用common.js的模块化规范
const { add, mul } = require('./mathUtils.js')

console.log(add(20, 30));
console.log(mul(10, 8));

// 2.使用ES6模块化规范
import { name, age, sex } from "./info"
console.log(name);
console.log(age);
console.log(sex);