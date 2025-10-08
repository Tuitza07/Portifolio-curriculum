window.addEventListener("load", () => {
const barras = document.querySelectorAll(".bar span");

barras.forEach(barra => {
    const larguraFinal = barra.getAttribute("data-width");
    barra.style.width = "0";
    setTimeout(() => {
        barra.style.width = larguraFinal
    }, 300);
});
});