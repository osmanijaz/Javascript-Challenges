const arraySum = (array) => {
  if (array.length === 0) {
    return 0;
  } else {
    console.log(array.slice(1));
    return array[0] + arraySum(array.slice(1));
    // 1 + 2
    // 3 + 3
    // 6 + 4
    // 10 + 5
    // 15 + 0
  }
};

module.exports = arraySum;
