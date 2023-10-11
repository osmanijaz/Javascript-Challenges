
const dup = (e) => {
  //
  // Array.from converts object to array
  // new Set() removes duplicate
  // return Array.from(e) // convert object to array
  // return new Set(e); //  { 'a', 'b', 'c', 'd', 'e' } remove duplicate new set array
  
// converts object to array remove duplicate in a new set array
  return Array.from(new Set(e)); // ['a', 'b', 'c', 'd', 'e']; 
}

module.exports = dup 