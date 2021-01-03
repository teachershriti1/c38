var backgroundImg;
var gameState=0;
var playerCount;
var allPlayers;
var distance=0;
var cars,car1,car2,car3,car4;
//var display_position=0;
var database,form,game,player;
function setup(){
    createCanvas(displayWidth-20,displayHeight-30)
    database=firebase.database();
    game=new Game()
    game.getState()
    game.start();

    
}
function draw(){
    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }



}
