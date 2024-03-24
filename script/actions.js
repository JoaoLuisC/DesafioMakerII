window.addEventListener("scroll", function () {
    let header = document.querySelector('.navbar');
    let headerHidden = document.querySelector('.navbar-hidden');
    headerHidden.classList.toggle('header-scroll-visible', window.scrollY > 0)
    header.classList.toggle('header-scroll', window.scrollY > 0)


})