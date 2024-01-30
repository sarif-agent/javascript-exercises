const removeFromArray = function (arr, ...values) {
  for (let i = 0; i < values.length; i++) {
    let index = arr.indexOf(values[i]);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

// ...values rest parametresi olarak kullanılıyor. bu sayede bir veya birden fazla değeri bir arrayden çıkarmak istediğimde tek tek her value için bir parametre oluşturmakla uğraşmak zorunda değilim. aynı zamanda .length metoduyla bir loop yazıp işin içinden sıyrılabilirim.

// REST parametresinden önce bulduğum çözüm:

// const removeFromArray = function (arr, value, value2) {
//   let index = arr.indexOf(value);
//   let index2 = arr.indexOf(value2);
//   if (index > -1 && index2 > -1) {
//     arr.splice(index, 1)
//     arr.splice(index2, 1)
//   }
//   return arr;
// }

// removeFromArray([1, 2, 3, 4], 3, 2)