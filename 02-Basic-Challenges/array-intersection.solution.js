// const inter = (a, b) => {

//   let array = []

//   for(let i = 1; i <= a.length ; i++){

//     if(b.includes(a[i])){

//       array.push(a[i])

//     }

//   }
//       return array
// };

// module.exports = inter;

const inter = (a, b) => {
  let array = [];

  for (let i = 1; i <= a.length; i++) {
    if (b.includes(a[i])) {
      array.push(a[i]);
    }
  }

  return array;
};

module.exports = inter;
