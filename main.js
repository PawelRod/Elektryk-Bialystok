const pageContainer = document.querySelector(".page");
const scrollTopBtn = document.querySelector(".menu__scrolltop");
const hamburgerBtn = document.querySelector(".menu__button");
const menu = document.querySelector(".menu");
const pageContainerCover = document.querySelector(".page__cover")

const headerHeight = document.querySelector(".header").clientHeight;
const navbarHeight = document.querySelector(".navbar").clientHeight;
const header = document.querySelector(".header");

function navButtonsFadeInOut() {
    if (window.scrollY >= navbarHeight) {
        if(window.innerWidth >= 992){
            menu.classList.remove('menu--hidden');
        }
        scrollTopBtn.classList.add('menu__scrolltop--fadein');
        hamburgerBtn.classList.add('menu__button--fadein');
    } else {
        if(window.innerWidth >= 992){
            menu.classList.add('menu--hidden');
        }
        scrollTopBtn.classList.remove('menu__scrolltop--fadein');
        hamburgerBtn.classList.remove('menu__button--fadein');
    }
}

window.addEventListener('scroll', () => {
    if ((window.scrollY <= navbarHeight) && (window.innerWidth <= 992)) {
        menu.classList.remove('menu--hidden');
    }
    navButtonsFadeInOut();
});

function pageContainerCoverDark() {
    pageContainerCover.classList.toggle('page__cover--dark');
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
            if(window.innerWidth <= 992) {
                pageContainerCoverDark();
                menuOutline();
                scrolltopMoveRight();
            }
            menuSlide();
            hamburgerCrucifix();
        });

    }
}

toggleMenuEffects();

function resetMenuEffects() {
    pageContainerCover.classList.remove('page__cover--dark');
    scrollTopBtn.classList.remove('menu__scrolltop--moveright');
    menu.classList.remove('menu--slidein');
    menu.classList.remove('menu--outline');
    menu.classList.add('menu--hidden');
    hamburgerBtn.classList.remove('menu__button--crucifix');
    if ((window.scrollY < navbarHeight) == false) {
        setTimeout(() => {
            menu.classList.remove('menu--hidden');
            scrollTopBtn.classList.add('menu__scrolltop--fadein');
        }, 600)
    }
}

window.addEventListener('resize', () => {
    if(window.innerWidth >= 992) {
        resetMenuEffects();
    } 
    else if (window.scrollY < navbarHeight || window.innerWidth <= 992) {
        menu.classList.remove('menu--hidden');
    } 
});

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(function(){ header.classList.add('header-animation'); }, 200);
    if((window.innerWidth < 992) == true) {
        menu.classList.remove('menu--hidden');
    }
});

const galleryExpanderCover = document.querySelector('.gallery__expander-cover');
const galleryExpander = document.querySelector('.gallery__expander');
const galleryExpanderText = document.querySelector('.gallery__expander p');
const galleryExpanderIcon = document.querySelector('.gallery__expander i');

function galleryExpandEffects() {
    gallery.classList.toggle("gallery--transition");
    galleryExpanderText.textContent = "Zwiń";
    galleryExpanderIcon.classList.toggle("rotate");
    gallery.style.height = (photoList.clientHeight + 300) + "px";
}

function galleryCollapseEffects() {
    galleryExpanderText.textContent = "Rozwiń";
    gallery.style.height = "900px";
}

galleryExpander.addEventListener('click', () => {
    galleryExpandEffects();
    const gallerySectionFullHeight = photoList.clientHeight + photoList.offsetTop + galleryExpanderCover.clientHeight;
    setTimeout(() => {
        window.scrollTo(0, gallery.offsetTop + (gallerySectionFullHeight - window.innerHeight));
    }, 100);
    if (gallery.clientHeight > 900) {
        galleryCollapseEffects();
        setTimeout(() => {
            window.scrollTo(0, gallery.offsetTop);
        }, 100);
    }
});

function galleryCollapseWhenWindowResized() {
    window.addEventListener('resize', () => {
        if (galleryExpanderIcon.classList.contains('rotate')) {
            galleryExpanderText.textContent = "Rozwiń";
            galleryExpanderIcon.classList.remove('rotate')
            gallery.style.height = "900px";
        }
    });
};

galleryCollapseWhenWindowResized();

const photoItem = photoList.children;
const photoUrl = document.querySelectorAll('.gallery__image')

for (let i=0; i<photoItem.length; i++) {
    photoItem[i].addEventListener('click', (e) => {
        photoModal.classList.add('modal--display');
        photoModalItem.src = photoUrl[i].src;
    })
}

photoModalExit.addEventListener('click', () => {
    photoModal.classList.remove('modal--display');
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

const banner = document.querySelector('.airc-banner');
const bannerExit = document.querySelector('.airc-banner__btn');

function bannerFadeIn() {
    banner.classList.remove("airc-banner--visible");
    setTimeout(() => {
        banner.classList.remove("airc-banner--opacity");
    }, 2000);
};
bannerFadeIn();

bannerExit.addEventListener('click', () => {
    banner.classList.add("airc-banner--visible");
});