const letter = (e) => {
  for (let i = 0; i < e.length - 1; i++) {
    console.log(e[i + 1].charCodeAt(0));


    // console.log(e[i].charCodeAt(0));
    // console.log(e[i].charCodeAt(0));
    // console.log(e[i + 1].charCodeAt(0));
    //  console.log(e[i].charCodeAt(0) + 1);
    //  console.log('---');
    //  console.log(e[i + 1].charCodeAt(0));


    if (e[i].charCodeAt(0) + 1 !== e[i + 1].charCodeAt(0)){
      return String.fromCharCode(e[i].charCodeAt(0) + 1)
    }
  }
};

module.exports = letter;
