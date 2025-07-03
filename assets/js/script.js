// Este script gestiona las solicitudes de conexión:
// Al presionar ✓ se acepta la solicitud, aumenta el contador de conexiones y se elimina de la vista.
// Al presionar X se rechaza la solicitud y simplemente se elimina de la vista.

// Espera a que el contenido del HTML esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
  const solicitudes = document.querySelectorAll(".solicitud");

  // Selecciona los títulos que muestran los contadores
  const tituloSolicitudes = document.querySelector("h3");
  const tituloConexiones = document.querySelectorAll("h3")[1];
  
  // Inicializa los contadores de solicitudes y conexiones
  let contadorSolicitudes = solicitudes.length;
  let contadorConexiones = 500;

  // Recorre cada tarjeta de solicitud
  solicitudes.forEach((solicitud) => {
    // Obtiene los botones de Aceptar (✓) y Rechazar (X)
    const [btnAceptar, btnRechazar] = solicitud.querySelectorAll("button");

    // Acción al aceptar una solicitud
    btnAceptar.addEventListener("click", () => {
      solicitud.remove();
      contadorConexiones++;
      contadorSolicitudes--;
      actualizarContadores();
    });

    // Acción al rechazar una solicitud
    btnRechazar.addEventListener("click", () => {
      solicitud.remove();
      contadorSolicitudes--; 
      actualizarContadores();
    });
  });

  // Función que actualiza los textos de los contadores en los títulos
  function actualizarContadores() {
    tituloSolicitudes.textContent = `Solicitudes de Conexión (${contadorSolicitudes})`;
    tituloConexiones.textContent = `Tus Conexiones (${contadorConexiones}+)`;
  }
});
