document.addEventListener('DOMContentLoaded', () => {
  const circles = document.getElementsByClassName('progressive-circle');

  [...circles].forEach(circle => {
    if (circle.parentElement.dataset.multi === undefined) {
      handleSingleProgressiveCircle(circle);
      return;
    }

    const descriptionContainer = circle.parentElement.parentElement.getElementsByClassName('hobbies__description')[0];
    const title = descriptionContainer.children[0];
    const content = descriptionContainer.children[1];

    let startingPoint = 0;
    [...circle.children].forEach((partial, idx) => {
      if (idx !== 0) {
        const radius = partial.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const dataset = partial.dataset;

        partial.style.strokeDasharray = `${circumference} ${circumference}`;
        partial.style.strokeDashoffset = circumference - dataset.progress / 100 * circumference;
        partial.setAttribute('transform', `rotate(${startingPoint}, 110, 110)`);

        startingPoint += dataset.progress / 100 * 360;

        rxjs.fromEvent(partial, 'mouseover', { passive: true })
          .subscribe(() => {
            [...circle.children].find(
              it => it.classList.contains('progressive-circle__item--active')
            ).classList.remove('progressive-circle__item--active');
            partial.classList.add('progressive-circle__item--active');

            circle.nextElementSibling.children[0].src = dataset.image;
            title.innerText = dataset.title;
            content.innerText = dataset.content;
          });
      }
    });
  });

});

const handleSingleProgressiveCircle = (circle) => {
  const radius = circle.children[0].r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  circle.children[1].style.strokeDasharray = `${circumference} ${circumference}`;
  circle.children[1].style.strokeDashoffset = circumference - circle.parentElement.dataset.progress / 100 * circumference;
}
