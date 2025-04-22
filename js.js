
//Sets Variables 
const container = document.getElementsByClassName('container');
const rows = document.getElementsByClassName('gridrow');
const cell = document.getElementsByClassName('cell');

//Function to create grid
function createGrid(){
    mkRow(16);
    mkCOLUMNS(16);
}

//Create Columns