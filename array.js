// const array = ["banana ", "mango", "apple ", "grapes"];

// array.forEach((currVal, index, array) => {
//   console.log(
//     `my favourite frouit is   ${currVal} it is on the ${index} place from the whole ${array}`
//   );
// });

// const myMapfun = array.map((curVal, index, Array) => {

//     return `my favourite frouite is ${curVal} it is on the ${index}place from the group of ${Array}`

// });

// console.log(myMapfun);

// const array = ["banana ", "mango", "apple ", "grapes"];

// console.log( array. indexOf('mango', "banana"));

// console.log('the index of the apple is'+ array.indexOf("apple", 1));

// const number = [1, 3, 4, 5, 6, 6];

// console.log(number.indexOf(5));

// console.log(array.indexOf("apple"));

// console.log("Index of 'apple': " + array.map(e => e.trim()).indexOf("apple"));

// console.log('index of apple is ' + array.map( e =>e.trim() (array.indexOf('apple'))));

// console.log(
//   "the value of apple is" + array.map((e ) => e.trim()).indexOf("apple")
// );

// const monthsIs = array.indexOf('mango')

// array.splice('banana', 0, 'Banana', 'grapessssss')

// console.log(array);
// console.log(monthsIs);

// const check = prompt('enter the valu');

// const array = ["banana", "mango", "apple ", "grapes"];

// const updatedVal = array.filter((curval)=>{

//        return curval == check
// })

// console.log(updatedVal);

// const checkedVal = 500;

// const product = [
//   {
//     item: "laptop",
//     price: 1000,
//   },

//   {
//     item: "mobile",
//     price: 500,
//   },
//   {
//     item: "tablete",
//     price: 300,
//   },
// ];

// const checke = product.filter((checked) => {
//   return checked.price <= checkedVal;
// });

// console.log(checke);

// ***************************** here converted the data into the assending order **********************************

// const returnedNumber = number.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(returnedNumber);

// ***************************** here converted the data into the decending order **********************************

// const desendingOrder = number.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

// console.log(desendingOrder);

// const sqrtNum = number.map((cuVal)={

// if(cuVal % 2 ===0) {
// return cuVal* cuVal
// }

// })

// const sqrtNumWithEven = number
//   .map((curVal) => {
//     if (curVal % 2 === 0) {
//       return curVal * curVal;
//     }
//   })
//   .filter((curVal) => curVal !== undefined);

// console.log(sqrtNumWithEven);

// const mulEvenNum = number
//   .map((curVal) => {
//     if (curVal % 2 === 0) {
//       return curVal * curVal;
//     }
//   })
//   .filter((inVal) => inVal !== undefined);

// console.log(mulEvenNum);

// const number = [1, 3, 45, 56, 67, 87, 8, 7, 6, 54];

// const number = [];

// ************** when we use reduce method on an array it reduce the all the data in a single data and if we don't provide the initial value in it during the empty array the programme will throw error ************************//

// const totalNum = number.reduce((accumilater, curval) => {
//   return accumilater + curval;
// },0);

// console.log(totalNum);

const arr = [3, 45, 3, 22, 33, 44, 3];
let sortedVal = arr.sort((a,b)=>a-b).filter((num) => {

 return  num > 10;
});
console.log(sortedVal);
