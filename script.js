const goose = document.getElementById("goose");
const box = document.getElementById("message-box");

function runAnimation() {

    // posição inicial sempre zerada
    goose.style.left = "-200px";
    box.style.left = "-300px";

    // centro da caixa
    const center = (window.innerWidth / 2) - (box.offsetWidth / 2);

    // pato aparece
    setTimeout(() => {
        goose.style.left = "40px";
        box.style.left = "120px";
    }, 300);

    // pato empurra até o centro
    setTimeout(() => {
        goose.style.left = (center - goose.offsetWidth * 0.8) + "px";
        box.style.left = center + "px";
    }, 2500);

    // pato vai embora
    setTimeout(() => {
        goose.style.transition = "left 3s linear";
        goose.style.left = "-220px";
    }, 5200);
}

runAnimation();

