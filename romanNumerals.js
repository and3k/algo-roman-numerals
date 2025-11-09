

function toRomanLazy(num) {
   
  let romanNumeralToArabic = {
      I:1,
      V:5,
      X:10,
      L:50,
      C:100,
      D:500,
      M:1000  
  }

  let romanNumeralPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    
  let output = ''
  let lazy = romanNumeralToArabic
  let order = romanNumeralPriorityOrder


  for (let i = 0; i < order.length; i++){
    let roman = order[i]
    let arabicValue = lazy[roman]
    let number = Math.floor(num / arabicValue)

    for (let i = 0; i < number; i++) {         
      output += roman   
      num -= arabicValue 
      }
    }
 return output
}

function toRoman(num) {
  let romanNumeralToArabic = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }
  
  //console.log(Object.keys(romanNumeralToArabic))
  let romanNumeralPriorityOrder = ['M','CM','D','CD','C','XC','L','XL','XL','X','IX','V','IV','I']

  let romanObj = romanNumeralToArabic
  let orderObj = romanNumeralPriorityOrder
  let romanOut = ''
  
  for (let i = 0; i < orderObj.length; i++) {
    let roman = orderObj[i];
    let arabicValue = romanObj[roman];
    let number = Math.floor(num / arabicValue);

    for (let i = 0; i < number; i++) {
      romanOut += roman;
      num -= arabicValue;
    }
  }
 
  return romanOut
}
console.log(toRoman(4))
console.log(toRoman(944))
module.exports = { toRoman, toRomanLazy };

