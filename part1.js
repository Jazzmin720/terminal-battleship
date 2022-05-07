var readlineSync = require('readline-sync');

const pressAnyKey = readlineSync.question('Press any key to start the game.'); //CAN ONLY PRESS ENTER?

let isIndex = false;








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
    console.table(grid);
  };
  createGrid(alphabet.length);
  

  //place ship in random index and strike
 const randomIndex = () => {
    let randomIndexOne = Math.floor(Math.random() * alphabet.length)//gives outer index of 1-4 for example
    let randomIndexTwo = Math.floor(Math.random() * alphabet.length)//gives outer index of 1-4 for example
    let r = randomIndexOne;
    let s = randomIndexTwo;
    let c = Math.floor(Math.random()*(alphabet.length -1 ) ) + 1; 
    let d = Math.floor(Math.random()*(alphabet.length -1) ) + 1;
    
    
    if(randomIndexOne || randomIndexTwo){
      let gridIndex = grid[r][c]
      let gridIndexTwo = grid[s][d]
      console.log(grid[r][c],grid[s][d])
    }
    let strike = readlineSync.question('Enter a location to strike.');
    if(strike == grid[r][c] || strike == grid[s][d]){
      console.log('Hit!')
       isIndex = true;
    }else if(strike !== grid[r][c] || strike !== grid[s][d]){
      while(!isIndex){
        console.log('Miss...')
        let strikeAgain = readlineSync.question('Enter a location to strike.')
        if(strikeAgain == grid[r][c] || strikeAgain == grid[s][d]){
          console.log('Hit! You have sunk a battleship. 1 remaining')//make this dynamic
           isIndex = true;
        };
      }
    }
  };
           
      
     
        
        
    
  randomIndex();
 
  


 

 










