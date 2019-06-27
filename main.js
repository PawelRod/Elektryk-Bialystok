const container = document.querySelector(".container");
const scrollTopBtn = document.querySelector(".menu__scrolltop");
const hamburgerBtn = document.querySelector(".menu__button");
const menu = document.querySelector(".menu");
const containerCover = document.querySelector(".container__cover")

function navButtonsFadeInOut() {
    
    const headerHeight = document.querySelector(".header").clientHeight;
    const navbarHeight = document.querySelector(".navbar").clientHeight;

    if (window.scrollY >= headerHeight + navbarHeight) {
        scrollTopBtn.classList.add('menu__scrolltop--fadein');
        hamburgerBtn.classList.add('menu__button--fadein');
    } else {
        scrollTopBtn.classList.remove('menu__scrolltop--fadein');
        hamburgerBtn.classList.remove('menu__button--fadein');
    }
}

window.addEventListener('scroll', () => {
    navButtonsFadeInOut();
});

function containerMoveRight() {
    container.classList.toggle('container--move');
}

function containerCoverDark() {
    containerCover.classList.toggle('container__cover--dark')
}

function scrolltopMoveRight() {
    scrollTopBtn.classList.toggle('menu__scrolltop--moveright');
}

function menuSlide() {
    menu.classList.toggle('menu--slidein');
}

function menuOutline() {
    menu.classList.toggle('menu--outline');
}

function hamburgerCrucifix() {
    hamburgerBtn.classList.toggle('menu__button--crucifix')
}

function toggleMenuEffects() {

    const menuLinks = document.querySelectorAll(".menu__link");
    const openCloseMenu = [hamburgerBtn, menuLinks[0], menuLinks[1], menuLinks[2], menuLinks[3], containerCover];

    for (let i = 0; i < openCloseMenu.length; i++) {
        openCloseMenu[i].addEventListener('click', () => {
            containerMoveRight();
            containerCoverDark();
            menuSlide();
            menuOutline();
            hamburgerCrucifix();
            scrolltopMoveRight();
        });
    }
}

toggleMenuEffects();