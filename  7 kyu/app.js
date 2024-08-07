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

function rowWeights(array){
    let team1 = 0;
    let team2 = 0;
    for(let i = 0;i < array.length;i++){
        if(i % 2 === 0 || i === 0){
            team1 += array[i];
        }else{
            team2 += array[i];
        }
    }
    return [team1, team2];
 }

 rowWeights([80]);