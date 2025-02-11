document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelectorAll(".destacado-card").forEach(destacado => {
        destacado.addEventListener("click", function (event) {
            event.preventDefault(); 
            event.stopPropagation(); 
        });
    });
});
