var form;
var gameState;
var game;
var gs=0;
var player;
var playerCount;
var database;
var T1,T2,T3,T5;
var t4;
var allPos=null;
var token;
var dot1,dot2,dot3,dot4,dot5,dot6,dot7,dot8,dot9;
var allPlayers;
//var positions=[pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9];
function preload(){
T1=loadImage("T1.png");
T2=loadImage("T2.png");
T3=loadImage("T3.png");
T5=loadImage("dot_PNG29.png")
}
function setup() {
  database=firebase.database();
  console.log(database)
  createCanvas(displayWidth,displayHeight);
 // t4=createSprite(200,200,20,20);
  //t4.addImage(T2);
 
  game=new Game();
  game.getState();
  game.start();
}

function draw() {
 // console.log("x"+mouseX);
   // console.log("y"+mouseY);
 if(playerCount===2){
   game.updateState(1);
 }
if(gs===1){
  game.play();
}
drawSprites();
}
