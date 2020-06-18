const readMoreText = (idx) => {
  const dots = document.getElementsByClassName('dots')[idx];
  const moreText = document.getElementsByClassName('more')[idx];
  const btnText = document.getElementsByClassName('view-more')[idx];

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
  console.log(way);
  const scrollContainer = document.getElementsByClassName('testimonials__container')[0];

  if (way === 'right') {
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
      scrollContainer.insertBefore(scrollContainer.children[0], null);
    }

    scrollContainer.scrollLeft += scrollContainer.children[0].clientWidth;
  } else {
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.insertBefore(scrollContainer.children[scrollContainer.children.length - 1], scrollContainer.children[0]);
    }
    scrollContainer.scrollLeft -= scrollContainer.children[0].clientWidth;
  }
}