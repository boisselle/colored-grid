// // document.addEventListener('DOMContentLoaded', () => {
// //     const gridContainer = document.getElementById('grid-container');
// //     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33']; // Replace these with any 4 colors

// //     // Create grid items
// //     for (let i = 0; i < 100; i++) {
// //         const gridItem = document.createElement('div');
// //         gridItem.classList.add('grid-item');
// //         gridContainer.appendChild(gridItem);
// //     }

// //     // Function to change colors of grid items
// //     function changeColors() {
// //         const gridItems = document.querySelectorAll('.grid-item');
// //         gridItems.forEach(item => {
// //             const randomColor = colors[Math.floor(Math.random() * colors.length)];
// //             item.style.backgroundColor = randomColor;
// //         });
// //     }

// //     // Change colors every 500ms
// //     setInterval(changeColors, 500);

// //     // Initial color assignment
// //     changeColors();
// // });

// document.addEventListener('DOMContentLoaded', () => {
//     const gridContainer = document.getElementById('grid-container');
//     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33']; // Replace these with any 4 colors

//     // Create grid items
//     for (let i = 0; i < 100; i++) {
//         const gridItem = document.createElement('div');
//         gridItem.classList.add('grid-item');
//         gridContainer.appendChild(gridItem);
//     }

//     // Function to change colors of grid items
//     function changeColors() {
//         const gridItems = document.querySelectorAll('.grid-item');
//         gridItems.forEach(item => {
//             const randomColor = colors[Math.floor(Math.random() * colors.length)];
//             item.style.backgroundColor = randomColor;
//         });
//     }

//     // Change colors every 500ms
//     setInterval(changeColors, 500);

//     // Initial color assignment
//     changeColors();

//     // Function to change colors in a 4x4 radius
//     function changeColorsInRadius(index) {
//         const row = Math.floor(index / 10);
//         const col = index % 10;

//         const startRow = Math.max(0, row - 2);
//         const endRow = Math.min(9, row + 2);
//         const startCol = Math.max(0, col - 2);
//         const endCol = Math.min(9, col + 2);

//         const gridItems = document.querySelectorAll('.grid-item');
//         for (let r = startRow; r <= endRow; r++) {
//             for (let c = startCol; c <= endCol; c++) {
//                 const item = gridItems[r * 10 + c];
//                 const randomColor = colors[Math.floor(Math.random() * colors.length)];
//                 item.style.backgroundColor = randomColor;
//             }
//         }
//     }

//     let intervalId;
//     gridContainer.addEventListener('mouseover', (event) => {
//         if (event.target.classList.contains('grid-item')) {
//             const index = Array.from(gridContainer.children).indexOf(event.target);
//             if (intervalId) clearInterval(intervalId);
//             intervalId = setInterval(() => changeColorsInRadius(index), 250);
//         }
//     });

//     gridContainer.addEventListener('mouseout', () => {
//         if (intervalId) clearInterval(intervalId);
//     });

//     gridContainer.addEventListener('touchstart', (event) => {
//         if (event.target.classList.contains('grid-item')) {
//             const index = Array.from(gridContainer.children).indexOf(event.target);
//             if (intervalId) clearInterval(intervalId);
//             intervalId = setInterval(() => changeColorsInRadius(index), 250);
//         }
//     });

//     gridContainer.addEventListener('touchend', () => {
//         if (intervalId) clearInterval(intervalId);
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const gridContainer = document.getElementById('grid-container');
//     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33']; // Replace these with any 4 colors

//     // Function to invert color
//     function invertColor(hex) {
//         hex = hex.slice(1);
//         const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16).padStart(2, '0');
//         const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16).padStart(2, '0');
//         const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16).padStart(2, '0');
//         return `#${r}${g}${b}`;
//     }

//     // Create grid items
//     for (let i = 0; i < 100; i++) {
//         const gridItem = document.createElement('div');
//         gridItem.classList.add('grid-item');
//         gridContainer.appendChild(gridItem);
//     }

