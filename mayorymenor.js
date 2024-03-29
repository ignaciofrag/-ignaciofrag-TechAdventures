function encontrarMaxMin(array) {
    let max = array[0];
    let min = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) max = array[i];
      if (array[i] < min) min = array[i];
    }
  
    return { maximo: max, minimo: min };
  }
  
  console.log(encontrarMaxMin([1, 2, 3, 4, 5])); // { maximo: 5, minimo: 1 }
  