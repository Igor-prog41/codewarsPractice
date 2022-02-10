function makeNegative(num) {
  let out ;
  num>0? out = -num :out = num;
  return out;
}


function repeatStr  (n, s) {
  let out = "";
  for (let i = 0; i < n; i++) {
    out += s;
  }
  return out;
}


function squareDigits(num){
  const  digits = num.toString().split('');
  const  digitsSquare = [];
  for (let i = 0 ; i < digits.length; i++){
    const numSquare = +digits[i] * +digits[i];
    digitsSquare.push(numSquare+'');
  }
  return +digitsSquare.join('');
}

function disemvowel(str) {
  const strToArr = str.split('');
  const strOut = [];
  for (let i=0; i< strToArr.length; i++){
    if ( strToArr[i] !== 'a' && strToArr[i] !== 'o' &&strToArr[i] !== 'u' &&strToArr[i] !== 'e' &&strToArr[i] !== 'i'
        && strToArr[i] !== 'A' && strToArr[i] !== 'O' && strToArr[i] !== 'U' && strToArr[i] !== 'E' && strToArr[i] !== 'I'){
          strOut.push(strToArr[i]);
        }
  }
  return strOut.join('');
}

 return str.replace(/[aeiou]/gi, '');
