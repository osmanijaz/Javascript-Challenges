const car = (e) => {

const miles = e.reduce((acc, cur) => acc + cur.milage, 0)

// const avgMilesCars = miles / e.length

const highestMilesCar = e.reduce((acc, cur) => (acc.milage > cur.milage ? cur : acc ) , e[0])   


return highestMilesCar;


}

module.exports = car