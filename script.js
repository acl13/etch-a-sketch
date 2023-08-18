console.log("Hello, world");



function createGrid() {
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(16, 1fr)`
    container.style.gridTemplateRows = `repeat(16, 1fr)`
    for(let i = 0; i < 256; i++){

        let box = document.createElement('div');
        container.appendChild(box);
    }}
    
    createGrid();


