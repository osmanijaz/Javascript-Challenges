
// const likes = (e) => {

//   if(e.length === 0){
// return `0 people like your post`; 
//   } else if (e.length === 1) {

//     return `${e[0]} like your post`; 

//   } else if (e.length === 2) {
//     return `${e[0]}, ${e[1]} likes your post`;
//   } else {
//     return `${e[0]}, ${e[1]} and ${e.length - 2} others people like your post`;
//   }
// }

// module.exports = likes;




const likes = (e) => {


  if(e.length === 0){
    return `0 people like your post`
  }else if (e.length === 1) {
        return `${e[0]} likes your post`;
  }else if(e.length === 2){
return `${e[0]}, ${e[1]} likes your post`;
  }else {
return `${e[0]}, ${e[1]} and ${e.length - 2} people like your post `;

  }

}

module.exports = likes;



