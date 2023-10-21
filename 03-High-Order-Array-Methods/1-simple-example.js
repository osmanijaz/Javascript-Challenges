
const array = [1,2,3,4,5,6,7,8]


// map 
const times2Numbers = array.map((name)=> name * 2)
console.log(times2Numbers)


// filter 
const filter = array.filter((e)=> e > 2 )
console.log(filter)

// reduce

const useReduce = array.reduce((acc, cur) => acc + cur)
console.log(useReduce);

// find 
const getFind = array.find((e) => e > 2 ) //3 only give first one not all stops after first find 
console.log(getFind)

// every 
const checkEvery = array.every((e) => e >= 1 ) //loops through array check every 
console.log(checkEvery);







