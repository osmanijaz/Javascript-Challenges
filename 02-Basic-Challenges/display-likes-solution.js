
const likes = (e) => {

  if(e.length === 0){
return `0 people like your post`; 
  } else{
return `${e.length} people like your post`; 

  }
}

module.exports = likes;

