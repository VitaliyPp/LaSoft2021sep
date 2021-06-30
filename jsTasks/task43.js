let parking = (tIn, tOut, price) => {
  let sum = Math.floor((tOut - tIn) * parseFloat(price));

  if((tOut - tIn) - Math.floor(tOut - tIn) > 0.1) {
    sum += parseFloat(price);
  }

  return {
    'arrival': tIn,
    'departure': tOut,
    'price': price,
    'fullCost': `${sum.toFixed(2)}$`
  }
}

console.log(parking('10.00', '14.20', `3$`));
