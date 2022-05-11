var readlineSync = require('readline-sync');

 //CAN ONLY PRESS ENTER?

let isIndex = false;

let struckShipsArr = [];



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
      console.log(grid);
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
      //console.log(grid[r][c],grid[s][d])
    }

    
  
    const strike = () => {
      const enterLocation = readlineSync.question('Enter a location to strike.')
      
      const removeIndex = (arr) => {
        let struckShips = arr.push(enterLocation)
        
      };
      // check to see if the location was already chosen
      let checkStrike = () => {
        for(let i = 0; i < struckShipsArr.length; i++){
        if(struckShipsArr[i] == enterLocation){
          console.log('You have already chosen this location. Miss...')
          
        }
      }
    };
    //check to see how many ships are left
    //if both ships are destroyed, start over or end game
    let remainingShips = () => {
      let gridNum = 1;
      for(let i = 0; i < struckShipsArr.length; i++){
         if(struckShipsArr.includes(grid[s][d]) && struckShipsArr.includes(grid[r][c])){
         const playAgainQuestion = readlineSync.question('You have destroyed all battleships. Would you like to play again? Y/N')
         
          while(struckShipsArr.includes(grid[s][d]) && struckShipsArr.includes(grid[r][c])){
            if(playAgainQuestion == 'Y'){
              randomIndex();
            }else if(playAgainQuestion == 'N'){
              isIndex = true;
            }
           }
        
        }else if(struckShipsArr.includes(grid[r][c]) || struckShipsArr.includes(grid[s][d])){
          console.log(`You have ${gridNum} ship remaining.`)
        }
      }
    };

    
    
    
      
      while(!isIndex){
        if(enterLocation == grid[r][c] || enterLocation == grid[s][d]){
            console.log('Hit!')
            checkStrike()
            removeIndex(struckShipsArr)
            remainingShips()
            
            strike();
        }else if(strike !== grid[r][c] || strike !== grid[s][d]){
          while(!isIndex){
            console.log('Miss...')
            checkStrike()
            removeIndex(struckShipsArr)
            remainingShips()
            strike();
          }
        }
      }
    }
  strike();
}

  randomIndex();

 
    


  
    
    
  



     
        
        
    
 
 
  


 

 










 
  


 

 



  