//     // Function to change colors of grid items
//     function changeColors() {
//         const gridItems = document.querySelectorAll('.grid-item');
//         gridItems.forEach(item => {
//             const randomColor = colors[Math.floor(Math.random() * colors.length)];
//             item.style.backgroundColor = randomColor;
//         });
//     }

//     // Change colors every 500ms
//     setInterval(changeColors, 500);

//     // Initial color assignment
//     changeColors();

//     // Function to change colors in a 4x4 radius with inverse colors
//     function changeColorsInRadius(index) {
//         const row = Math.floor(index / 10);
//         const col = index % 10;

//         const startRow = Math.max(0, row - 2);
//         const endRow = Math.min(9, row + 2);
//         const startCol = Math.max(0, col - 2);
//         const endCol = Math.min(9, col + 2);

//         const gridItems = document.querySelectorAll('.grid-item');
//         for (let r = startRow; r <= endRow; r++) {
//             for (let c = startCol; c <= endCol; c++) {
//                 const item = gridItems[r * 10 + c];
//                 const currentColor = window.getComputedStyle(item).backgroundColor;
//                 const hexColor = rgbToHex(currentColor);
//                 const inverseColor = invertColor(hexColor);
//                 item.style.backgroundColor = inverseColor;
//             }
//         }
//     }

//     // Function to convert RGB to Hex
//     function rgbToHex(rgb) {
//         const result = rgb.match(/\d+/g);
//         const r = parseInt(result[0]).toString(16).padStart(2, '0');
//         const g = parseInt(result[1]).toString(16).padStart(2, '0');
//         const b = parseInt(result[2]).toString(16).padStart(2, '0');
//         return `#${r}${g}${b}`;
//     }

//     let intervalId;
//     gridContainer.addEventListener('mouseover', (event) => {
//         if (event.target.classList.contains('grid-item')) {
//             const index = Array.from(gridContainer.children).indexOf(event.target);
//             if (intervalId) clearInterval(intervalId);
//             intervalId = setInterval(() => changeColorsInRadius(index), 250);
//         }
//     });

//     gridContainer.addEventListener('mouseout', () => {
//         if (intervalId) clearInterval(intervalId);
//     });

//     gridContainer.addEventListener('touchstart', (event) => {
//         if (event.target.classList.contains('grid-item')) {
//             const index = Array.from(gridContainer.children).indexOf(event.target);
//             if (intervalId) clearInterval(intervalId);
//             intervalId = setInterval(() => changeColorsInRadius(index), 250);
//         }
//     });

//     gridContainer.addEventListener('touchend', () => {
//         if (intervalId) clearInterval(intervalId);
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const gridContainer = document.getElementById('grid-container');
//     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33']; // Replace these with any 4 colors

//     // Function to invert color
//     function invertColor(hex) {
//         hex = hex.slice(1);
//         const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16).padStart(2, '0');
//         const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16).padStart(2, '0');
//         const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16).padStart(2, '0');
//         return `#${r}${g}${b}`;
//     }

//     // Create grid items
//     for (let i = 0; i < 100; i++) {
//         const gridItem = document.createElement('div');
//         gridItem.classList.add('grid-item');
//         gridContainer.appendChild(gridItem);
//     }

//     // Function to change colors of grid items
//     function changeColors() {
//         const gridItems = document.querySelectorAll('.grid-item');
//         gridItems.forEach(item => {
//             const randomColor = colors[Math.floor(Math.random() * colors.length)];
//             item.style.backgroundColor = randomColor;
//         });
//     }

//     // Change colors every 500ms
//     setInterval(changeColors, 500);

//     // Initial color assignment
//     changeColors();

//     // Function to change colors in a 4x4 radius with inverse colors
//     function changeColorsInRadius(index) {
//         const row = Math.floor(index / 10);
//         const col = index % 10;

//         const startRow = Math.max(0, row - 2);
//         const endRow = Math.min(9, row + 2);
//         const startCol = Math.max(0, col - 2);
//         const endCol = Math.min(9, col + 2);

