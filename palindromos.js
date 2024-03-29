function esPalindromo(str) {
  var strLimpiado = str.replace(/[\W_]/g, '').toLowerCase(); // *** Elimina caracteres especiales y pasan a minúscula
  var strReverso = strLimpiado.split('').reverse().join(''); // Invierte el string
  return strLimpiado === strReverso; // Compara el string original con el invertido
}

console.log(esPalindromo("Anita lava la tina")); //#true