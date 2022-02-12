function mountainsOfHoiyama (width) {
  let weight = 0;
  let endOfCicle = 1;
  let step = 1;
  for ( let i = width; endOfCicle>0; i --){
    let sumInLine = i
    for (let k = i; k < i+step; k++){
      sumInLine += k*2;
    }
    step++;
    weight += sumInLine;
  }
  return weight;
}
