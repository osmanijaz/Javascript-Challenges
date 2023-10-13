
const chara = (e)=>{

  const charaSet = new Set() // return object 

  for(let i = 0; i < e.length; i++ ){

    const answer = e[i] 
    console.log(answer)

    if(charaSet.has(answer)){
      return false
    }

    charaSet.add(answer)


  }

  return true 


}

module.exports = chara; 