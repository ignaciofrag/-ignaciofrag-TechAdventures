function dividir(dividendo, divisor) {
    if (divisor === 0) {
      console.log("No se puede dividir por cero");
      return;
    }
  
    let cociente = 0;
    let suma = divisor;
  
    while (dividendo >= suma) {
      suma += divisor;
      cociente++;
    }
  
    return cociente;
  }
  
  console.log(dividir(10, 2)); // 5