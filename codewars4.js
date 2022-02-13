function countSheeps(arrayOfSheep) {
  return arrayOfSheep.map(sheep =>  { if (sheep === true) return sheep ;}).length;
}
