// Variables globales
let clicksRestantes = 5;
let fondoActual = 0;
let fondos = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
];

// Función auxiliar para generar un ícono SVG de Lucide Icons
function getLucideSVG(iconName) {
    const iconPaths = {
        'sparkles': `<path d="M12 3v1a6 6 0 0 1 0 12v1a6 6 0 0 1 0 12v1m10-7h-1a6 6 0 0 1-12 0H2m6 10v-1a6 6 0 0 1 0-12v-1a6 6 0 0 1 0-12v-1m-10 7h1a6 6 0 0 1 12 0h1" />`,
        'paint-brush': `<path d="M18.37 2.63a2.42 2.42 0 0 0-3.44 0L2 15.56V22h6.44L21.37 8.63a2.42 2.42 0 0 0 0-3.44Z" /><path d="M14 2L2 14" /><path d="M17.5 7.5L2 14" />`,
        'rocket': `<path d="M4.5 16.5c-1.5 1.5-1.5 3.0 0 4.5s3 1.5 4.5 0l7-7c1.5-1.5 1.5-3.0 0-4.5s-3-1.5-4.5 0l-7 7Z" /><path d="m14 10 3 3L17.5 13l4.5 4.5" /><path d="m5 19 4-4" /><path d="M16 8l3-3" /><path d="M10 14 3 7" /><path d="m18 6 1-1" /><path d="m15 9 1-1" /><path d="m12 12 1-1" />`,
        'target': `<circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M22 12h-2" /><path d="M4 12H2" />`,
        'pencil': `<path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" />`,
        'hand': `<path d="M18 10a2 2 0 0 0-2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V4a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2Z" />`,
        'keyboard': `<path d="M10 8h.01" /><path d="M14 8h.01" /><path d="M18 8h.01" /><path d="M6 8h.01" /><path d="M10 12h.01" /><path d="M14 12h.01" /><path d="M18 12h.01" /><path d="M6 12h.01" /><path d="M10 16h.01" /><path d="M14 16h.01" /><path d="M6 16h.01" /><path d="M2 16h.01" /><path d="M22 16h.01" /><path d="M2 12h.01" /><path d="M22 12h.01" /><path d="M2 8h.01" /><path d="M22 8h.01" /><path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />`,
        'gift': `<path d="M20 12V7H4v5" /><path d="M20 5H4" /><path d="M12 12h8v4h-8z" /><path d="M12 12H4v4h8z" /><path d="M20 8h-6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6Z" /><path d="M4 8h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4Z" />`,
        'clock': `<circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />`,
        'star': `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />`,
        'lightbulb': `<path d="M15 14c.2-1 .7-2 1.5-3s2.7-2 3.5-4c.7-2 2-2.7 2-4V2H22" /><path d="M9 18c-2.34 1.74-4.8 2.36-6 2-1.6-.34-2-2.7-2-4v-7c0-2 2-2 2-4c0-1.2 1-2 2-2s1 .2 2 1c1.5-1.7 2.5-2 4-2Z" /><path d="M7 21h8" /><path d="M12 22a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2Z" />`,
        'award': `<circle cx="12" cy="8" r="6" /><path d="M15.47 13.06c.3-.92-.6-1.92-1.93-1.92H10.46C9.13 11.14 8.24 12.14 8.53 13.06" /><path d="M12 14c-.67 0-1-.33-1-1v-.5" /><path d="m8.53 13.06-2.52 7.02c-.3 1.05.7 2.05 1.93 2.05h7.08c1.23 0 2.23-1 1.93-2.05l-2.52-7.02Z" />`,
        'lock': `<rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />`,
        'clipboard-list': `<rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" />`,
        'check-circle': `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />`
    };

    const path = iconPaths[iconName] || ''; // Obtén el path del ícono
    return `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            ${path}
        </svg>
    `;
}

// 1. Evento load - Mensaje de bienvenida
window.addEventListener('load', function() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome-message';
    welcomeDiv.innerHTML = `¡Bienvenido! La página se ha cargado correctamente ${getLucideSVG('sparkles')}`;
    document.body.appendChild(welcomeDiv);

    // Remover mensaje después de 4 segundos
    setTimeout(() => {
        welcomeDiv.remove();
    }, 4000);
});

