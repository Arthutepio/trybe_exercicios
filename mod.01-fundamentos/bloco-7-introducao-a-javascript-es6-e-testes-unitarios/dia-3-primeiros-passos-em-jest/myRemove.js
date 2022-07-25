//🚀 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
//1.Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
//2.Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//3.Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
module.exports = myRemove;