const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let index = 0;

function changeImage (increment) {
    index += increment;
    if (index > img.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = img.length - 1;
    }
    updateTransform();
}

function updateTransform() {
    const imgCount = img.length;
    const newIndex = ((index % imgCount) + imgCount) % imgCount; // Ensure positive index for negative values
    imgs.style.transform = `translateX(${ -newIndex * 375 }px)`;
}

rightBtn.addEventListener('click', () => {
    changeImage(1);
});

leftBtn.addEventListener('click', () => {
    changeImage(-1);
});