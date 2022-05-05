var readlineSync = require('readline-sync');

const pressAnyKey = readlineSync.question('Press any key to start the game.');



let locationOne = Math.floor(Math.random()*107);
let locationTwo = Math.floor(Math.random()*66 );


//create grid
let grid = [];


  function createGrid(size){  
      for(let i = 0; i < size; i ++){
        grid[i] = []
        console.log(grid[i]);
    }
  }

/*function randomInd (){
    let i = 0
   grid[i] = locationOne
   console.log(grid[i]);
}
function randomIndTwo (){
    let j = 0
   grid[j] = locationTwo
   console.log(grid[j]);
}
let ships = [
    {location:, hits:},
    {location:, hits:}
]*/

createGrid(9);




