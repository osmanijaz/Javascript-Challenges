const too = (e) => {
  if (e === 1) {
    return 1;
  }

  console.log(e - 1);
  return e + too(e - 1);
  // 4 + (4 - 1 = 3) = 7
  // 7 + 2 = 9
  // 9 + 1 = 10
};

module.exports = too;
