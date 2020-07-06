const scrollToSocial = () => {
  document.getElementsByClassName('social__container')[0].scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const topSign = document.getElementsByClassName('timeline__top-sign')[0];
  const items = document.getElementsByClassName('timeline__date');
  const scrollHeightTimeline = topSign.parentElement.clientHeight;
  const topTimeline = topSign.parentElement.offsetTop;
  const topLimit = topTimeline - 200;
  const bottomLimit = topLimit + scrollHeightTimeline;
  const opacityColor = 'rgba(41, 49, 50, .5)';
  const normalColor = 'rgba(41, 49, 50, 1)';

  document.addEventListener('scroll', () => {
    if (window.scrollY < topLimit || window.scrollY > bottomLimit) {
      topSign.style.top = `${window.scrollY < topLimit ? 0 : scrollHeightTimeline}px`;
      return;
    }

    // adapt scrollTop of topSign
    topSign.style.top = `${window.scrollY - topLimit}px`;

    // adapt containers opacity
    [...items].forEach(item => {
      if (item) {
        item.style.color = opacityColor;
        item.nextElementSibling.style.opacity = .5;
      }
    });
    const itemIdx = Math.floor(Number.parseInt(topSign.style.top) / 218);
    items[itemIdx].style.color = normalColor;
    items[itemIdx].nextElementSibling.style.opacity = 1;
  });
});
