const totalImages = 192;
const imagesPath = './assets/imgs/water/';
let currentIndex = 0;
let forward = true; // Variável para controlar a direção
const section = document.querySelector('.stopmotion-section');

function preloadImages() {
    for (let i = 0; i < totalImages; i++) {
        const paddedIndex = String(i).padStart(3, '0');
        const img = new Image();
        img.src = `${imagesPath}water_${paddedIndex}.jpg`;
    }
}

function changeBackgroundImage() {
    const paddedIndex = String(currentIndex).padStart(3, '0');
    const imageUrl = `${imagesPath}water_${paddedIndex}.jpg`;
    section.style.backgroundImage = `url(${imageUrl})`;

    if (forward) {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = totalImages - 1;
            forward = false; // Troca a direção para trás
        }
    } else {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 0;
            forward = true; // Troca a direção para frente
        }
    }
}

preloadImages();
setInterval(changeBackgroundImage, 8); // Change image every 10 milliseconds
changeBackgroundImage(); // Immediately change the image when the page loads
