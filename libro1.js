// Fondo con estrellas
var transition = 40;
var dots = 12;
var lgStars = 2;
var smStars = 3;

function nJoin(n, markup) {
  var fn = typeof markup == 'function' ? markup : e => markup;
  return new Array(n).join(' ').split(' ').map(fn).join('');
}

Array.from(document.querySelectorAll('.sky-level'))
  .slice(0, -1)
  .forEach(layer => {
    layer.innerHTML = nJoin(transition, '<div></div>');
  });

var bigStars = nJoin(lgStars, `
  <span class="star star--lg">
    <span class="star__part"></span>
    <span class="star__part"></span>
  </span>
`);

var smallStars = nJoin(smStars, `
  <span class="star star--sm">
    <span class="star__part"></span>
    <span class="star__part"></span>
  </span>
`);

var dotStars = nJoin(dots, e => {
  var isBlinking = Math.random() < .33;
  var className = 'dot';
  if (isBlinking) className += ' dot--blinking';
  return `<span class="${className}"></span>`;
});

document.getElementById('stars').innerHTML += (dotStars + smallStars + bigStars);

// Botón para mostrar tips
function mostrarTip() {
  const tips = [
    "💡 Este libro se hizo con fieltro y velcro para trabajar motricidad.",
    "💡 Contiene cascabeles para estimular el oído.",
    "💡 Tiene piezas removibles para fomentar la creatividad.",
    "💡 Usa colores brillantes para captar la atención de los niños."
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip").textContent = randomTip;
}

// Botón para mostrar imágenes extra
function mostrarImagen(ruta) {
  const extra = document.getElementById("extra-content");
  extra.innerHTML = `<img src="${ruta}" alt="Detalle del libro" style="width:80%; max-width:400px; border-radius:12px; margin-top:15px;">`;
}
