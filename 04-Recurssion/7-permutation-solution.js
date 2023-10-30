// const permutation = (e) => {
//   for (let i = 0; i < e.length; i++) {
//     const first = e[i];
//     // console.log(i, 'i');
//     // console.log(e.slice(i + 1));
//     // console.log(e.slice(0, i), 'slice');
//     const sum = e.slice(0, i) + e.slice(i + 1);
//     console.log(sum);
//   }
//   // console.log(e.slice(0, 0), 'slice');
//   // console.log(e.slice(0, 1), 'slice');
// };

// module.exports = permutation;

// const perm = (e) => {
//   let result = [];
//   if (e.length === 0) {
//     result.push('');
//     return result;
//   }

//   for (let i = 0; i < e.length; i++) {
//     // 0, 1

//     const answer = e[i]; //ab
//     // e[0] = a
//     // e[1] = b

//     const sum = e.slice(0, i) + e.slice(i + 1);
//     // e.slice(0, 0) = empty string no value back
//     // e.slice(0, 1) = (start from 0 and and give 1 value back) the first value is a so 1 value back is a

//     // e.slice(0, i);
//     //empty
//     //a

//     // e.slice(i + 1);
//     // b
//     // empty

//     // console.log(sum);

//     const newValue = perm(sum);
//     // console.log(newValue);
//     for (let j = 0; j < newValue.length; j++) {
//       result.push(answer);
//     }
//   }
//   return result;
// };

// module.exports = perm;


const permutation = (e) => {

  let result = [] 

  if(e.length === 0){
    result.push('')
    return result 
  }

  for(let i = 0; i < e.length; i++){
    // console.log(i)
    const fistCharacter = e[i]
    // console.log(fistCharacter);

    const restOfString = e.slice(0, i) + e.slice(i + 1)
    // console.log(restOfString) 

    const newValue = permutation(restOfString);
    // console.log(newValue)

    for(let j=0; j<newValue.length; j++){

      result.push(fistCharacter + newValue[j]);


    }

  }


  return result 

}

module.exports = permutation