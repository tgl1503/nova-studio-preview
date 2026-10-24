const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const categories = {
  marmitas: {
    title: 'Monte sua marmita',
    description: 'Escolha o tamanho, o espeto e os acompanhamentos.',
    choices: ['Arroz', 'Feijão tropeiro', 'Vinagrete', 'Espeto de carne']
  },
  espetos: {
    title: 'Escolha seus espetos',
    description: 'Veja as opções e informe a quantidade de cada uma.',
    choices: ['Carne', 'Frango', 'Kafta', 'Queijo coalho']
  },
  porcoes: {
    title: 'Escolha sua porção',
    description: 'Selecione o tamanho e os adicionais disponíveis.',
    choices: ['Pequena', 'Média', 'Grande', 'Com bacon']
  },
  baguetes: {
    title: 'Monte sua baguete',
    description: 'Escolha a opção e personalize os ingredientes.',
    choices: ['Carne e queijo', 'Completa', 'Sem cebola', 'Molho especial']
  }
};

document.querySelectorAll('.category-tab').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.category-tab').forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', String(selected));
    });
    const data = categories[button.dataset.category];
    document.querySelector('#demo-title').textContent = data.title;
    document.querySelector('#demo-description').textContent = data.description;
    document.querySelector('#demo-choices').innerHTML = data.choices.map(choice => `<span>${choice}</span>`).join('');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelector('.fake-add')?.addEventListener('click', event => {
  const original = event.currentTarget.innerHTML;
  event.currentTarget.innerHTML = 'Exemplo adicionado ✓';
  setTimeout(() => { event.currentTarget.innerHTML = original; }, 1400);
});

