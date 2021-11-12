// *=======================================================
//                       FOREACH
// *=======================================================

//---------------------------------------------------------
// print each element of array into console
//---------------------------------------------------------

const students = ["John", "Ali", "Can"];

students.forEach(print);

// * function decleration
function print(x) {
    console.log(x);
}

//  * with Arrow funct
students.forEach((x) => console.log(x));

//---------------------------------------------------------------
// Calculate the sum of the array
//----------------------------------------------------------------

const array1 = [5, 6, 7, 2, 3];

let sum = 0;
array1.forEach((v) => (sum += v));
console.log("SUM= ", sum);

// =======================================================
//                        MAP
// =======================================================
// map() metodu, dizilerin içerisindeki değerleri
// güncelleyerek ayrı bir diziye saklamak içinn kullanablriz.

//---------------------------------------------------------------
// Dizinin her bir elamanının 5 katını alarak ayrı bir dizide
// saklayan uygulamayı map() metodu ile yazınız.
//----------------------------------------------------------------

// Eğer bir diziyi trasnformasyona uğratacak isek forEach yerine map()
// kullanmak çok daha basit. map() metodu, güncellenmiş diziyi doğrudan
// bir değişkene atmaya izin  vermektedir.

// const numberArray = [3, 7, 17, 8, 9, 3, 0];

// const doubled = numberArray.map((x) => x * 2);

// console.log(doubled, numberArray);
// // *************************** ARRAY.FROM *****************************************
// // ? Array.from() creates a new Array instance from an array-like or iterable object.
// // ? Syntax :
// // ?   Array.from(object, mapFunction, thisValue)
// // *********************************************************************************

// // ! Example-1 (char array from string)
// // !-----------------------------------------------------------
// const msg = "Hello World";
// const msgArray = Array.from(msg);
// console.log(msgArray);

// // !Example-2 (Array from Set)
// // !------------------------------------------------------------
// const persons = new Set(["John", "Jack", "Jack"]);
// const fruit = new Set(["apple", 4]);

// const personArr = Array.from(persons);
// console.log(personArr, persons);

// const fruitArr = Array.from(fruit);
// console.log(fruitArr);

// // !Example-3 (Array from Map)
// // !------------------------------------------------------------

// const questAns = new Map([
//     ["1", "a"],
//     ["2", "b"],
// ]);

// const answerArr = Array.from(questAns.values());
// console.log(answerArr);

// // !Example-4 (Array with map function)
// // !------------------------------------------------------------
// const square = Array.from([1, 2, 3], (x) => x * x);
// console.log(square);

// function addArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//         sum += array[i];
//     }
//     return sum;
// }

// const numbers = [1, 3, 5];
// console.log("SUM =", addArray(numbers));

// // ? With callback
// // ? ---------------------------------------------------

// function addArray1(array, printFunction) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         printFunction(array[i]);
//         sum += array[i];
//     }
//     return sum;
// }

// const integers = [1, 3, 5];

// addArray1(integers, alert);
// addArray1(integers, (x) => console.log(x));

//---------------------------------------------------------------
// Beliritilen dizideki isimleri büyük harfe çevirerek bir dizide
// uygulamayı yazınızuygulamayı map() metodu ile yazınız.
//----------------

const names = ["ayşe", "didem", "salih", "emir"];
const namesUpper = names.map((x) => x.toUpperCase());
console.log(namesUpper);

//---------------------------------------------------------------
// tlFiyatlar dizidekisindeki ürünlere zam yapılmak isteniyor.
// Şartımız:  Fiyatı 100 TL den fazla olanlara %10 zam,
// 100 TL den az olanlara ise %15 zam yapılmak isteniyor.
// Ayrıca, zamlı olan yeni değerleri
// New Price of Product 1 : 110 TL şekilde diziye saklamak istiyoruz.
//----------------------------------------------------------------

const newPriceProduct = [];
const products = [10, 200, 30, 40, 100, 110, 120, 130, 200, 500, 780, 1000];
products.map((e) => {
    e > 100 ? newPriceProduct.push((e * 1.1).toFixed(2)) : newPriceProduct.push((e * 1.15).toFixed(2));
})
console.log(newPriceProduct);

//---------------------------------------------------------------
// Ürünlerin TL fiyatlarının saklandığı bir dizimiz var. Bu dizideki
// değerlerin Euro ve Dolar karşılıklarını verilen oranlara göre
// hesaplayarak ayrı dizilere saklayan uygulamayı map() ile yazınız
//----------------------------------------------------------------

// const prices = [10, 22, 33, 45, 75, 100];
// const euro = 11.5;
// const dolar = 10;
// const euroPrices = prices.map((x) => x * euro);
// const dolarPrices = prices.map((x) => x * dolar);
// console.log(euroPrices);


const prices = [10, 22, 33, 45, 75, 100];
const euro = 11.5;
const dolar = 10;
const currincyPrices = prices.map((x) => (x * euro, x * dolar));
console.log(currincyPrices);