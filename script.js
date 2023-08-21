console.log("Hello, world");

const canvas = document.getElementById('canvas');


function createNewGrid() {
    const size = prompt("Grid Rows/Colums (max 100)");
    if(size < 101 && size > 0){
       // const canvas = document.getElementById('canvas');
        canvas.innerHTML = '';
        const grid = (size * size)
        canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`
        for(let i = 0; i < grid; i++){

            let box = document.createElement('div');
            box.classList.add('grid');
            canvas.appendChild(box);
            box.addEventListener('mouseover',  function(){
                box.classList.add('hover');
            } );
            console.log(size);
         } 
    } else {
        alert("Oops! Enter a number between 1 and 100");
    }}
    
function createInitialGrid (){
    canvas.style.gridTemplateColumns = `repeat(16, 1fr)`
    canvas.style.gridTemplateRows = `repeat(16, 1fr)`
    for(let i = 0; i < 256; i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid');
        canvas.appendChild(cell);
        cell.addEventListener('mouseover',  function(){
            cell.classList.add('hover');
        });
     }
}  

createInitialGrid();


const newGrid = document.getElementById('newGrid');
newGrid.addEventListener('click', createNewGrid);



