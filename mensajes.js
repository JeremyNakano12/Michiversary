const titulos = document.querySelectorAll('.titulo');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active'); // ✨ Activamos también el botón
});

titulos.forEach(titulo => {
  titulo.addEventListener('click', () => {
    const contenido = titulo.nextElementSibling;

    // Cierra los demás
    document.querySelectorAll('.contenido').forEach(c => {
      if (c !== contenido) {
        c.style.maxHeight = null;
      }
    });

    // Alterna el actual
    if (contenido.style.maxHeight) {
      contenido.style.maxHeight = null;
    } else {
      contenido.style.maxHeight = contenido.scrollHeight + 'px';
    }
  });
});
