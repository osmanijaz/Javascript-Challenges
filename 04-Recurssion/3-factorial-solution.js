// const fact = (e) => {
//   if (e === 1) {
//     return 1;
//   }

//   console.log(e);
//   return e + fact(e - 1); 
//   // 5 + (5 - 1 = 4) = 9
//   // 9 + (5 - 2 = 3) = 12 
//   // 12 + (5 - 3 = 2) = 14 
//   // 14 + (5 - 4 = 1) = 15 
 
// };

// module.exports = fact;


const fact = (e) => {
  if (e === 1) {
    return 1;
  }

  console.log(e);
  return e * fact(e - 1);
  // 5 * (5 - 1 = 4) = 20
  // 20 * (5 - 2 = 3) = 60
  // 60 * (5 - 3 = 2) = 120
  // 120 * (5 - 4 = 1) = 120
};

module.exports = fact;

