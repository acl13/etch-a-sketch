console.log("Hello, world");



function createGrid() {
    const canvas = document.getElementById('canvas');
    canvas.style.gridTemplateColumns = `repeat(16, 1fr)`
    canvas.style.gridTemplateRows = `repeat(16, 1fr)`
    for(let i = 0; i < 256; i++){

        let box = document.createElement('div');
        canvas.appendChild(box);
    }}
    
    createGrid();


