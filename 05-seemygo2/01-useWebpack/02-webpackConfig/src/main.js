// commonJs规范
const {add, mul} = require('./mathUtil.js')

console.log(add(20,30))
console.log(mul(20,30))


// es6的规范
import {name, age, height} from './info'

console.log(name);
console.log(age);
console.log(height);
