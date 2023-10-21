
const sales = (e, tax) =>{

  // e.reduce((acc, cur)=> acc + cur)
  
  const addPrice =  e.reduce((sum, product) => sum + (product.price * product.Qty), 0)

  const addTax = (addPrice * tax) / 100 

  const totalSalesWithTax =  addPrice + addTax;



 return `${addPrice} Total Sales + ${addTax} Taxes = ${parseFloat(totalSalesWithTax).toFixed(2)} Total Final Amount `; 
 
}

module.exports = sales; 








// const tax = (a, b)=>{
// a+b 
// }
// console.log(tax(1, 2));



