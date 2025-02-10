document.addEventListener("DOMContentLoaded", function () {
    // Redirigir a la galería correspondiente cuando se haga clic en un destacado
    document.querySelectorAll(".destacado-card").forEach(destacado => {
        destacado.addEventListener("click", function () {
            let categoria = this.getAttribute("data-seccion");
            window.location.href = `galeria.html?categoria=${categoria}`;
        });
    });
});
