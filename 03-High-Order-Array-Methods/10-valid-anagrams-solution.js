const anagrams = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  // return true

  const charaCount1 = {}; //store if not matching undefined
  const charaCount2 = {}; //store if not matching undefined

  for (let chara of a) {
    // console.log(chara, a);
    charaCount1[chara] = (charaCount1[chara] || 0) + 1;

    // charaCount1[chara] = (charaCount1[chara] || 0) + 1;
    // console.log(charaCount1[chara]);
  }
  console.log(charaCount1);
  
  for (let chara2 of b) {
    charaCount2[chara2] = (charaCount2[chara2] || 0) + 1;
  }

  // console.log(charaCount1);
  console.log(charaCount2);
  const obj = { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 };
  // console.log(obj.l);
  for (let name in charaCount1) {
    // console.log(charaCount1[name]);
    if (charaCount1[name] !== charaCount2[name]) {
      return false;
    }
  }
  return true;

  // for (let idx in charaCount1) {
  //   if (charaCount1[idx] !== charaCount2[idx]) {
  //     console.log(charaCount1[idx]);
  //     console.log(charaCount2[idx]);
  //     return false;
  //   }
  // }

  // return true;
};

module.exports = anagrams;
