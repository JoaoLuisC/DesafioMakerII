// navbar.js
function loadNavbar() {
    const navbarContainer = document.getElementById("header-container");

    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar a barra de navegação:', error);
        });

    var myNavbar = new bootstrap.Navbar(document.getElementById('header-container'));
}
document.addEventListener("DOMContentLoaded", loadNavbar);