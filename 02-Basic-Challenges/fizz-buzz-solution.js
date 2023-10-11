// const fizzBuzz = (number) => {
//   let array = [];

//   for (let i = 1; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       array.push('FizzBuzz');
//     } else if (i % 3 === 0) {
//       array.push('Fizz');
//     } else if (i % 5 === 0) {
//       array.push('Buzz');
//     } else {
//       array.push(i);
//     }
//   }
//   return array;
// };

// module.exports = fizzBuzz;



const fizzBuzz = (number)=>{

  let array = []

  for(let i = 1; i <= number; i++){

    if(i % 3 === 0 && i % 5 === 0){
      array.push('fizzbuzz')
      
    }else if (i % 3 === 0) {
      array.push('fizz');
    } else if (i % 5 === 0) {
      array.push('buzz');
    } else {
      array.push(i);
    }
    
    
  }

  return array 


}

module.exports = fizzBuzz
