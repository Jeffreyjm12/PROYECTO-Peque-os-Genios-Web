document.addEventListener('DOMContentLoaded', function() {
    // Elementos del menú
    const menuToggle = document.getElementById('menuToggle');
    const opcionesBarra = document.getElementById('opciones_barra');
    const barraNavegacion = document.querySelector('.barra_navegacion');
    
    // Funcionalidad del menú toggle
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita que el evento se propague al documento
        opcionesBarra.classList.toggle('activa');
        this.classList.toggle('activa');
    });
    
    // Cerrar menú al hacer clic fuera - CORRECCIÓN: Paréntesis faltante
    document.addEventListener('click', function(e) {
        if (!barraNavegacion.contains(e.target)) {
            opcionesBarra.classList.remove('activa');
            menuToggle.classList.remove('activa');
        }
    });
    
    // Desplazamiento suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                if (opcionesBarra.classList.contains('activa')) {
                    opcionesBarra.classList.remove('activa');
                    menuToggle.classList.remove('activa');
                }
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
    
    // Clase activa para la sección en vista
    const secciones = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        secciones.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.item_barra a').forEach(a => {
            a.classList.remove('activa');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('activa');
            }
        });
    });
    
    // Botón de WhatsApp con mensaje predeterminado
    const whatsappBtn = document.querySelector('.solicitar_info_boton');
    if (whatsappBtn) {
        whatsappBtn.href = "https://wa.me/51953219014?text=Hola%20Pequeños%20Genios!%20Deseo%20más%20información%20sobre%20los%20costos%20de%20matrícula%20y%20pensiones.";
    }
    
    // Efecto hover para las tarjetas
    const tarjetas = document.querySelectorAll('.tarjeta_caracteristicas, .tarjeta_mision');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        tarjeta.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Animación para el botón "Ver más fotos"
    const verMasBtn = document.querySelector('.ver_mas');
    if (verMasBtn) {
        verMasBtn.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.marginLeft = '10px';
        });
        
        verMasBtn.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.marginLeft = '5px';
        });
    }
});