const calc = (a,b,c) =>{

if (c === '+') {
  return a + b;
} else if (c === '-') {
  return a - b;
} else if (c === '*') {
  return a * b;
} else if (c === '/') {
  return a / b;
}else{
return 'error'
}



}

module.exports = calc 