const projectsList = document.querySelector('.projects-list');

function slideRight() {
let projectTileWidth = document.querySelector('.project').getBoundingClientRect().width;
projectsList.scrollTo({left: projectsList.scrollLeft + projectTileWidth + 60});
}

function initSlider() {
projectsList.addEventListener('click', slideRight);
// Si on veut avoir un effet excentré
// Si on veut centrer notre caroussel
// projectsList.scrollLeft = projectTileWidth / 2 + 30;
projectsList.scrollLeft = document.querySelector('.project').getBoundingClientRect().width - 80;
}