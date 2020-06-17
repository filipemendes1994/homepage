document.addEventListener("DOMContentLoaded", () => {
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
        navbar.classList.add("navbar--sticky");
      } else {
        navbar.classList.remove("navbar--sticky");
      }
    });
}

const hoverOrganizationTitle = (evt) => {
  evt.parentElement.children[0].children[1].style.opacity = 1;
}

const leaveOrganizationTitle = (evt) => {
  evt.parentElement.children[0].children[1].style.opacity = 0;
}


const quotes = [
  "The Internet?  Is that thing still around?",
  "The Web is like a dominatrix.  Everywhere I turn, I see little buttons ordering me to Submit.",
  "Any fool can use a computer.  Many do.",
  "Don’t worry if it doesn’t work right.  If everything did, you’d be out of a job.",
  "I don’t care if it works on your machine!  We are not shipping your machine!"
];

const randomQuote = () => {
  const randomQuoteDiv = document.getElementById('randomQuote');
  randomQuoteDiv.innerText = quotes[Math.floor(Math.random() * 5)];
}