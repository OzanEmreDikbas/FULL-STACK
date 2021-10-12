//regular or traditional 

/* function sum(num1,num2){
    return num1+num2; 
}
console.log(sum(4,5)); */

//function expresisons named or anonymous
/* const sum = function (num1,num2){
    return num1+num2; 
}
console.log(sum(4,5));
 */

//IIFE

/* let radius = 5;
// const iife = (num => num +5)(10)
const iife = (num => 3.14 * num**2)(radius)
console.log(iife); */




/* function pascalNumbers (n){
    console.log(n);
    if ( n === 1) return 1;
    return n + pascalNumbers(n-1)
}
console.log(pascalNumbers(5)); */

/* function factorial (f) {
    if (f == 1) return 1;
    return f * factorial(f-1)
}
console.log(factorial(5));  */

/* const c = function (f) {
    if (f == 1) return 1;
    return f * c(f-1)
}
console.log(c(5));  */

// function sum(num1,num2){
//     return num1+num2; 
// }

/* const d = (num2,num3) => num2+num3;
console.log(d(5,6)); */

/* const e = num2 => num2+100;
console.log(e(6));
 */
/* const adam = (num2,num3,num4) => num2+num3-num4;
console.log(adam(2,5,4)); */

// const g = (...others)=> {
//     let sum = 0;
//     console.log(others);
//     for (i = 0; i < others[0].length; i++){
//         sum += others[0][i]
//     }
//     return sum
// }

// // console.log(g(1,2,3,4,5,258,654));

// array1 = [[1,2,3,4,5,6]]

// console.log(g(array1));


// const dog = {
//     name: 'fluffy',
//     age : 5,
//     whatname(){
//         //console.log(this)
//         return this.name
//     }
// };
// console.log(dog.whatname());


// const greet = (user = 'New User') => `welcome ${user}`
/* const greet = (user) => user ? `welcome ${user}`: 'Welcome new user'
console.log(greet()); */

/* const car = () => {
    return {name: "Audi" };
    };
    
console.log(car()); 
const car2 = () => ({name : 'BMW'})
console.log(car2()); */

/* const student = {};
student.name = 'mark'
function sayHi2(student) {
    console.log(`Hello! ${student.name} from entry point`);
    student.name = 'John'; // Globaldeki değeri de etkiler
    console.log(`Hello! ${student.name} from entry point`);
    student = {name: "Leon"}
    console.log(`Hello! ${student.name} inside function`);
  }
  sayHi2(student);
  console.log(student.name);
  student = 123
   */

///////////////////////////////////////////

// let sentences = "If you want to fly, give up everything weighs you down."
// let index1 = ""

// for (let i = 0; i < sentences.length; i++) {
//     if (sentences.charAt(i) == "w") {
//         index1 = index1 + i + ",";
//     } else {
//         continue
//     }
// }
// console.log(index1.slice(0, index1.length - 1));

////////////////////////////////////////////////

// let degree = prompt("Press 1 to convert from Fahrenheit to Celsius, press 2 to convert from Celsius to Fahrenheit, and press 3 to exit.");
// if (degree == 1) {
//     degree11 = prompt("Enter the Fahrenheit value you want to convert to Celcius");
//     celc = Math.round((degree1 - 32) / 1.8)
//     console.log(`${celc} Celcius`);
// } else if (degree == 2) {
//     degree2 = prompt("Enter the Celcius value you want to convert to Fahrenheit");
//     fahr = Math.round((1.8 * degree2) + 32);
//     console.log(`${fahr} Fahrenheit`)
// } else if (degree == 3) {
//     console.log("You signed out!");
// } else {
//     console.log("You entered an incorrect value. Try again!")
// }

//////////////////////////////////////////////////

let sentence = prompt("Enter a sentence that you want to print backwards.");
let reversed = "";
for (i = sentence.length; i >= 0; i--) {
    reversed += sentence.charAt(i);
}
console.log(reversed);