// 2. Evento click - Cambiar título usando addEventListener
const botonTitulo = document.getElementById('cambiarTitulo');
const titulo = document.getElementById('titulo');
const mensajeTitulo = document.getElementById('mensajeTitulo');

botonTitulo.addEventListener('click', function() {
    const nuevosTitulos = [
        `${getLucideSVG('sparkles')} ¡Título Cambiado!`,
        `${getLucideSVG('paint-brush')} JavaScript en Acción`,
        `${getLucideSVG('rocket')} Eventos Dinámicos`,
        `${getLucideSVG('sparkles')} Interactividad Total`,
        `${getLucideSVG('target')} Programación Web`
    ];

    const tituloAleatorio = nuevosTitulos[Math.floor(Math.random() * nuevosTitulos.length)];
    titulo.innerHTML = tituloAleatorio;
    titulo.classList.add('pulse');

    mensajeTitulo.innerHTML = `Título actualizado: <strong>${tituloAleatorio}</strong>`;
    mensajeTitulo.style.display = 'block';

    setTimeout(() => {
        titulo.classList.remove('pulse');
    }, 500);
});

// 3. Evento mouseover - Cambiar color del párrafo usando querySelector
const parrafo = document.querySelector('#parrafo');
const colores = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];

parrafo.addEventListener('mouseover', function() {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    parrafo.style.color = colorAleatorio;
    parrafo.style.backgroundColor = colorAleatorio + '20';
    parrafo.classList.add('glow');
});

parrafo.addEventListener('mouseout', function() {
    parrafo.style.color = '#333';
    parrafo.style.backgroundColor = 'transparent';
    parrafo.classList.remove('glow');
});

// 4. Botón para cambiar fondo
const botonFondo = document.getElementById('cambiarFondo');
botonFondo.addEventListener('click', function() {
    fondoActual = (fondoActual + 1) % fondos.length;
    document.body.style.background = fondos[fondoActual];

    // Mensaje debajo del título
    let mensajeExistente = document.getElementById('mensajeFondo');
    if (!mensajeExistente) {
        mensajeExistente = document.createElement('div');
        mensajeExistente.id = 'mensajeFondo';
        mensajeExistente.className = 'message';
        titulo.insertAdjacentElement('afterend', mensajeExistente);
    }
    mensajeExistente.innerHTML = `${getLucideSVG('paint-brush')} Fondo cambiado - Estilo ${fondoActual + 1}`;
    mensajeExistente.classList.add('pulse');

    setTimeout(() => {
        mensajeExistente.classList.remove('pulse');
    }, 500);
});

// 5. Campo de texto con eventos focus, blur y keyup
const campoTexto = document.getElementById('campoTexto');
const mensajeTexto = document.getElementById('mensajeTexto');

campoTexto.addEventListener('focus', function() {
    mensajeTexto.innerHTML = `${getLucideSVG('pencil')} <strong>Campo enfocado</strong> - ¡Empieza a escribir!`;
    mensajeTexto.style.borderColor = '#4CAF50';
    campoTexto.classList.add('glow');
});

campoTexto.addEventListener('blur', function() {
    mensajeTexto.innerHTML = `${getLucideSVG('hand')} <strong>Campo desenfocado</strong> - Gracias por escribir`;
    mensajeTexto.style.borderColor = '#2196F3';
    campoTexto.classList.remove('glow');
});

campoTexto.addEventListener('keyup', function() {
    const longitud = this.value.length;
    if (longitud > 0) {
        mensajeTexto.innerHTML = `${getLucideSVG('keyboard')} <strong>Escribiendo...</strong> Caracteres: ${longitud}`;
        if (longitud > 20) {
            mensajeTexto.innerHTML += ' <span style="color: #ff6b6b;">¡Texto largo!</span>';
        }
    } else {
        mensajeTexto.innerHTML = `${getLucideSVG('pencil')} <strong>Campo enfocado</strong> - ¡Empieza a escribir!`;
    }
});

// 6. Parte 2: Temporizadores

