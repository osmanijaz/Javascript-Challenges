const name = (str) => {
  // console.log(str.substr(1));
  if (str === '') {
    return '';
  } else {
    // console.log(str.substr(1) + str.charAt(0));
    return name(str.substr(1)) + str.charAt(0);

//  name('osman') calls name('sman') + 'o'
// name('sman') calls name('man') + 's'
// name('man') calls name('an') + 'm'
// name('an') calls name('n') + 'a'
// name('n') calls name('') + 'n'

// When the base case is reached name(''), it returns an empty string. As the recursive calls unwind, the characters are combined in reverse order, resulting in 'namso'. So, the final value of the reversed variable is 'namso', which is the reversed version of the input string 'osman'.

  }
};

module.exports = name;
