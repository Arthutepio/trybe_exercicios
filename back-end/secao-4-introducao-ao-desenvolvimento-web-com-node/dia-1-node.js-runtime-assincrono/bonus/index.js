function doMatch(a, b, c){
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
    return reject(new Error('Informe apenas números'));
  })
}