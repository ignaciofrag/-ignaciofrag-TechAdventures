let costo_solicitud_carta = 75.05;
let costo_expedicion_por_invitado = 6.54;

// Función global para calcular el costo total
function calcularCostoTotal(numInvitados) {
  let costoTotal = costo_solicitud_carta + (costo_expedicion_por_invitado * numInvitados);
  return costoTotal.toFixed(2); // Asegura que el resultado tenga dos decimales
}
