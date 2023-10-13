
const random = ()=>{
  return Math.floor(Math.random() * 15)
}


const dice = (e) => {

//  console.log(random(), 'first') 
//  console.log(random(), 'second') 

 const firstNum = random()
 const secondNum = random()

 const plus = firstNum + secondNum;

 console.log(plus, 'answer');
 
 let result = ''
 let array = []


 if (plus === 7 || plus === 11 || plus === 3 || plus === 15) {
   result = 'You Win';
 } else if (plus === 2 || plus === 3 || plus === 12) {
   result = 'You Lose';
 } else {
   result = 'Roll Again';
 }

 array.push({
   firstNum,
   secondNum,
   plus,
   result,
 });


 return array  

}



module.exports  = dice 