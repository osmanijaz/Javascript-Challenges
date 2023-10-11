
// const vowel = (e) =>{

//   let counter = 0

//   for(let i = 0; i < e.length; i++){
//     let answer = e[i]

//     if (
//       answer === 'a' ||
//       answer === 'e' ||
//       answer === 'i' ||
//       answer === 'o' ||
//       answer === 'u'
//     ) {
//       counter++;
//     }
   
//   }
  
//   return counter;



// }

// module.exports = vowel 



const vowel = (e) =>{

  let counter = 0

  for(let i = 0; i < e.length; i++){
    let answer = e[i]

    if(answer === 'a' || answer === 'e' || answer === 'i' || answer === 'o' || answer === 'u' ){
    counter++;
    }
  } 
  return counter
}




module.exports = vowel 





