

const missNum = (e) => {

  
  
  if(!e || e.length === 0){

  
    return 'no values'
  }

//  step 1
  const ans = e.length + 1
  const calc = (ans * (ans + 1 )) / 2  //55

  // step 2
  const finalAnswer = e.reduce((sum, num) => sum + num)


  return  calc - finalAnswer 
}

module.exports = missNum








