var transition = 40
var dots = 12
var lgStars = 2
var smStars = 3

function nJoin(n, markup) {
  var fn = typeof markup == 'function' ? markup : e => markup
  return new Array(n)
    .join(' ')
    .split(' ')
    .map(fn)
    .join('')
}

// Transition layers
Array.from(document.querySelectorAll('.sky-level'))
  .slice(0, -1)
  .forEach(layer => {
    layer.innerHTML = nJoin(transition, '<div></div>')
  })

// Stars and dots
var bigStars = nJoin(lgStars, `
  <span class="star star--lg">
    <span class="star__part"></span>
    <span class="star__part"></span>
  </span>
`)

var smallStars = nJoin(smStars, `
  <span class="star star--sm">
    <span class="star__part"></span>
    <span class="star__part"></span>
  </span>
`)

var dotStars = nJoin(dots, e => {
  var isBlinking = Math.random() < .33
  var className = 'dot'
  if (isBlinking) className += ' dot--blinking'
  return `<span class="${className}"></span>`
})

document.getElementById('stars').innerHTML += (
  dotStars + smallStars + bigStars
)
// Por ahora no se necesita JS extra
console.log("Efecto de fondo cargado correctamente ✅");


function mostrarTip() {
  const tips = [
    "💡 Usa telas de diferentes texturas como fieltro, algodón y lana.",
    "💡 Agrega sonidos con cascabeles o papel celofán dentro de bolsillos.",
    "💡 Usa colores vivos para captar la atención de los niños.",
    "💡 Incluye actividades con velcro, botones y cremalleras para motricidad fina.",
    "💡 Haz páginas con números, letras o formas geométricas."
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip").textContent = randomTip;
}


function mostrarImagen(ruta) {
  const extra = document.getElementById("extra-content");
  extra.innerHTML = `<img src="${ruta}" alt="Detalle del libro" style="width:80%; max-width:400px; border-radius:12px; margin-top:15px; box-shadow:0 4px 10px rgba(0,0,0,0.4)">`;
}


// Mostrar un tip sensorial de manera aleatoria
const tips = [
  "Usa fieltro de colores para que los niños identifiquen formas.",
  "Agrega cremalleras para mejorar la motricidad fina.",
  "Incluye sonidos suaves para estimular el oído.",
  "Combina texturas como algodón, plástico y tela.",
  "Haz juegos de contar con botones o figuras."
];

url = "https://xiotaky.github.io/pag/"
img = qrcode.make(url)
img.save("qr.png")


