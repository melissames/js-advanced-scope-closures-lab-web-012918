function produceDrivingRange(blockRange){
  return function(start, end){
    let startToNum = start.slice(0,-2);
    let endToNum = end.slice(0,-2);
    let distance = endToNum - startToNum;

    if(distance > blockRange){
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`;
    }
  }
}

function produceTipCalculator(percentage){
  return function(billAmount){
    return billAmount * percentage;
  }
}
