const pageContainer = document.querySelector(".page");
const scrollTopBtn = document.querySelector(".menu__scrolltop");
const hamburgerBtn = document.querySelector(".menu__button");
const menu = document.querySelector(".menu");
const pageContainerCover = document.querySelector(".page__cover")

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

function pageContainerCoverDark() {
    pageContainerCover.classList.toggle('page__cover--dark')
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
    hamburgerBtn.classList.toggle('menu__button--crucifix');
}

function hamburgerNavbarMobileCrucifix() {
        hamburgerBtn.classList.toggle('menu__button--crucifix');
}

function toggleMenuEffects() {

    const menuLinks = document.querySelectorAll(".menu__link");
    const openCloseMenu = [hamburgerBtn, menuLinks[0], menuLinks[1], menuLinks[2], menuLinks[3], pageContainerCover];

    for (let i = 0; i < openCloseMenu.length; i++) {
        openCloseMenu[i].addEventListener('click', () => {
            pageContainerCoverDark();
            menuSlide();
            menuOutline();
            hamburgerCrucifix();
            scrolltopMoveRight();
        });
        
    }
}

toggleMenuEffects();

const galleryExpander = document.querySelector('.gallery__expander');

galleryExpander.addEventListener('click', () => {
    gallery.style.height = (photoList.clientHeight + 250) + "px";
    if (gallery.clientHeight > 900) {
        gallery.style.height = "900px";
    }
})

const photoItem = photoList.children;
const photoUrl = document.querySelectorAll('.gallery__image')

for (let i=0; i<photoItem.length; i++) {
    photoItem[i].addEventListener('click', (e) => {
        photoModal.classList.add('modal__photo-box--display');
        photoModalItem.src = photoUrl[i].src;
    })
}

photoModalExit.addEventListener('click', () => {
    photoModal.classList.remove('modal__photo-box--display');
});

const masonry = new Macy({
    container: '.gallery__container',
    mobileFirst: true,
    columns: 2,
    breakAt: {
        576: 3,
        360: 2
    },
    margin: {
        x: 20,
        y: 20,
    }
});