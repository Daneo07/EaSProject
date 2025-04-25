
//function creates grid
const mkGrid = function(size){
    const gameScreen = document.querySelector('.game');
    for(i=0;i < size; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        for(j=0;j<= size; j++){
            const row = document.createElement('div')
            row.classList.add('row');
            row.style.border = '2px solid black'
           
            column.appendChild(row)

        }
        gameScreen.appendChild(column);
    }
}


mkGrid(16);

console.log('hello')

const tets = document.querySelector('row');



//Selecting the divs
const test = document.getElementsByClassName('row');
const other = document.getElementsByClassName('column')

function mouseOver() {
    document.getElementsByClassName("row").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("row").style.color = "black";
  }






console.log(test);





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

