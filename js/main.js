document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
  });

  //ESTO VIENE DE UNA PAGINA PARA QUE VAYAN APARECIENDO LOS ELEMENTOS MIENTRAS VAS BAJANDO
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay: 300 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 300 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 300 });