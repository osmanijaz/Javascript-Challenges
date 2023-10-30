

const range = (start, end) => {
  if (start === end) {
    return [end];
  }

  // const number = []
  const number = range(start, end - 1);
  number.push(end);
  // [10][9,10][8,9,10][7,8,9,10]
  return number;

};

module.exports = range;
