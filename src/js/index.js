document.addEventListener("DOMContentLoaded", () => watchNavbarPosition());

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