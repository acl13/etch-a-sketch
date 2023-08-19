console.log("Hello, world");



function createGrid() {
    const size = prompt("Grid Rows/Colums (max 100)");
    if(size < 100 && size > 0){
        const canvas = document.getElementById('canvas');
        const grid = (size * size)
        canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`
        for(let i = 0; i < grid; i++){

            let box = document.createElement('div');
            box.classList.add("box");
            canvas.appendChild(box);
            console.log(size);
         }
    } else {
        alert("Oops! Enter a number between 1 and 100");
    }}
    



const newGrid = document.getElementById('newGrid');
newGrid.addEventListener('click', createGrid);

