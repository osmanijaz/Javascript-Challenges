

const email = (e)=>{

  let emailRejects = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  return emailRejects.test(e)


}

module.exports = email 
