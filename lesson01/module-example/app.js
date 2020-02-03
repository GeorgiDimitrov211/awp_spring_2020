const myModule = require('./MyModule');
const anotherModule = require('./AnotherModule');

console.log("2 + 2 is", myModule.sum(2,2));

anotherModule.first();
anotherModule.second();
anotherModule.last();
