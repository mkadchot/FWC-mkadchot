function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
}

// Function to generate a random RGB color
function getRandomColor() {
    const r = getRandomColorValue();
    const g = getRandomColorValue();
    const b = getRandomColorValue();
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById("change-bg-button").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});