const anagrams = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  // return true

  const charaCount1 = {}; //store if not matching undefined
  const charaCount2 = {}; //store if not matching undefined

  for (let chara of a) {
    charaCount1[chara] = (charaCount1[chara] || 0) + 1;
    // console.log(charaCount1[chara]);
  }

  for (let chara2 of b) {
    charaCount2[chara2] = (charaCount2[chara2] || 0) + 1;
  }

  // console.log(charaCount1);
  // console.log(charaCount2);

  for (let idx in charaCount1) {
    if (charaCount1[idx] !== charaCount2[idx]) {
      console.log(charaCount1[idx]);
      console.log(charaCount2[idx]);
      return false;
    }
  }

  return true;
};

module.exports = anagrams;
