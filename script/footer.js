// footer.js
function loadFooter() {
    const navbarContainer = document.getElementById("footer-container");

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar a barra de navegação:', error);
        });
}
document.addEventListener("DOMContentLoaded", loadFooter);