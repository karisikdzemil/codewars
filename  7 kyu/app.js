// code wars solution

// function flattenAndSort(array) {
//   // Step 1: Flatten the array
//   let flattenedArray = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       flattenedArray.push(array[i][j]);
//     }
//   }

//   // Step 2: Sort the flattened array using Bubble Sort
//   for (let i = 0; i < flattenedArray.length; i++) {
//     for (let j = 0; j < flattenedArray.length - 1; j++) {
//       if (flattenedArray[j] > flattenedArray[j + 1]) {
//         // Swap elements
//         let temp = flattenedArray[j];
//         flattenedArray[j] = flattenedArray[j + 1];
//         flattenedArray[j + 1] = temp;
//       }
//     }
//   }

//   return flattenedArray;
// }

// // Test the function with the provided example
// const inputArray = [[3, 2, 1], [4, 6, 5], [9, 7, 8]];
// const result = flattenAndSort(inputArray);
// console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function disemvowel(str) {
//   let str2 = "";
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] !== "a" &&
//       str[i] !== "e" &&
//       str[i] !== "i" &&
//       str[i] !== "o" &&
//       str[i] !== "u" &&
//       str[i] !== "A" &&
//       str[i] !== "E" &&
//       str[i] !== "I" &&
//       str[i] !== "O" &&
//       str[i] !== "U"
//     ) {
//       str2 = str2 + str[i];
//     }
//   }
//   str = str2;
//   return str;
// }

// console.log(disemvowel("This website is for losers LOL!"));

// function squareDigits(num){
//    let newNum = "";
//    num = num.toString();
//    for(n of num){
//     n = parseInt(n);
//     newNum += n * n;
//     newNum = newNum.toString();
//    }
//    num = parseInt(newNum);
//    console.log(num);
//   return 0;
// }
// squareDigits(2112);

// function dnaStrand(dna) {
//   let newDna = "";
//   for (d of dna) {
//     if (d === "A") {
//       newDna = newDna + "T";
//     } else if (d === "T") {
//       newDna = newDna + "A";
//     } else if (d === "C") {
//       newDna = newDna + "G";
//     } else if (d === "G") {
//       newDna = newDna + "C";
//     }
//   }
//   return newDna;
// }
// dnaStrand("GTAT");


// function validatePIN (pin) {
//   let strPin = pin.toString();
//   if(strPin.length !== 4 && strPin.length !== 6){
//     return false;
//   }else{
//   for(num of strPin){
//     num = +num;
//     if(isNaN(num)){
//       return false;
//     }else if(num < 0){
//       return false;
//     }else{
//       return true;
//     }
//   }
//   }
// }
// console.log(validatePIN());
// console.log("radi")

// function rowWeights(array){
//     let team1 = 0;
//     let team2 = 0;
//     for(let i = 0;i < array.length;i++){
//         if(i % 2 === 0 || i === 0){
//             team1 += array[i];
//         }else{
//             team2 += array[i];
//         }
//     }
//     return [team1, team2];
//  }

//  rowWeights([80]);

// function checkExam(array1, array2) {
//     let score = 0;
//     for (let i = 0; i < array1.length; i++){
//         console.log("Tacni odgovori: ", array1[i]);
//         console.log("Odgovori za proveru: ", array2[i]);
//         if(array1[i] === array2[i]){
//             score += 4;
//         }else if(array2[i] === ''){
//             score += 0;
//         }else if(array1 !== array2[i]){
//         score -= 1;
//         }
//     }
//     console.log("Student je osvojio: ",score);
//     return score > 0 ? score : 0;
// }
// checkExam(["a", "a", "b", "d"], ["b", "c", "", "b"]);

// function removeUrlAnchor(url){
//     let newUrl = "";
//     for(const char of url){
//         char !== "#" ? newUrl += char : url = newUrl;
// }
// console.log(url);
//   }
//   removeUrlAnchor("www.codewars.com#about");


// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
// console.log(binaryArrayToNumber([0, 0, 1, 1]))

// function removeSmallest(numbers) {
//     if (numbers.length === 0) return []; // Ako je niz prazan, vrati prazan niz
    
//     let el = numbers[0];
//     let index = 0;
    
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < el) {
//             el = numbers[i];
//             index = i;
//         }
//     }

//     numbers.splice(index, 1); // Uklanja prvi element sa najmanjom vrednošću
//     return numbers;
// }

// function solution(str, ending){
//     let pStr = '';
//     let sStr = '';
//     let j = str.length;
//     for(let i = ending.length-1; i >= 0; i--){
//         j--;
//         pStr += str[j];
//         console.log(str[i]);
//     }
//     for(let i = pStr.length -1;i>=0;i--){
//         sStr += pStr[i];
//     }
//     console.log(pStr)
//     console.log(sStr)
//     if(sStr === ending){
//         return true;
//     }else{
//         return false;
//     }
//   }

//   solution("acabnjco", "bnjco");


// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// function solution(number){
//         let newNum = '';
//         if(number / 1000 >= 0){
//             newNum +="M";
//         } if(number / 5 >= 0){
//             newNum +="D";
//         } if(number / 100 >= 0){
//             newNum += "C";
//         } if(number / 50 >= 0){
//             newNum += "L";
//         } if (number / 10 >= 0){
//             newNum +=  "X";
//         } if(number / 5 >= 0){
//             newNum+= "V";
//         }if(number / 1 >= 0){
//             newNum+="I";
//         }
//     console.log(newNum)
//   }

//   solution(1600)

// Niz brojeva
const numbers = [3, 6, 8, 11, 14, 17, 20, 25, 30];

// Petlja koja pronalazi i ispisuje parne brojeve
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " je paran broj.");
    }
}
