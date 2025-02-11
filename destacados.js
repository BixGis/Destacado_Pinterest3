document.addEventListener("DOMContentLoaded", function () {
    // Evitar cualquier acción al hacer clic en las tarjetas de destacados
    document.querySelectorAll(".destacado-card").forEach(destacado => {
        destacado.addEventListener("click", function (event) {
            event.preventDefault(); // Evita cualquier acción por defecto
            event.stopPropagation(); // Evita propagación del evento
            console.log("Click bloqueado en: ", this); // Mensaje en la consola para comprobar
        });
    });

    // También evitar acciones en las imágenes dentro de las tarjetas
    document.querySelectorAll(".destacado-card img").forEach(imagen => {
        imagen.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            console.log("Click bloqueado en la imagen: ", this);
        });
    });
});