//         const gridItems = document.querySelectorAll('.grid-item');
//         for (let r = startRow; r <= endRow; r++) {
//             for (let c = startCol; c <= endCol; c++) {
//                 const item = gridItems[r * 10 + c];
//                 const currentColor = window.getComputedStyle(item).backgroundColor;
//                 const hexColor = rgbToHex(currentColor);
//                 const inverseColor = invertColor(hexColor);
//                 item.style.backgroundColor = inverseColor;
//             }
//         }
//     }

//     // Function to convert RGB to Hex
//     function rgbToHex(rgb) {
//         const result = rgb.match(/\d+/g);
//         const r = parseInt(result[0]).toString(16).padStart(2, '0');
//         const g = parseInt(result[1]).toString(16).padStart(2, '0');
//         const b = parseInt(result[2]).toString(16).padStart(2, '0');
//         return `#${r}${g}${b}`;
//     }

//     let hoverIntervalId;
//     function startHoverInterval(index) {
//         if (hoverIntervalId) clearInterval(hoverIntervalId);
//         hoverIntervalId = setInterval(() => changeColorsInRadius(index), 250);
//     }

//     gridContainer.addEventListener('mouseover', (event) => {
//         if (event.target.classList.contains('grid-item')) {
//             const index = Array.from(gridContainer.children).indexOf(event.target);
//             startHoverInterval(index);
//         }
//     });

//     gridContainer.addEventListener('mouseout', () => {
//         if (hoverIntervalId) clearInterval(hoverIntervalId);
//     });

//     gridContainer.addEventListener('touchstart', (event) => {
//         if (event.target.classList.contains('grid-item')) {
//             const index = Array.from(gridContainer.children).indexOf(event.target);
//             startHoverInterval(index);
//         }
//     });

//     gridContainer.addEventListener('touchend', () => {
//         if (hoverIntervalId) clearInterval(hoverIntervalId);
//     });
// });

// experiment 5
// document.addEventListener('DOMContentLoaded', () => {
//     const gridContainer = document.getElementById('grid-container');
//     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33']; // Replace these with any 4 colors

//     // Function to invert color
//     function invertColor(hex) {
//         hex = hex.slice(1);
//         const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16).padStart(2, '0');
//         const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16).padStart(2, '0');
//         const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16).padStart(2, '0');
//         return `#${r}${g}${b}`;
//     }

//     // Function to convert RGB to Hex
//     function rgbToHex(rgb) {
//         const result = rgb.match(/\d+/g);
//         const r = parseInt(result[0]).toString(16).padStart(2, '0');
//         const g = parseInt(result[1]).toString(16).padStart(2, '0');
//         const b = parseInt(result[2]).toString(16).padStart(2, '0');
//         return `#${r}${g}${b}`;
//     }

//     // Create grid items
//     for (let i = 0; i < 100; i++) {
//         const gridItem = document.createElement('div');
//         gridItem.classList.add('grid-item');
//         gridContainer.appendChild(gridItem);
//     }

//     // Function to change colors of grid items
//     function changeColors() {
//         const gridItems = document.querySelectorAll('.grid-item');
//         gridItems.forEach(item => {
//             const randomColor = colors[Math.floor(Math.random() * colors.length)];
//             item.style.backgroundColor = randomColor;
//         });
//     }

//     // Change colors every 500ms
//     setInterval(changeColors, 4);

//     // Initial color assignment
//     changeColors();

//     let hoverIntervalId;
//     function startHoverInterval(index) {
//         if (hoverIntervalId) clearInterval(hoverIntervalId);

//         // Capture the initial colors of the 4x4 area
//         const row = Math.floor(index / 10);
//         const col = index % 10;
//         const startRow = Math.max(0, row - 2);
//         const endRow = Math.min(9, row + 1);
//         const startCol = Math.max(0, col - 2);
//         const endCol = Math.min(9, col + 1);

//         const gridItems = document.querySelectorAll('.grid-item');
//         const capturedColors = [];

