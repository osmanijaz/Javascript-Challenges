// const power = (e) => {

// if(e === 1){
// return 1

// } 

// console.log(e)
// return power(e - 1) 

// }

// module.exports = power 


const power = (base, pwr) => {

  let result = 1 

  for(let i = 0; i < pwr; i++){
    result = result * base 
    // result = 1 * 5 = 5 
    // result = 5 * 5 = 25 
    // console.log(i, 'i')
  }

  return result 




} 




module.exports = power 