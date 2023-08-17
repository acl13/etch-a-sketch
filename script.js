console.log("Hello, world");

const container = document.getElementById('container');
console.log(container);



function createGrid() {
    for(let i = 0; i < 100; i++){

        let box = document.createElement('div');
        box.textContent = "test";
        container.append(box);
    }}
    
    createGrid();


