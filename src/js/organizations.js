const hoverOrganizationTitle = (evt) => {
  evt.parentElement.children[0].children[1].style.opacity = 1;
}

const leaveOrganizationTitle = (evt) => {
  evt.parentElement.children[0].children[1].style.opacity = 0;
}
