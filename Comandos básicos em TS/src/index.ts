let x:number = 10;

x = 12;

console.log(x);

// Inferencia
let y = 12


// tipos básicos
let firstname: string = "Matheus";
let age: number = 30;
const isadmin: boolean = true;

console.log(typeof firstname);

// Object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstname.toUpperCase());
myNumbers.push(5);

console.log(myNumbers);

// tuplas 
let myTuple: [number, string, string[]]

myTuple = [5, "Teste",["a", "b"] ]

// objects literals -> {prop: value}
const user: {name: string, age: number } = {
    name: "Pedro",
    age: 18,
}

console.log(user);
console.log(user.age);

// any
let a:any = 0

a = "Teste"
a = true
a = []

// union type
let id: string | number = "10"

// type alias
type myidtype = number| string

const userid: myidtype = 10
const  productid: myidtype = "00001"
const shirid: myidtype = 123

// enum
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa Polo",
    size: Size.G
};

console.log(camisa);

// literal types

let teste: "Algumvalor" | null;

teste = "Algumvalor";
teste = null;


// funções
function sum(a: number, b: number){
    return a + b;
}

console.log(sum(12, 12));


function sayHelloTo( name: string ): string {
    return `Hello ${name}`
}

console.log(sayHelloTo("Matheus"));

function logger(msg: string ): void{
    console.log(msg);
}

logger("Teste!")

function greeting (name: string, greet?: string){
    if(greet){
      console.log(`Olá ${greet} ${name}`);
    } else {
        console.log(name);
    } 
}

greeting("José")
greeting("Pedro", "Sir")

// interface
interface MathFunctionParams{
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2
};

console.log(sumNumbers({n1: 1, n2: 2}));

function  multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2
}

console.log((multiplyNumbers)({n1: 2, n2: 2}));

const someNumbers:MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));

// narrowing
// checagem de tipos
function doSomething(info: number | boolean){
    if(typeof info === "number"){
      console.log(`O Número é ${info}`)
      return  
    }
    console.log("Não foi passado um número ")
}
doSomething(5);
doSomething(true);

// generics
function showArrayItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1,2,3]
const a2 = ["a", "b", "c"]

showArrayItems(a1)
showArrayItems(a2)

// classes
class User {
    name
    role
    isApproved

    constructor(name:string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }
    
}
