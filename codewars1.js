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
