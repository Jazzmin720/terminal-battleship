var readlineSync = require('readline-sync');

const pressAnyKey = readlineSync.question('Press any key to start the game.');
//const strike = readlineSync.question('Enter a location to strike.');
//const enterBoardSize = readlineSync.question('Enter the board size(3x3),(5x5),(10x10)');



//let locationOne = Math.floor(Math.random()*107);
//let locationTwo = Math.floor(Math.random()*66 );


//create grid
let grid = [];
let alphabet = 'abcd'.toUpperCase();



 const createGrid = (size) => { 
      let r;
      let c = 0; 
      for(r = 0; r < size; r ++){
        grid[r] = [];
        for (c = 1; c < size; c ++){
             grid[r][c] = `${alphabet[r]}${c}`
        }
    }
  };

  //place ship in random index
  
  const randomIndex = () => {
    let randomIndex = Math.floor(Math.random() * alphabet.length )//gives outer index of 1-4 for example
    const r = randomIndex
    let c = Math.floor(Math.random() * alphabet.length + 1 )
    if(randomIndex){
        let gridIndex = grid[r][c]
        console.log(grid[r][c]);
   }
  }
  

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
randomIndex();






