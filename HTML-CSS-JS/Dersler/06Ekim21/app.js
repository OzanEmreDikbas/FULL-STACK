// var year = 2024;
// var month = 4;
// var dayCount;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30;
//         break;
//     case 2:
//         if (((year % 4 == 0) && !(year % 100 == 0))
//             || (year % 400 == 0))
//             dayCount = 29;
//         else
//             dayCount = 28;
//         break;
//     default:
//         dayCount = -1; // invalid month
// }
// console.log(dayCount); // 29

// let day = prompt("enter a day")
// let text = ""
// switch (day.toLocaleLowerCase()) {
//     case "monday":
//     case "wednesday":
//     case "thirsday":
//     case "saturday":
//         text = "Inclass"
//         break;
//     case "tuesday":
//         text = "workshop"
//         break
//     case "friday":
//         text = "teamwork and WS";
//         break;
//     default:
//         text = "tatil"
// }
// console.log(text)

for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("fizzbuzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    }
}