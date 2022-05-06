var readlineSync = require('readline-sync');

const pressAnyKey = readlineSync.question('Press any key to start the game.');

//const enterBoardSize = readlineSync.question('Enter the board size(3x3),(5x5),(10x10)');






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
  createGrid(alphabet.length);
  console.table(grid);

  //place ship in random index
  
  const randomIndex = () => {
    let randomIndex = Math.floor(Math.random() * alphabet.length )//gives outer index of 1-4 for example
    let randomIndexTwo = Math.floor(Math.random() * alphabet.length )//gives outer index of 1-4 for example
    const r = randomIndex;
    const s = randomIndexTwo;
    let c = Math.floor(Math.random() * alphabet.length) //FIX THE UNDEFINED
    let d = Math.floor(Math.random() * alphabet.length + 1)
    
    if(randomIndex){
      let gridIndex = grid[r][c]
      let gridIndexTwo = grid[s][d]
      console.log(grid[r][c],grid[s][d]);
      const strike = readlineSync.question('Enter a location to strike.');
      //let searchIndex = array.includes(gridIndex || gridIndexTwo);
      let isIndex = false;
      
      if(strike == grid[r][c] || grid[s][d]){
        console.log('Hit!')
        let isIndex = true;
        }else if(!isIndex){
          console.log('Miss...')
          const strike = readlineSync.question('Enter a location to strike.');
         //LOOP THIS ONCE IT WORKS
        }
      
    }
  };
  randomIndex();
  //strike

 










