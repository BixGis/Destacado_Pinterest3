document.addEventListener("DOMContentLoaded", function () {
    // Se eliminó la redirección para que no lleve a otra página
    document.querySelectorAll(".destacado-card").forEach(destacado => {
        destacado.addEventListener("click", function (event) {
            event.preventDefault(); // Evita cualquier acción por defecto
            console.log("Click en la tarjeta, pero sin redirigir."); // Solo muestra un mensaje en la consola
        });
    });
});
