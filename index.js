const emptyArray = [];
emptyArray.push("apple", 3, true);
console.log(emptyArray);
/******************************************** */
const arbitraryNumbers = [2, 5, 8, 10];
arbitraryNumbers.forEach((item) => console.log((item *= 3)));
console.log(arbitraryNumbers);
/******************************************** */
const numbersArray = [3, 6, 8, 2, 7];
const newArray = [];
numbersArray.forEach((item) => (item > 5 ? newArray.push(item) : null));
console.log(newArray);
/******************************************** */
const randomNumbers = [4, 9, 2, 7, 5];
let sum = 0;
randomNumbers.forEach((item) => (sum += item));
console.log("Total sum:", sum);
/******************************************** */
const elementsArray = ["apple", "banana", "orange", "grape"];
const searchElement = "orange";
const resultArray = [];
elementsArray.forEach((item) =>
  item == searchElement ? resultArray.push(item) : null
);
console.log("resultArray:", searchElement);
/******************************************** */
const arrayWithLastRemoved = [1, 2, 3, 4, 5];
arrayWithLastRemoved.length = arrayWithLastRemoved.length - 1;
console.log(arrayWithLastRemoved);
/******************************************** */
const numbersArray2 = [23, 56, 12, 87, 45, 34, 67, 98, 21, 76];
console.log("Arrays number:", numbersArray2);
let biggestNumber = numbersArray2[0];
numbersArray2.forEach((item) =>
  item > biggestNumber ? (biggestNumber = item) : null
);
console.log("Biggest number:", biggestNumber);
/******************************************** */
const originalArray = ["cat", "dog", "bird"];
const copiedArray = [];
originalArray.forEach((item) => copiedArray.push(item));
console.log(copiedArray);
/******************************************** */
const arrayToEmpty = [1, 2, 3, 4, 5];
while (arrayToEmpty.length > 0) {
  arrayToEmpty.pop();
}
console.log(arrayToEmpty);
/******************************************** */
