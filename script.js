document.addEventListener('DOMContentLoaded', () => {
    const contenido = document.getElementById('contenido');
    const enlaces = document.querySelectorAll('.menu a');

    // Cargar sección inicial
    cargarSeccion('inicio');

    // Manejar clics en el menú
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const seccion = e.target.getAttribute('href').substring(1);
            cargarSeccion(seccion);
            enlaces.forEach(a => a.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    function cargarSeccion(seccion) {
        let html = '';
        switch(seccion) {
            case 'inicio':
                html = `<div class="seccion">
                    <h1>Bienvenido al Inicio</h1>
                    <p>Esta es la página principal del proyecto.</p>
                </div>`;
                break;
            case 'fotos':
                html = `<div class="seccion">
                    <h1>Galería de Fotos</h1>
                    <img src="https://via.placeholder.com/400" alt="Ejemplo">
                </div>`;
                break;
            case 'contacto':
                html = `<div class="seccion">
                    <h1>Contacto</h1>
                    <form>
                        <input type="email" placeholder="Correo">
                        <textarea placeholder="Mensaje"></textarea>
                        <button>Enviar</button>
                    </form>
                </div>`;
                break;
        }
        contenido.innerHTML = html;
    }
});