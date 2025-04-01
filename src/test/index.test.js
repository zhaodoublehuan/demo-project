// 测试文件

const { sayHello, add } = require('../main/index');

console.log('测试 sayHello 函数:');
console.log(sayHello('世界')); // 应该输出: 你好, 世界!

console.log('\n测试 add 函数:');
console.log(add(1, 2)); // 应该输出: 3