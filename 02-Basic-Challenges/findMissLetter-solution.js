const missingLetter = (e) => {
  let start = e[0].charCodeAt();

  for (let i = 0; i < e.length; i++) {
    const currentLetter = e[i].charCodeAt();
    // console.log(currentLetter);

    if (currentLetter - start > 1) {
      return String.fromCharCode(start + 1);
    }

    start = currentLetter;
  }

  return start;
};

module.exports = missingLetter;
