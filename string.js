// const mystring = "orange";
// console.log(mystring.toUpperCase());      // This method is use to convert the string into uppercase.

// console.log(mystring.indexOf("a"));        // This method is use to find the index number of the variable.

// console.log(mystring.charAt(3));             //  This method is use to find the character position.

// console.log(mystring);

// const mystring2 = new String('this is the string with new string () method')
// // console.log(typeof mystring2);

// const mystringUppercase = mystring2.toUpperCase;
// console.log(mystringUppercase);

// const streeng = 'newstring';

// console.log(streeng.charAt());

// const result = texts.match('strings')
// console.log(result);

// const result = texts.forEach((element) => {
//   element.trim(" ");
// });

// const result = texts.forEach((elem)=>
// {
//        elem
// })

// let texts = "    this is the strings formate   it           ";

// const toArrayyy = texts.split(" ");

// const toRemoveWhiteSpace = toArrayyy.map((curva, index) => {
//   return curva.trim(" ");
// });

// console.log(toRemoveWhiteSpace);

// texts.forEach(element => {
//        console.log(element);
// })
// console.log(toarray);

// const toarray = texts.map((curval)=>curval.trim())
// console.log(toarray);
// const trimedWhiteSpace = texts.trim()

// const toArray = trimedWhiteSpace.split(" ").map((curval, index) => {
//   return `${curval} index ${index}`;
// });

// console.log(toArray);

// console.log(trimedWhiteSpace.slice(1));
// slice() method is use to get the substring from the  string and it accept starting and ending index as an argument and the starting index is included and ending index is excluded

// const toArray = texts.split(' ')  /// this method is use to convert the strings into array  .split()

// const resutl =  toArray.map((curval)=>curval.trim(" ")) // .trim() method is used to remove the extra spaces from the start and ending of the string
// resutl

// console.log(resutl[4]);

// console.log(resutl);
// console.log(resutl.includes('this'));
// console.log(resutl[2]);

// const removeWhiteSpace = Map.texts((curval)=>{
//        curval.trim("")
// })
// const toArray =texts.toArray()
//  toArray.map(curaval => curaval.trim(' '));

// const toArray = texts.toArray(); // Assuming toArray is a method that converts 'texts' to an array
// const remove = toArray.map(curaval => curaval.trim());

//  texts.startsWith('this')
// console.log(result);

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

// for (let char = 97; char <= 122; char++) {
//   console.log(String.fromCharCode(char));
// }

// for(let char = 97; char<= 122; char++){
// console.log(String.fromCharCode(char));
// }

// for(let char = 122 ; char>= 97; char--){
// console.log(String.fromCharCode(char))

// }

// console.log('Z'.charCodeAt(0))
// console.log('A'.charCodeAt(0))

// for(let upper = 65; upper<= 90; upper++){
//   console.log(String.fromCharCode(upper));
// }

// for(let upper = 1; upper<=90; upper++){
//   console.log(String.fromCharCode(upper));
// }

// console.log("enter".charCodeAt(0));

// document
//   .querySelector("#button")
//   .addEventListener("click", () => console.log("hellow"));

// document.querySelector("#button").addEventListener("keydown", (event) => {
//   if (event.key === "En") {
//     console.log("hellow");
//   }
// });

// console.log("A".charCodeAt(0));
// for (let char = 65; char <= 165; char++) {
//   console.log(String.fromCharCode(char));
// }

// const vowel = " this is the check for the vowels";
// const checkVowels = vowel.matchAll('e')

// console.log(checkVowels);

// const checkVowelsPresentOrNot = (char) => {
//   const vowels = "aeiou";

//   for (const check of vowels) {
//     console.log(char.includes(check));
//   }
// };

// console.log(checkVowelsPresentOrNot('this is my name check'));

// const vowel = ' aeiou'

// for (const char of vowel) {
//   // console.log(char.includes(vowel));
//   console.log(char);
// }

// const checkVowelsPresentOrNot = (str)=>{

// const vowel = 'aeiou'

// for (const iterator of vowel) {
//   console.log(str.includes(iterator));
// }

// }

// const checkKarathai = (str)=>{
// const vowels = 'aeiou'

// for (const iterator of vowels) {
//   // console.log(str.includes(iterator));

//   if(!str.includes(iterator)){
//     return false
//   }

// }
// return true
// }

// // console.log(checkKarathai('hehehe'))

// console.log(checkKarathai('bhai sahi sahi bata hai ki nhi ek bhi vowels isme nhi to mai dusra method search karu'));

// const checkVowel = (val)=>{

// const vowe = 'aeiou'
// for (const iterator of vowe) {
//   // console.log(val.includes(iterator));

//   if(! val.includes(iterator)){
//     return 'not Present';

//   }
// }
// return ' present'

// }

// console.log(checkVowel('my name is Abhimanyu Sahani'

// const check = (str)=>{

// const vowel = 'aeiou'
// for (const iterator of vowel) {
//   console.log(str.includes(iterator));
// }

// }

// console.log(check('hey people how are you'));

// const check = (str)=>{
// const vowels = 'aeiou'

// for (const iterator of vowels) {
//   console.log(str.includes(iterator));
// }

// }

// console.log(check('hey people how are you this is me'));

// console.log('z'.charCodeAt(0));
// console.log('a'.charCodeAt(0));

// for(let char = 97; char<=122; char++){

//   console.log(String.fromCharCode(char));
// }

// const checkPangaram = (str) => {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";

//   for (const iterator of alphabet) {
//     console.log(str.includes(iterator));
//   }
// };

// console.log(checkPangaram("the quick brown fox jumps over the lazy dog"));

const checkPangaram = (str) => {

let storeAlphabet = (words)=>{
  for (let char = 97; char <= 122; char++) {
    console.log(String.fromCharCode(char));
  }
}
for (const alphabet of storeAlphabet) {
  
console.log(str.includes(alphabet));

}


};

checkPangaram();
