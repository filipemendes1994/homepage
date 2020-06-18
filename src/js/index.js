document.addEventListener('DOMContentLoaded', () => {
  document.getElementsByClassName('content')[0].style.opacity = 1;
  document.getElementsByClassName('navbar__filler')[0].style.opacity = 1;
  watchNavbarPosition();
  randomQuote();
});

const watchNavbarPosition = () => {
  const navbar = document.getElementsByClassName('navbar')[0];
  const offsetTop = navbar.offsetTop;

  rxjs.fromEvent(window, 'scroll', { passive: true })
    .pipe(
      rxjs.operators.filter(
        () =>
          window.pageYOffset >= offsetTop && !navbar.classList.contains('navbar--sticky') ||
          window.pageYOffset < offsetTop && navbar.classList.contains('navbar--sticky')
      )
    )
    .subscribe(() => {
      if (window.pageYOffset >= offsetTop) {
        navbar.classList.add('navbar--sticky');
      } else {
        navbar.classList.remove('navbar--sticky');
      }
    });
}

const mapColorsPages = {
  'about.html': '#23B5D3',
  'projects.html': '#83A0A0'
};

const transitionToPage = (location) => {
  const navbar = document.getElementsByClassName('navbar')[0];
  navbar.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  const content = document.getElementsByClassName('content')[0];
  content.style.opacity = 0;

  document.querySelector('html').style.backgroundColor = mapColorsPages[location];
  const body = document.querySelector('body');
  body.style.backgroundColor = mapColorsPages[location];

  const navbarFiller = document.getElementsByClassName('navbar__filler')[0];
  navbarFiller.style.opacity = 0;
  navbarFiller.style.backgroundColor = mapColorsPages[location];

  const navbarBtns = document.getElementsByClassName('navbar__btn');
  [...navbarBtns].forEach(btn => btn.style.color = '#293132');

  setTimeout(() => window.location.href = location, 500);
};

const quotes = [
  'The Internet?  Is that thing still around?',
  'The Web is like a dominatrix.  Everywhere I turn, I see little buttons ordering me to Submit.',
  'Any fool can use a computer.  Many do.',
  'Don’t worry if it doesn’t work right.  If everything did, you’d be out of a job.',
  'I don’t care if it works on your machine!  We are not shipping your machine!'
];

const randomQuote = () => {
  const randomQuoteDiv = document.getElementById('randomQuote');
  randomQuoteDiv.innerText = quotes[Math.floor(Math.random() * 5)];
}