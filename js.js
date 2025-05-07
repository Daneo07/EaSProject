

let sizeTest = 22
let color = 'black';

//function creates grid
const mkGrid = function(sizeTest){
    const gameScreen = document.querySelector('.game');
    gameScreen.innerHTML = ''
    for(let i=0;i < sizeTest; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        for(let j=0;j<= sizeTest; j++){
            const row = document.createElement('div')
            row.classList.add('row');
            row.style.border = '2px solid black'
           
            column.appendChild(row)
            row.addEventListener('mouseover',colorSquare)

        }
        gameScreen.appendChild(column);

    }
}



function colorSquare() {
    color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
  }


//3rd Attempt Grid size
let username;
document.getElementById('mySubmit').onclick = function () {
    let username = document.getElementById('result').value;
   let sizeTest = Number(username);
    console.log(sizeTest)  
    if(sizeTest >60){
        alert('Cant exceed 60')
        mkGrid(22)
    } else{
    mkGrid(sizeTest) 
    }
}



mkGrid(sizeTest);
console.log(mkGrid(sizeTest));





/*ReAttempt of Grid Size
const btn = document.querySelector('.btn');
let result = '';



window.onload=function getValue(e){
    const parent = e.target.closest('label');
    
    const input = parent.querySelector('input');
 
    const inputValue = input.value;
    
    let result = inputValue;
    
}



btn.addEventListener('click', getValue, false);
*/









/*Adding Button to adjust size of grid
function doIt(){
    let x = document.getElementById('result').value;
    let newGrid = mkGrid(x);
    document.getElementById(newGrid).value = newGrid

}
*/










