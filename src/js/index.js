const navHeader = document.querySelector('.nav--header');
const mainContents = document.querySelectorAll('.main-contents');

mainContents.forEach(node => {
  node.style.display = 'none';
});

function handleNavHeaderClick(e) {
  if (e.target.tagName === 'LI') {
    for (let i = 0; i < e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].classList.remove('selected-nav-header');
    }
    e.target.classList.add('selected-nav-header');

    mainContents.forEach(node => {
      node.style.display = 'none';
    });

    document.getElementById(e.target.dataset.id).style.display = 'block';
  }
}

navHeader.addEventListener('click', handleNavHeaderClick);
