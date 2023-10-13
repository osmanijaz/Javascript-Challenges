const phoneNum = (e) => {

  const answer =  e.slice(0, 3).join('')
  const newNumber = e.slice(3, 5).join('');
  const nextNumber = e.slice(5).join('');


  return `(${answer}) ${newNumber}-${nextNumber}`  


};

module.exports = phoneNum;
