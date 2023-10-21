const tag = (e) => {

const words = e.split(' ')

const add = words.reduce((acc, sum) => {return acc + sum.charAt(0).toUpperCase() + sum.substring(1) 
}, '#')
return add




}



module.exports = tag 

