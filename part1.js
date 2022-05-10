var readlineSync = require('readline-sync');

 //CAN ONLY PRESS ENTER?

let isIndex = false;

let struckShips = [];



//create grid
let grid = [];
let alphabet = 'abcd'.toUpperCase();
const pressAnyKey = readlineSync.question('Press any key to start the game.');

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
      let gridIndex = grid[r][c]      //remove this from the func
      let gridIndexTwo = grid[s][d]
      console.log(grid[r][c],grid[s][d])
    }
    
    const strike = () => {
      const enterLocation = readlineSync.question('Enter a location to strike.')
      while(!isIndex){
        if(enterLocation == grid[r][c] || enterLocation == grid[s][d]){
            console.log('Hit!')
            strike();
            
          }else if(strike !== grid[r][c] || strike !== grid[s][d]){
            while(!isIndex){
             console.log('Miss...')
             strike();
             
            
            }
        }
      }
    }
  strike();
  }

  randomIndex();
    




  
    
    
  


           
      //ADD THE DELETED SHIPS AND 'YOU'VE ALREADY PICKED THIS LOCATION
     
        
        
    
 
 
  


 

 










 
  


 

 



  /*let deletedShips = delete grid[strike]
  struckShips.push(deletedShips)
  console.log(struckShips)
  console.log('Miss...')
  let strikeAgain = readlineSync.question('Enter a location to strike.')*/






