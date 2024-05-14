//===Menu Hamburger Features Start===
const menuHamburger = document.querySelector(".menu-hamburger");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-list ul li a");

// Activate Menu List
menuHamburger.addEventListener("click", function(){
    menuHamburger.classList.toggle("fa-xmark"); //Changge Icon
    navList.classList.toggle("active"); //Show Menu
})

// Close after select NavItems
navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        menuHamburger.classList.remove("fa-xmark");
        navList.classList.remove("active");
    });
});
//===Menu Hamburger Features End===

//===Galeri Features Start===
const carousel = document.querySelector(".carousel");
firstImage = carousel.querySelectorAll("img")[0];
navigationIcons = document.querySelectorAll(".galeri i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImageWidth = firstImage.clientWidth + 10;

// Mouse click navigation icon on Galeri
navigationIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if(icon.id == "left") {
            carousel.scrollLeft -= firstImageWidth;
        } else {
            carousel.scrollLeft += firstImageWidth;
        }
    })
})

// Mouse drag image and mobile toch move on Galeri
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let possitionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - possitionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
//===Galeri Features End===

//===Navigation bar autoscroll doesn't overlap with the content===
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 55; //Navbar height
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'auto',
                });
            }
        });
    }
});