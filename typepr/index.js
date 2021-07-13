"use strict";
exports.__esModule = true;
var value = rand();
var str = value;
console.log(str * 10);
function rand() {
    if (Math.random() < 0.5) {
        return 'hello';
    }
    else {
        return 123;
    }
}
