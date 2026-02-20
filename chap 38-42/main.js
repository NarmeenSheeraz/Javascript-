// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }
// console.log(power(2, 3));

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Example
// console.log(isLeapYear(2020)); // true
// console.log(isLeapYear(2023)); // false

// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function triangleArea(a, b, c) {
//     let s = calculateS(a, b, c);
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

// // Example
// console.log(triangleArea(3, 4, 5)); // 6