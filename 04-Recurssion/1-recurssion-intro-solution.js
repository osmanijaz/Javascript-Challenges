const intro = (e) => {

  if(e === 0){

    return //break 
  }
  
  console.log(e)
  e-- 
  intro(e)  //recurssion call a function within a function 


}
module.exports = intro 