//         for (let r = startRow; r <= endRow; r++) {
//             for (let c = startCol; c <= endCol; c++) {
//                 const item = gridItems[r * 10 + c];
//                 const currentColor = window.getComputedStyle(item).backgroundColor;
//                 const hexColor = rgbToHex(currentColor);
//                 capturedColors.push({ item, color: hexColor });
//             }
//         }

//         // Change colors every 2 seconds
//         hoverIntervalId = setInterval(() => {
//             capturedColors.forEach(({ item, color }) => {
//                 item.style.backgroundColor = invertColor(color);
//             });
//         }, 200);
//     }

//     gridContainer.addEventListener('mouseover', (event) => {
//         if (event.target.classList.contains('grid-item')) {
//             const index = Array.from(gridContainer.children).indexOf(event.target);
//             startHoverInterval(index);
//         }
//     });

//     gridContainer.addEventListener('mouseout', () => {
//         if (hoverIntervalId) clearInterval(hoverIntervalId);
//     });

//     gridContainer.addEventListener('touchstart', (event) => {
//         if (event.target.classList.contains('grid-item')) {
//             const index = Array.from(gridContainer.children).indexOf(event.target);
//             startHoverInterval(index);
//         }
//     });

//     gridContainer.addEventListener('touchend', () => {
//         if (hoverIntervalId) clearInterval(hoverIntervalId);
//     });
// });

// // expeiment 6
// document.addEventListener('DOMContentLoaded', () => {
//     const gridContainer = document.getElementById('grid-container');
//     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33']; // Replace these with any 4 colors

//     // Function to invert color
//     function invertColor(hex) {
//         hex = hex.slice(1);
//         const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16).padStart(2, '0');
//         const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16).padStart(2, '0');
//         const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16).padStart(2, '0');
//         return `#${r}${g}${b}`;
//     }

//     // Function to convert RGB to Hex
//     function rgbToHex(rgb) {
//         const result = rgb.match(/\d+/g);
//         const r = parseInt(result[0]).toString(16).padStart(2, '0');
//         const g = parseInt(result[1]).toString(16).padStart(2, '0');
//         const b = parseInt(result[2]).toString(16).padStart(2, '0');
//         return `#${r}${g}${b}`;
//     }

//     // Create grid items
//     for (let i = 0; i < 100; i++) {
//         const gridItem = document.createElement('div');
//         gridItem.classList.add('grid-item');
//         gridContainer.appendChild(gridItem);
//     }

//     // Function to change colors of grid items
//     function changeColors() {
//         const gridItems = document.querySelectorAll('.grid-item');
//         gridItems.forEach(item => {
//             const randomColor = colors[Math.floor(Math.random() * colors.length)];
//             item.style.backgroundColor = randomColor;
//         });
//     }

//     // Change colors every 500ms
//     setInterval(changeColors, 5);

//     // Initial color assignment
//     changeColors();

//     let hoverIntervalId;
//     function startHoverInterval(index) {
//         if (hoverIntervalId) clearInterval(hoverIntervalId);

//         // Capture the initial colors of the 4x4 area
//         const row = Math.floor(index / 10);
//         const col = index % 10;
//         const startRow = Math.max(0, row - 2);
//         const endRow = Math.min(9, row + 1);
//         const startCol = Math.max(0, col - 2);
//         const endCol = Math.min(9, col + 1);

//         const gridItems = document.querySelectorAll('.grid-item');
//         const capturedColors = [];

//         for (let r = startRow; r <= endRow; r++) {
//             for (let c = startCol; c <= endCol; c++) {
//                 const item = gridItems[r * 10 + c];
//                 const currentColor = window.getComputedStyle(item).backgroundColor;
//                 const hexColor = rgbToHex(currentColor);
//                 capturedColors.push({ item, color: hexColor });
//             }
//         }

//         // Change colors every 2 seconds
//         hoverIntervalId = setInterval(() => {
//             capturedColors.forEach(({ item, color }) => {
//                 item.style.backgroundColor = invertColor(color);
//             });
//         }, 2000); // Change this value to adjust the speed
//     }

