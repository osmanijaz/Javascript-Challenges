
// console.log(get('xyz')) is in a string
// reverse only works with array so need to use split('') to covert string to array
// join('') converting array to string 

// const abc = (e) => {
//   return e.split('').reverse().join('')

// };

// module.exports = abc;



const abc = (e) =>{
  // return e.split(''); //[ 'x', 'y', 'z' ] string to array
  // return e.split('').reverse(); //[ 'z', 'y', 'x' ]
  return e.split('').reverse().join(''); //zyx array to string 
}

module.exports = abc

