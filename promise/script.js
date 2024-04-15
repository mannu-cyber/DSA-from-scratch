// const studentName = "Bhola";

// const isEligible = (studentName) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.4) {
//         resolve(`bhai ${studentName} tum mumbai aa sakte ho`);
//       } else {
//         reject("bhai Tum abhi mehnat karo");
//       }
//     }, 2000);
//   });
// };

// isEligible(studentName)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("ho gya process complete ");
//   });

// const waketime = 4;

// const isEligible = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() <0.5) {
//         resolve("Good or jaldi so kar utha kar bhai");
//       } else {
//         reject("NOt good bhia");
//       }
//     }, 2000);
//   });
// };

// isEligible(waketime).then((res)=>{
//        console.log(res);
// }).catch((err)=>{
//        console.log(err);
// }).finally(()=>{
//        console.log('aaj ka task hua complete');
// })

const prom1 = new Promise((resolve, reject) => {
       setTimeout(() => {
              resolve('first')
       }, 1000);
})

const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('second')
    }, 2000);
})

const prom3 = new Promise((resolve, reject) => {
       setInterval(() => {
              reject(
              "third"
              )
       }, 2000);
})


Promise.allSettled([prom1, prom2, prom3]).then((res)=>{

console.log(res);

})