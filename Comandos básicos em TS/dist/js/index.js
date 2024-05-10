"use strict";
let x = 10;
x = 12;
console.log(x);
// Inferencia
let y = 12;
// tipos básicos
let firstname = "Matheus";
let age = 30;
const isadmin = true;
console.log(typeof firstname);
// Object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstname.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
// tuplas 
let myTuple;
myTuple = [5, "Teste", ["a", "b"]];
// objects literals -> {prop: value}
const user = {
    name: "Pedro",
    age: 18,
};
console.log(user);
console.log(user.age);
// any
let a = 0;
a = "Teste";
a = true;
a = [];
// union type
let id = "10";
const userid = 10;
const productid = "00001";
const shirid = 123;
// enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Polo",
    size: Size.G
};
console.log(camisa);
// literal types
let teste;
teste = "Algumvalor";
teste = null;
// funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Matheus"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(name);
    }
}
greeting("José");
greeting("Pedro", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
;
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log((multiplyNumbers)({ n1: 2, n2: 2 }));
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
// narrowing
// checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O Número é ${info}`);
        return;
    }
    console.log("Não foi passado um número ");
}
doSomething(5);
doSomething(true);
// generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItems(a1);
showArrayItems(a2);
// classes
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
