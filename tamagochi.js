document.addEventListener('DOMContentLoaded', (event) => {
    function actualizarHambre() {
        const rellenos = document.querySelectorAll('#rellenoHambre');
        rellenos.forEach(relleno => {
            let anchoActual = parseInt(getComputedStyle(relleno).width);
            if (anchoActual > 0) {
                let nuevoAncho = anchoActual - 1; // Disminuye en 1px
                relleno.style.width = nuevoAncho + 'px';
            }
        });
    }
    function actualizarHigiene() {
        const rellenos = document.querySelectorAll('#rellenoHigiene');
        rellenos.forEach(relleno => {
            let anchoActual = parseInt(getComputedStyle(relleno).width);
            if (anchoActual > 0) {
                let nuevoAncho = anchoActual - 1; // Disminuye en 1px
                relleno.style.width = nuevoAncho + 'px';
            }
        });
    }
    function actualizarBaño() {
        const rellenos = document.querySelectorAll('#rellenoBaño');
        rellenos.forEach(relleno => {
            let anchoActual = parseInt(getComputedStyle(relleno).width);
            if (anchoActual > 0) {
                let nuevoAncho = anchoActual - 1; // Disminuye en 1px
                relleno.style.width = nuevoAncho + 'px';
            }
        });
    }
    function actualizarAburrimiento() {
        const rellenos = document.querySelectorAll('#rellenoAburrimiento');
        rellenos.forEach(relleno => {
            let anchoActual = parseInt(getComputedStyle(relleno).width);
            if (anchoActual > 0) {
                let nuevoAncho = anchoActual - 1; // Disminuye en 1px
                relleno.style.width = nuevoAncho + 'px';
            }
        });
    }

    setInterval(actualizarHambre, 2000); // Actualiza cada segundo
    setInterval(actualizarHigiene, 3000); // Actualiza cada segundo
    setInterval(actualizarBaño, 1000); // Actualiza cada segundo
    setInterval(actualizarAburrimiento, 5000); // Actualiza cada segundo
});

var iframe = document.getElementById('inventario');
var inventario = iframe.contentDocument || iframe.contentWindow.document;

// Acceder a elementos dentro del iframe
var elementoInterno = doc.getElementById('inventario');