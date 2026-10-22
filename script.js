const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const servico = document.getElementById('servico').value;
    const cidade = document.getElementById('cidade').value.trim();
    const message = `Olá, VG PERES! Meu nome é ${nome}. Preciso de: ${servico}. Cidade/bairro: ${cidade}. Gostaria de receber um orçamento.`;
    window.open(`https://wa.me/5551996668778?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}
