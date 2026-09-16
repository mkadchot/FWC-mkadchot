const balloon = document.getElementById('balloon');
let currentSize = 200;
let currentColorIndex = 0;
const colors = ['red', 'green', 'blue'];

function updateBalloon(sizeChange, reverseColor = false) {
    currentSize += sizeChange;

    if (currentSize < 200) {
        currentSize = 200;
    }

    if (currentSize > 420) {
        currentSize = 200;
        currentColorIndex = 0;
        console.log('Balloon exploded!');
    } else {
        if (reverseColor) {
            currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
        } else {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
        }
    }

    balloon.style.width = `${currentSize}px`;
    balloon.style.height = `${currentSize}px`;
    balloon.style.backgroundColor = colors[currentColorIndex];
}

balloon.addEventListener('click', () => {
    updateBalloon(10, false);
    console.log(`Clicked! Size: ${currentSize}px, Color: ${colors[currentColorIndex]}`);
});

balloon.addEventListener('mouseleave', () => {
    if (currentSize > 200) {
        updateBalloon(-5, true);
        console.log(`Mouse left! Size: ${currentSize}px, Color: ${colors[currentColorIndex]}`);
    }
});