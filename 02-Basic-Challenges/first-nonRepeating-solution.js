const nonRepeat = (obj) => {
  const emptyObj = {};
  

  for (const object of obj) {
    // console.log(object)

    emptyObj[object] = (emptyObj[object] || 0) + 1; 
    // increments the count by 1; if not, it initializes the count to 1.
    console.log(emptyObj[object], 'emptyObj');
  }

  for (const object2 of obj) {
    // console.log(object2)

    if (emptyObj[object2] === 2) {  //1 non-repeating  2 for repeating 
      return object2;
    }
  }
  return null;
};

module.exports = nonRepeat;
