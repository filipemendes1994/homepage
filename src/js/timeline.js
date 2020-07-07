const scrollToSocial = () => {
  const timelineTitle = document.querySelector('.social__container').previousElementSibling.previousElementSibling;
  window.scroll({ top: timelineTitle.offsetTop - 106 });
};

/** Handle topSign on scroll */
const handleTopSignScroll = () => {
  const topSign = document.getElementsByClassName('timeline__top-sign')[0];
  const items = document.getElementsByClassName('timeline__date');
  const firstItem = document.querySelector('.timeline__date');

  const scrollHeightTimeline = topSign.parentElement.clientHeight;
  const topTimeline = topSign.parentElement.offsetTop;
  const topLimit = topTimeline - 200;
  const bottomLimit = topLimit + scrollHeightTimeline;
  const opacityColor = 'rgba(41, 49, 50, .5)';
  const normalColor = 'rgba(41, 49, 50, 1)';

  // adapt scrollTop of topSign
  rxjs.fromEvent(window, 'scroll', { passive: true })
    .pipe(
      rxjs.operators.distinctUntilChanged(),
    ).subscribe(() => {
      if (window.scrollY < topLimit) {
        topSign.style.top = `${firstItem.offsetTop}px`;
      } else if (window.scrollY > bottomLimit) {
        topSign.style.top = `${firstItem.offsetTop + scrollHeightTimeline}px`;
      } else {
        topSign.style.top = `${firstItem.offsetTop + window.scrollY - topLimit}px`;
      }

      // adapt containers opacity
      [...items].forEach(item => {
        if (item) {
          item.style.color = opacityColor;
          item.nextElementSibling.style.opacity = .5;
        }
      });
      const item = items[Math.floor((Number.parseInt(topSign.style.top) - firstItem.offsetTop) / items[1].clientHeight)];
      if (item) {
        item.style.color = normalColor;
        item.nextElementSibling.style.opacity = 1;
      }
    });
}

const handleTopSignPosition = () => {
  const topSign = document.getElementsByClassName('timeline__top-sign')[0];
  const firstItem = document.querySelector('.timeline__date');

  topSign.style.top = `${firstItem.offsetTop}px`;
  topSign.style.left = `${Math.floor(firstItem.getBoundingClientRect().x + firstItem.getBoundingClientRect().width - 6)}px`;
}

const handleSeparator = () => {
  const separator = document.querySelector('.timeline__separator');
  const nextElement = separator.nextElementSibling;
  console.log(nextElement);
  const setSeparatorPosition = (top) => separator.style.top = `${top}px`;
  setSeparatorPosition(nextElement.offsetTop - separator.clientHeight);

  rxjs.fromEvent(window, 'resize', { passive: true })
    .pipe(
      rxjs.operators.distinctUntilChanged(),
      rxjs.operators.debounceTime(200),
    ).subscribe(() => {
      setSeparatorPosition(nextElement.offsetTop - separator.clientHeight);
      handleTopSignPosition();
    });
}

if (window.location.href.endsWith('about.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    handleTopSignPosition();
    handleTopSignScroll();
    handleSeparator();
  });
}
