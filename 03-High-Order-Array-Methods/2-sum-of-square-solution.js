
const sum = (e) => {

  const evenNumber = e.filter((e) => e % 2 === 0)

  const sq = evenNumber.map((e) => e ** 2);  // 2*2=4 and 4*4=16 

  const plus = sq.reduce((acc, cur) => acc + cur ) //4+16 = 20
  
  return plus;
}

module.exports = sum 