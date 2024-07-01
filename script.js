document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33']; // Replace these with any 4 colors

    // Create grid items
    for (let i = 0; i < 100; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }

    // Function to change colors of grid items
    function changeColors() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            item.style.backgroundColor = randomColor;
        });
    }

    // Change colors every 500ms
    setInterval(changeColors, 500);

    // Initial color assignment
    changeColors();
});
