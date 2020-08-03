// 1.使用common.js的模块化规范
const { add, mul } = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(10, 8));

// 2.使用ES6模块化规范
import { name, age, sex } from "./js/info"
console.log(name);
console.log(age);
console.log(sex);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')

document.writeln('<h2>你好啊！骚年！！！</h2>')