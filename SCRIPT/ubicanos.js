document.addEventListener('DOMContentLoaded', function() {
    // Elementos del menú
    const menuToggle = document.getElementById('menuToggle');
    const opcionesBarra = document.getElementById('opciones_barra');
    const barraNavegacion = document.querySelector('.barra_navegacion');
    
    // Funcionalidad del menú toggle
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        opcionesBarra.classList.toggle('activa');
        this.classList.toggle('activa');
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!barraNavegacion.contains(e.target)) {
            opcionesBarra.classList.remove('activa');
            menuToggle.classList.remove('activa');
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.item_barra a').forEach(enlace => {
        enlace.addEventListener('click', function() {
            if (opcionesBarra.classList.contains('activa')) {
                opcionesBarra.classList.remove('activa');
                menuToggle.classList.remove('activa');
            }
        });
    });

    // Header sticky
    const encabezado = document.querySelector('.encabezado');
    const encabezadoOffset = encabezado.offsetTop;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > encabezadoOffset) {
            encabezado.classList.add('sticky');
        } else {
            encabezado.classList.remove('sticky');
        }
    });
});