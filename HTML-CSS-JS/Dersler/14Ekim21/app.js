var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
//split()
// console.log(s.split(" ")); //bu, boşlukları dikkate alarak cümleyi böler ve bir dizi oluşturur(kelime kelime).
// console.log(s.split("")); //sadece tırnak içine hiçbir şey yazmayınca herbir elemanı böler ve bir dizi oluşturur (harf harf ve boşluk).
// console.log(s.split("e"));//cümledeki e leri dikkate alarak böler ve dizi oluşturur.
// console.log(s.split());//stringi array e çevirir.

// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE

// var youtube = "https://www.youtube.com/watch?v=b7vfp5G4brE"
// var arr = youtube.split('=')
// console.log(arr[1]);
// var shortLink = `https://youtu.be/${arr[1]}`
// console.log(shortLink);

//substr()
/* console.log(s.substr(22,10));
console.log(s.length);
console.log(s.substr(80,10)); */


//substring
// console.log(s.substring(22,32))
// console.log(s.substring(32,22))
// console.log(s.substring(32))
/* console.log(s.substring(22,-32)) //negatif index kullanamayız
console.log(s.substring(22,-5)) //negatif index kullanamayız
console.log(s.substring(22,-42)) //negatif index kullanamayız */
// console.log(s.substring(0,22))

/* 
var check = s.substr(22, 10) === s.substring(22,32)
console.log(check);
 */

//toLowerCase() toUpperCase()

/* var pangram = "pijamalı hasta yağız şoföre çabucak güvendi"
// console.log(pangram.toUpperCase());
// console.log(pangram.toLocaleUpperCase());
var Pangram = pangram.toLocaleUpperCase();
console.log(Pangram.toLowerCase());
console.log(Pangram.toLocaleLowerCase('tr')); */

// var test = prompt('write anything').toLowerCase()

// console.log(test);


//trim()
// var s = "                 <-Welcome \t to Clarus\tway->                 "
// console.log(s);
// console.log(s.trimLeft());
// console.log(s.trimRight());
// console.log(s.trim());



//substr()
/* const car = ['Opel', 'Audi', 'BMW', 2, ['Hello','World']];
// console.log(car);
// console.log(car[4][0]);
const car2 = new Array ('Opel', 'Audi', 'BMW', 2, ['Hello','World']); */

// console.log(car2);

// const x = new Array (2,10)
// const x = new Array (10)
// console.log(x);

/* const car = ['Opel', 'Audi', 'BMW', 2, ['Hello','World']];
car[4] = 'Mercedes'
// console.log(car);
console.log(typeof car);
console.log(car instanceof Array);
console.log(Array.isArray(car));
 */

//length

/* const cars = ['Opel', 'Audi', 'BMW'];
// console.log(cars);
const cars3 = ['Opel', 'Audi', 'BMW', 2, ['Hello','World']];
//concat()
const cars2 = ['Mercedes', 'Renault']
console.log(cars2.concat(cars,'cars3'));
console.log(''+cars2);
 */

//sort()
/* const daltones = ['Joe','Jack','William','Avarel']
// daltones.sort()
// console.log(daltones)
daltones.reverse()
console.log(daltones) */

/* const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());
console.log(points.sort(function(a, b){return a - b})); */

/* var alphabet = 'abcçdefgğhıijklmnoöprsştuüvyz0123456789'
function ascii(text) {
    for(let i=0;i < text.length;i++ ){
    console.log(text[i],text.charCodeAt(i))
}
}
// ascii(alphabet.toLocaleUpperCase('tr-TR'))
ascii(alphabet.toLocaleUpperCase()) */

//Push method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Pears", 'fig');
// console.log(fruits);

// let c = fruits.pop();
// console.log(c);
// console.log(fruits);

// fruits.pop();


// shift () & unshift()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
/* const deleted = fruits.shift()
console.log(fruits)
console.log(deleted) */

/* const newLength = fruits.unshift('Pineapple', 'Fig' )
console.log(fruits)
console.log(newLength) */

/* const fruits = ["Banana", ,"Orange", "Apple", "Mango"];
console.log(fruits);
// console.log(fruits[1]);
fruits[100] = 'abc'
console.log(fruits.length);
console.log(fruits);
 */

//splice ()

// var names = ["John", "Edward", "Victor"]
// var deleted = names.splice (1,2, "Mark", "James")
// var deleted = names.splice (1,2, "Mark", "James")
// console.log(deleted);
// console.log(names);

// names.splice(-2,1)
// console.log(names);
/* names.splice(-2)
names.splice(1)
console.log(names); */

//slice()

/* const months = ['Jan', 'March', 'April', 'June',"july"];
// const springs = months.slice(1,3);
// const springs = months.slice(-4,-2);
// const springs = months.slice(1,-2);
const springs = months.slice(-2,-5); //çalışmaz boş array döndürür
console.log(springs);
console.log(months);
 */

// const colors = ["Red", "Green", "Yellow", "Blue", "Pink", "Green"];

// const x = colors.indexOf("Green", 3)
// const x1 = colors.lastIndexOf("Green", 3)
// console.log(x);
// console.log(x1);
// console.log(colors.indexOf('Black'));
// console.log(colors.lastIndexOf('Black'));


//iterate methods
const colors = ["Red", "Yellow", "Green", , "Blue", "Pink", "Purple", "Gray", "lime"];


// 1. for 
// for (let i = 0; i < colors.length;i++){
//     console.log(colors[i])
//   }

// 2. for in

// for (i in colors) console.log(colors[i])



//for of
for (i in colors) console.log(colors[i])
    // for (i of colors) console.log(i)



// 4. for each

// colors.forEach(i=>console.log(i))

// const colors2 = [1,2,3,4,5,6,7,8,9,10];
// colors2.forEach(i=>console.log(i**2))

// forEach() and for in skip empty elements in the array, for and for of do not.