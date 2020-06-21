const readMoreText = (id) => {
  const item = document.getElementById(id);
  const dots = item.getElementsByClassName('dots')[0];
  const moreText = item.getElementsByClassName('more')[0];
  const btnText = item.getElementsByClassName('view-more')[0];

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'View More';
    btnText.style.marginTop = '-36px';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'View less';
    btnText.style.marginTop = '-6px';
    moreText.style.display = 'inline-block';
  }
};

const scrollTestimonial = (way) => {
  const scrollContainer = document.getElementsByClassName('testimonials__container')[0];

  if (way === 'right') {
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
      scrollContainer.insertBefore(scrollContainer.children[0].cloneNode(true), null);
      scrollContainer.scrollLeft += scrollContainer.children[0].clientWidth;
      setTimeout(() => scrollContainer.removeChild(scrollContainer.children[0]), 400);
    } else {
      scrollContainer.scrollLeft += scrollContainer.children[0].clientWidth;
    }
  } else {
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.style.scrollBehavior = 'auto';
      scrollContainer.insertBefore(
        scrollContainer.children[scrollContainer.children.length - 1].cloneNode(true),
        scrollContainer.children[0]
      );
      scrollContainer.scrollLeft += scrollContainer.children[0].clientWidth;

      scrollContainer.style.scrollBehavior = 'smooth';
      scrollContainer.scrollLeft -= scrollContainer.children[0].clientWidth;
      setTimeout(() => scrollContainer.removeChild(scrollContainer.children[scrollContainer.children.length - 1]), 400);
    } else {
      scrollContainer.scrollLeft -= scrollContainer.children[0].clientWidth;
    }
  }
}