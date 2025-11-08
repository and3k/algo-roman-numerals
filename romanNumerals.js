
function toRomanLazy(num) {
   let output = ''
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
    for (let i = 0; i < romanNumeralPriorityOrder.length; i++){

      let roman = romanNumeralPriorityOrder[i]
      let arabicValue = romanNumeralToArabic[roman]
      let number = Math.floor(num / arabicValue)

      for (let i = 0; i < number; i++) {         
            output += roman    // 
            num -= arabicValue // 
        
          }
    }
  return output
}

function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };
