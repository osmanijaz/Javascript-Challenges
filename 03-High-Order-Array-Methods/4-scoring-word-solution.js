// // Example 1 

// const score = (e) =>{
//   let words = e.split(' '); //[ 'hello', 'my', 'name', 'is', 'osman' ] split converts string to array
//   // console.log(words);

//   const scores = words.map((name) => {
//     // return name; // [ 'hello', 'my', 'name', 'is', 'osman' ] return name

//     const check = Array.from(name);
//     // return check;
//     //   [
//     //   [ 'h', 'e', 'l', 'l', 'o' ],
//     //   [ 'm', 'y' ],
//     //   [ 'n', 'a', 'm', 'e' ],
//     //   [ 'i', 's' ],
//     //   [ 'o', 's', 'm', 'a', 'n' ]
//     // ] scores

//     // const array = 'a';
//     // console.log(array.charCodeAt(0) - 96);

//     const valueEachArray = check.reduce(
//       (acc, sum) => acc + sum.charCodeAt(0) - 96,
//       0
//     );

//     return valueEachArray; //[ 52, 38, 33, 28, 62 ] scores
//   });

//   console.log(scores, 'scores'); //scores

//   //... to take out of array because Math.max will not give answer output
//   const highestScore = Math.max(...scores); //52 38 33 28 62 scores

//   const findHighestIndex = scores.indexOf(highestScore);
//   console.log(findHighestIndex); //4 [ 52, 38, 33, 28, 62 ] scores

//   const MaxValueWord = words[findHighestIndex];
//   // console.log(MaxValueWord);
//   return MaxValueWord
// }


// module.exports = score 



// Example 2 



const score = (e) =>{

  const words = e.split(' ') 
  // console.log(words)

  const scores = words.map((name)=>{
    // return name 


    const check = Array.from(name) 
    // return check 

    const add = check.reduce((acc, cur)=> acc + cur.charCodeAt(0) - 96, 0)
    return add 
   
    
    
  })


  const MaxNum = Math.max(...scores)
  console.log(MaxNum, 'Max')

  const MaxIdx = scores.indexOf(MaxNum); 
  console.log(MaxIdx, 'MaxIdx');
  
const MaxValueWord = words[MaxIdx];
console.log(MaxValueWord, 'Highest Word')
return MaxValueWord;


  console.log(scores, 'scores')






}


module.exports = score; 