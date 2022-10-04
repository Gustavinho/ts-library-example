"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayGoodbye = exports.sayHello = void 0;
function sayHello(person) {
    console.log(`Hi ${person.name}`);
    if (person.age > 18) {
        console.log('You are adult');
    }
}
exports.sayHello = sayHello;
function sayGoodbye() {
    console.log('goodbye');
}
exports.sayGoodbye = sayGoodbye;
