

// const abc = (e) =>{
//   // /\b\w/g for upper case for the first letter only
//   return e.replace(/\b\w/g,(value) => value.toUpperCase())
// }

// module.exports = abc 



const abc = (e) => {

return e.replace(/\b\w/g,(value) => value.toUpperCase()) 

// return e.toLowerCase()

}

module.exports = abc

