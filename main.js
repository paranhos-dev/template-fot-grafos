// troca das imagens da capa
const SEGUNDOS = 5;
const slides = [...document.querySelectorAll('.hero-slide')];
const pontos = [...document.querySelectorAll('.pontos i')];
let atual = 0;
setInterval(() => {
  slides[atual].classList.remove('on'); pontos[atual].classList.remove('on');
  atual = (atual + 1) % slides.length;
  slides[atual].classList.add('on'); pontos[atual].classList.add('on');
}, SEGUNDOS * 1000);

// lightbox
const lb = document.getElementById('lb');
const foto = document.getElementById('lb-foto');
const contador = document.getElementById('lb-contador');
let lista = [], i = 0;

function abrir(srcs, inicio = 0) { lista = srcs; i = inicio; lb.classList.add('on'); pintar(); document.body.style.overflow = 'hidden'; }
function fechar() { lb.classList.remove('on'); document.body.style.overflow = ''; }
function passo(d) { i = (i + d + lista.length) % lista.length; pintar(); }
function pintar() { foto.src = lista[i]; contador.textContent = (i + 1) + ' / ' + lista.length; }

document.querySelector('.galeria').addEventListener('click', e => {
  const alvo = e.target.closest('img'); if (!alvo) return;
  const todas = [...e.currentTarget.querySelectorAll('img')].map(n => n.getAttribute('src'));
  abrir(todas, todas.indexOf(alvo.getAttribute('src')));
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => abrir(JSON.parse(card.dataset.fotos), 0));
});

lb.addEventListener('click', e => {
  const acao = e.target.dataset.acao;
  if (acao === 'fechar') return fechar();
  if (acao === 'anterior') return passo(-1);
  if (acao === 'proxima') return passo(1);
  if (e.target === lb) fechar();
});

addEventListener('keydown', e => {
  if (!lb.classList.contains('on')) return;
  if (e.key === 'Escape') fechar();
  if (e.key === 'ArrowRight') passo(1);
  if (e.key === 'ArrowLeft') passo(-1);
});
