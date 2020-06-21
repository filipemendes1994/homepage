const scrollToSocial = () => {
  document.getElementsByClassName('social__container')[0].scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};