// setTimeout - Mensaje oculto después de 3 segundos
setTimeout(function() {
    const mensajeOculto = document.getElementById('mensajeOculto');
    mensajeOculto.innerHTML = `<div class="hidden-message">${getLucideSVG('gift')} ¡Mensaje secreto desbloqueado después de 3 segundos!</div>`;
    mensajeOculto.style.display = 'block';
}, 3000);

// setInterval - Reloj digital
function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');

    const reloj = document.getElementById('reloj');
    reloj.innerHTML = `${getLucideSVG('clock')} ${horas}:${minutos}:${segundos}`;
}

// Actualizar reloj inmediatamente y cada segundo
actualizarReloj();
const intervalReloj = setInterval(actualizarReloj, 1000);

// 7. Parte 3: Interacción modular

// Función separada para manejar clicks
function manejarClickPersonalizado() {
    const mensajes = [
        `${getLucideSVG('star')} ¡Excelente trabajo explorando JavaScript!`,
        `${getLucideSVG('target')} Los eventos hacen la web más interactiva`,
        `${getLucideSVG('lightbulb')} Cada click cuenta una historia`,
        `${getLucideSVG('rocket')} La programación es pura creatividad`,
        `${getLucideSVG('sparkles')} ¡Has dominado los eventos de JavaScript!`
    ];

    const mensajePersonalizado = document.getElementById('mensajePersonalizado');
    const contadorElement = document.getElementById('contadorClics');

    if (clicksRestantes > 0) {
        const indice = 5 - clicksRestantes;
        mensajePersonalizado.innerHTML = mensajes[indice];
        mensajePersonalizado.style.display = 'block';
        mensajePersonalizado.classList.add('pulse');

        clicksRestantes--;
        contadorElement.innerHTML = `Clics restantes: ${clicksRestantes}`;

        if (clicksRestantes === 0) {
            contadorElement.innerHTML = `${getLucideSVG('award')} ¡Completado!`;
            contadorElement.style.background = 'rgba(76, 175, 80, 0.2)';
            contadorElement.style.borderColor = '#4CAF50';
        }

        setTimeout(() => {
            mensajePersonalizado.classList.remove('pulse');
        }, 500);
    }
}

// Agregar event listener al botón modular
const botonModular = document.getElementById('botonModular');
botonModular.addEventListener('click', manejarClickPersonalizado);

// removeEventListener después de 5 clics
function verificarClicks() {
    if (clicksRestantes === 0) {
        botonModular.removeEventListener('click', manejarClickPersonalizado);
        botonModular.disabled = true;
        botonModular.textContent = 'Función Desactivada';

        // Mostrar mensaje de confirmación
        setTimeout(() => {
            const mensajePersonalizado = document.getElementById('mensajePersonalizado');
            mensajePersonalizado.innerHTML = `${getLucideSVG('lock')} <strong>Event Listener removido</strong> - La función ha sido desactivada automáticamente`;
            mensajePersonalizado.style.background = 'rgba(255, 152, 0, 0.1)';
            mensajePersonalizado.style.borderColor = '#FF9800';
        }, 1000);
    }
}

// Verificar en cada click
botonModular.addEventListener('click', function() {
    setTimeout(verificarClicks, 100);
});

// Efectos adicionales para mejorar la experiencia
document.addEventListener('DOMContentLoaded', function() {
    // Animación de entrada para el contenedor
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';

    setTimeout(() => {
        container.style.transition = 'all 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});

// Console log para demostrar la carga
console.log(`${getLucideSVG('rocket')} Eventos Interactivos - JavaScript cargado correctamente`);
console.log(`${getLucideSVG('clipboard-list')} Funcionalidades implementadas:`);
console.log(`${getLucideSVG('check-circle')} Event listeners (click, mouseover, focus, blur, keyup)`);
console.log(`${getLucideSVG('check-circle')} querySelector y getElementById`);
console.log(`${getLucideSVG('check-circle')} setTimeout y setInterval`);
console.log(`${getLucideSVG('check-circle')} Funciones modulares`);
console.log(`${getLucideSVG('check-circle')} removeEventListener automático`);