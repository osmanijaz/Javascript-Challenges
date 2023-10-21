const valid = (e) => {

const convertStrToArr = e.split('.')
console.log(convertStrToArr);

if(convertStrToArr.length !== 4){
  return false
}else{

  // every() checks every value in array returns true or false
  const checkEvery = convertStrToArr.every((anyName) => {
    return parseInt(anyName) >= 0 && parseInt(anyName) <= 255;
   
  });

  return checkEvery;
}



}

module.exports = valid;
