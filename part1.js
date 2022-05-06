var readlineSync = require('readline-sync');

const pressAnyKey = readlineSync.question('Press any key to start the game.');
//const strike = readlineSync.question('Enter a location to strike.');
//const enterBoardSize = readlineSync.question('Enter the board size(3x3),(5x5),(10x10)');



let locationOne = Math.floor(Math.random()*107);
let locationTwo = Math.floor(Math.random()*66 );


//create grid
let grid = [];
let alphabet = 'abcd'.toUpperCase();



 const createGrid = (size) => { 
      let r;
      let c = 0; 
      for(r = 0; r < size; r ++){
        grid[r] = [];
        for (c = 0; c < size; c ++){
             grid[r][c] = `${alphabet[r]}${c + 1}`;
        }
    }
  };

  //strike



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
createGrid(alphabet.length);
console.table(grid);





