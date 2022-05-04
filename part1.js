var readlineSync = require('readline-sync');

const pressAnyKey = readlineSync.question('Press any key to start the game.');

const location = {
    isShip:true,//come back to change the boolean
    hit:true //come back to change the boolean
}
let isGridFilled = false;

//grid

const grid = [[],[],[],[],[],[],[],[],[],[]];

for(let i = 0; i < grid.length; i++){
    if(i == grid.length){
        isGridFilled = true
        
    }else{
        while(!isGridFilled){
            console.log(grid.push(location));
        }
    }
}