///////////////////////////////////////////

// let sentences = "If you want to fly, give up everything weighs you down."
// let index1 = ""

// for (let i = 0; i < sentences.length; i++) {
//     if (sentences.charAt(i) == "g") {
//         index1 = index1 + i + ",";
//     } else {
//         continue;
//     }
// }
// console.log(index1.slice(0, -1));

let sentence = prompt("Write a sentence please?")
let indexLetter = "";
let valueLetter = prompt("Enter a letter to know indexs. ")
for (i = 0; i < sentence.length; i++) {
    if (sentence.toLowerCase().charAt(i) == valueLetter.toLowerCase()) {
        indexLetter += i + ",";
    } else {
        continue;
    }
}
alert(`Your letter  ${valueLetter.toLowerCase()} index {${indexLetter.slice(0,-1)}}`);

// ////////////////////////////////////////////////

// let degree = prompt("Press 1 to convert from Fahrenheit to Celsius,\npress 2 to convert from Celsius to Fahrenheit,\nand press 3 to exit.");
// if (degree == 1) {
//     degree1 = prompt("Enter the Fahrenheit value you want to convert to Celcius");
//     celc = Math.round((degree1 - 32) / 1.8)
//     console.log(`${celc} Celcius`);
// } else if (degree == 2) {
//     degree2 = prompt("Enter the Celcius value you want to convert to Fahrenheit");
//     fahr = Math.round((1.8 * degree2) + 32);
//     console.log(`${fahr} Fahrenheit`)
// } else if (degree == 3) {
//     console.log("You signed out!");
// } else {
//     alert("You entered an incorrect value. Try again!")
// }

// // //////////////////////////////////////////////////

// let sentence = prompt("Enter a sentence that you want to print backwards.");
// let reversed = "";
// for (i = sentence.length; i >= 0; i--) {
//     reversed += sentence.charAt(i);
// }
// console.log(reversed);

// let sentence = prompt("Enter a sentence, please!")
// alert(sentence.trim().split(" ").reverse().join(" "));
// console.log(typeof sentence);

/////////////////////

// let istenenFibonacciSayisi = prompt("Kaçıncı fibonacci sayısını öğrenmek istiyorsunuz?");
//         let sayi1 = 0;
//         let sayi2 = 1;
//         let toplam;
//         let fibonacciSayilari = [];
//         for(let i = 0; i < istenenFibonacciSayisi; i++){
//             toplam = sayi1 + sayi2;//sayi1=1 , sayi2=2
//             console.log(sayi1,sayi2);
//             sayi1 = sayi2;//sayi2=2, sayi1=2
//             console.log(sayi1,sayi2);
//             sayi2 = toplam;//sayi2=3
//             console.log(toplam);
//             fibonacciSayilari.push(toplam);
//         }        
//         // Birinci Yöntem
//         console.log("Fibonacci (" + istenenFibonacciSayisi + ") : " + toplam);
//         // İkinci Yöntem
//         console.log(`Fibonacci (${istenenFibonacciSayisi}) : ${toplam}`);
//         // Fibonacci Sayıları
//         console.log("Fibonacci Sayıları : " + fibonacciSayilari);