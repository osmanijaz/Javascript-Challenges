// const pallindrome = (e) => {

  // /[^a-z0-9]/g; number and capital or lowercase

//   const answer = e.toLowerCase().replace(/[^a-z0-9]/g, '');

//   const Front2Back = answer.split('').reverse().join('') 

//   return Front2Back === answer
// };

// module.exports = pallindrome;




const pall = (e) =>{

const answer = e.toLowerCase() //racecar

const change = answer.split('').reverse().join('') //racecar
return change === answer //racecar === racecar match
}

module.exports = pall 