//     gridContainer.addEventListener('mouseover', (event) => {
//         if (event.target.classList.contains('grid-item')) {
//             const index = Array.from(gridContainer.children).indexOf(event.target);
//             startHoverInterval(index);
//         }
//     });

//     gridContainer.addEventListener('mouseout', () => {
//         if (hoverIntervalId) clearInterval(hoverIntervalId);
//     });

//     gridContainer.addEventListener('touchstart', (event) => {
//         if (event.target.classList.contains('grid-item')) {
//             const index = Array.from(gridContainer.children).indexOf(event.target);
//             startHoverInterval(index);
//         }
//     });

//     gridContainer.addEventListener('touchend', () => {
//         if (hoverIntervalId) clearInterval(hoverIntervalId);
//     });

//     // Function to randomly move the grid container
//     function wobbleGrid() {
//         const x = Math.random() * 20 - 10; // Random value between -10 and 10
//         const y = Math.random() * 20 - 10; // Random value between -10 and 10
//         gridContainer.style.transform = `translate(${x}px, ${y}px)`;
//     }

//     // Wobble the grid every 100ms
//     setInterval(wobbleGrid, 100);
// });

//experiment 7
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33']; // Replace these with any 4 colors

    // Function to invert color
    function invertColor(hex) {
        hex = hex.slice(1);
        const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16).padStart(2, '0');
        const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16).padStart(2, '0');
        const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16).padStart(2, '0');
        return `#${r}${g}${b}`;
    }

    // Function to convert RGB to Hex
    function rgbToHex(rgb) {
        const result = rgb.match(/\d+/g);
        const r = parseInt(result[0]).toString(16).padStart(2, '0');
        const g = parseInt(result[1]).toString(16).padStart(2, '0');
        const b = parseInt(result[2]).toString(16).padStart(2, '0');
        return `#${r}${g}${b}`;
    }

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
    setInterval(changeColors, 15)

    // Initial color assignment
    changeColors();

    let hoverIntervalId;
    function startHoverInterval(index) {
        if (hoverIntervalId) clearInterval(hoverIntervalId);

        // Capture the initial colors of the 4x4 area
        const row = Math.floor(index / 10);
        const col = index % 10;
        const startRow = Math.max(0, row - 2);
        const endRow = Math.min(9, row + 1);
        const startCol = Math.max(0, col - 2);
        const endCol = Math.min(9, col + 1);

        const gridItems = document.querySelectorAll('.grid-item');
        const capturedColors = [];

        for (let r = startRow; r <= endRow; r++) {
            for (let c = startCol; c <= endCol; c++) {
                const item = gridItems[r * 10 + c];
                const currentColor = window.getComputedStyle(item).backgroundColor;
                const hexColor = rgbToHex(currentColor);
                capturedColors.push({ item, color: hexColor });
            }
        }

        // Change colors every 2 seconds
        hoverIntervalId = setInterval(() => {
            capturedColors.forEach(({ item, color }) => {
                item.style.backgroundColor = invertColor(color);
            });
        }, 2000); // Change this value to adjust the speed
    }

    gridContainer.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('grid-item')) {
            const index = Array.from(gridContainer.children).indexOf(event.target);
            startHoverInterval(index);
        }
    });

    gridContainer.addEventListener('mouseout', () => {
        if (hoverIntervalId) clearInterval(hoverIntervalId);
    });

    gridContainer.addEventListener('touchstart', (event) => {
        if (event.target.classList.contains('grid-item')) {
            const index = Array.from(gridContainer.children).indexOf(event.target);
            startHoverInterval(index);
        }
    });

    gridContainer.addEventListener('touchend', () => {
        if (hoverIntervalId) clearInterval(hoverIntervalId);
    });

    // Function to randomly move the grid container
    function wobbleGrid() {
        const x = Math.random() * 100 - 50; // Random value between -50 and 50
        const y = Math.random() * 100 - 50; // Random value between -50 and 50
        gridContainer.style.transform = `translate(${x}px, ${y}px)`;
    }

    // Wobble the grid every 100ms
    setInterval(wobbleGrid, 100);
});
