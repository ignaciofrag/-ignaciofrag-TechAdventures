// Definición de costos
let costo_solicitud_carta = 75.05;
let costo_expedicion_por_invitado = 6.54;


// Función para calcular el costo total basado en el número de invitados
function calcularCostoTotal(numInvitados) {
  let costoTotal = costo_solicitud_carta + (costo_expedicion_por_invitado * numInvitados);
  return costoTotal;
}

// Calculando y mostrando el costo para 1, 2, 3, y 4 invitados
console.log(`Costo para 1 invitado: ${calcularCostoTotal(1)}€`);
console.log(`Costo para 2 invitados: ${calcularCostoTotal(2)}€`);
console.log(`Costo para 3 invitados: ${calcularCostoTotal(3)}€`);
console.log(`Costo para 4 invitados: ${calcularCostoTotal(4)}€`);

// Permitir al usuario introducir un número de invitados
let numeroDeInvitados = prompt("Introduce el número de invitados:");
console.log(`Costo para ${numeroDeInvitados} invitados: ${calcularCostoTotal(numeroDeInvitados)}€`);
