

const password = (e) => {

  const eight = e.length >= 8 && e.length <= 12;
  const upperCase = e.split('').some((chara) => chara === chara.toUpperCase() && chara !== chara.toLowerCase())
  
  const checkNum = e.split('').some((num) => !isNaN(parseInt(num, 10))) 

  const checkLowerCase = e.split('').some((lower) => lower === lower.toLowerCase() && lower !== lower.toUpperCase())
  
  return eight && upperCase && checkNum && checkLowerCase;

}

module.exports = password 