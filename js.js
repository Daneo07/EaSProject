

const mkGrid = function(size){
    const gameScreen = document.querySelector('.game');
    for(i=0;i < size; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        for(j=0;j<= size; j++){
            const row = document.createElement('div')
            row.classList.add('row');
            row.style.border = '2px solid black'
            row.innerText = (i * size)+ j;
            column.appendChild(row)

        }
        gameScreen.appendChild(column);
    }
}


mkGrid(16);

console.log('hello')







/*
//Function to create grid
function createGrid(){
    mkRow(16);
    mkColumns(16);
}

//Create Columns
function mkColumns(numCols){
    for(i=0;i<numCols;i++){
        let col = document.createElement('div')
        col.classList.add('column');
    }
}

//Create Rows
function mkRow(numRows){
    let row = document.createElement('div')
    row.classList.add('row')
}
    */

