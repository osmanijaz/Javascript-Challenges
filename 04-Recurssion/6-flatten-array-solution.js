// ---example 1--- 

// const flat = (arr) => {
//   let result = [];

//   for (const item of arr) {
//     console.log(item);
//     if (Array.isArray(item)) {
//       result = result.concat(flat(item));
//     } else {
//       result.push(item);
//     }
//   }

//   return result;
// };

// module.exports = flat;


// ---example 2--- 

// const flat = (arr) =>{
//   let result = [] 
//   for(const item of arr){

//     if(Array.isArray(item)){
//       result = result.concat(flat(item)) 
//       // console.log(result)
//     }else{
//       result.push(item) 
//     }
//    }
//   return result  
// }

// module.exports = flat 


// const array = [1, 2, 3, [4, 5, 6], 8, 9, 10];
// const flattenedArray = array.flat();

// console.log(flattenedArray);


// ---example 3--- 

const flat = (arr) =>{

let result = []

for(const item of arr){

  if(Array.isArray(item)){
    result = result.concat(flat(item))
  }else{
    result.push(item)
  }
}

 return result 
}

module.exports = flat 







