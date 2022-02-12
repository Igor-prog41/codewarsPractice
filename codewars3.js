function mountainsOfHoiyama (width) {
  let weight = 0; 
  let step = 1;  
  for ( let i = width; i>0; i --){   
    let sumInLine = i;   
    for (let k = 1; k < step; k++){
      sumInLine += (i-k)*2;                   
      if (i-k === 1) {i = 0;};  // i-k === 1 end
    }
    step++;
     weight += sumInLine;
  }
  return weight;
}
