document.addEventListener('DOMContentLoaded', (event) => {
    function actualizarBarras() {
        const rellenos = document.querySelectorAll('#rellenoHambre');
        rellenos.forEach(relleno => {
            let anchoActual = parseInt(getComputedStyle(relleno).width);
            if (anchoActual > 0) {
                let nuevoAncho = anchoActual - 1; // Disminuye en 1px
                relleno.style.width = nuevoAncho + 'px';
            }
        });
    }

    setInterval(actualizarBarras, 1000); // Actualiza cada segundo
});