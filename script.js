
document.addEventListener('DOMContentLoaded', () => {
    const contenido = document.getElementById('contenido');
    const enlaces = document.querySelectorAll('.menu a');

    const cargarSeccion = (seccion) => {
        enlaces.forEach(a => a.classList.remove('active'));
        const enlaceActivo = Array.from(enlaces).find(a => a.getAttribute('href').substring(1) === seccion);
        if (enlaceActivo) enlaceActivo.classList.add('active');

        let html = '';
        switch(seccion) {
            case 'inicio':
                html = `
                    <div class="seccion">
                        <h1>🚀 Bienvenido al Inicio</h1>
                        <p>Explora las diferentes secciones usando el menú superior.</p>
                        <p>¡Aquí encontrarás todo lo que necesitas!</p>
                    </div>
                `;
                break;
            case 'fotos':
                html = `
                    <div class="seccion">
                        <h1>📸 Galería de Fotos</h1>
                        <img src="https://source.unsplash.com/random/600x400" alt="Foto aleatoria">
                        <p>Imágenes destacadas de nuestro trabajo.</p>
                    </div>
                `;
                break;
            case 'informes':
                html = `
                    <div class="seccion">
                        <h1>📊 Informes Mensuales</h1>
                        <ul>
                            <li>Informe de ventas: $15,000</li>
                            <li>Informe de gastos: $8,200</li>
                            <li>Beneficio neto: $6,800</li>
                        </ul>
                        <p>Descarga los reportes completos en PDF.</p>
                    </div>
                `;
                break;
            case 'contacto':
                html = `
                    <div class="seccion">
                        <h1>📩 Contáctanos</h1>
                        <form>
                            <input type="email" placeholder="Tu correo electrónico" required>
                            <textarea placeholder="Escribe tu mensaje..." rows="5" required></textarea>
                            <button type="submit">Enviar Mensaje</button>
                        </form>
                    </div>
                `;
                break;
            default:
                html = `<div class="seccion"><h1>❌ Página no encontrada</h1></div>`;
        }
        contenido.innerHTML = html;
    };

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const seccion = e.target.getAttribute('href').substring(1);
            history.pushState({}, '', `#${seccion}`);
            cargarSeccion(seccion);
        });
    });

    const seccionInicial = window.location.hash.substring(1) || 'inicio';
    cargarSeccion(seccionInicial);

    window.addEventListener('popstate', () => {
        const seccion = window.location.hash.substring(1) || 'inicio';
        cargarSeccion(seccion);
    });
});