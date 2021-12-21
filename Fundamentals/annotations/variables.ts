const apples: number = 5;//TYPE ANNOTATIION
// apples = 10;//error due to const
const apple = 5;//here apple is type number automatically //TYPE INFERENCE


let apples1: number = 5;
apples1 = 6;
// apples1='sdfds';//error

let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false];

//Classes
class Car {

}
let car: Car = new Car();

//Object literal
let point: { x: number, y: number } = {
  x: 10,
  y: 20
}

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}



//TYPE INFERENCE> only works when declaration and assign in same line
const a = 5;//type infered

let b;//type not infered >any
b = 10;
//-----------------------------------------------------------------------------------------------
//always try to use TYPE INFERENCE
//when to use TYPE ANNOTATIONS?
//1.function that returns 'any' type

const json = '{"x":10,"y":20}';
const coordinates: { X: number, y: number } = JSON.parse(json);
console.log(coordinates);//any type

const coordinates1 = JSON.parse(json);
console.log(coordinates1);

//2.when we declare variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
// let foundword;//any
let foundword: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundword = true;
  }
}

//3.variable whose type cannot be inferred correctly
let number = [-10, -1, 12];
let numberAboveZero = false;//boolean
let numberAboveZero1: boolean | number = false;

for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    // numberAboveZero = number[i];//error (downside of type inferrence)
    numberAboveZero1 = number[i];
  }
}
//-------------------------------------------------------------------------------