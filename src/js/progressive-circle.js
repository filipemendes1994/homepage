document.addEventListener('DOMContentLoaded', () => {
  const circles = document.getElementsByClassName('progressive-circle');
  const radius = circles[0].children[0].r.baseVal.value;
  const circumference = radius * 2 * Math.PI;

  [...circles].forEach(circle => {
    circle.children[1].style.strokeDasharray = `${circumference} ${circumference}`;
    circle.children[1].style.strokeDashoffset = circumference - circle.parentElement.dataset.progress / 100 * circumference;
  });
});