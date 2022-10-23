export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToScection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');// pegar HREF do link clicado
    const section = document.querySelector(href); //linkar section com o HREF

    if(section){
    section.scrollIntoView({
      behavior: 'smooth',
      block:'start',
        // inline:'start'
      });
  }
}

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToScection)
  });
}

