class Game{
    constructor(){
this.image=loadImage("T1.png");
    }
    getState(){
        database.ref('gameState').on("value",(data)=>{
        gs=data.val();
        })
        console.log(gs)
    }
    updateState(x){
        database.ref('/').update({
            gameState:x
        })
    }
    async start(){
        console.log(gs);
        if(gs===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getPlayerCount();
            }
            
            form=new Form();
            form.display();

           
        }
    }
    play(){
        player.getPosition();
       // console.log(allPos);
        if(mousePressedOver(dot1)&&player.index===1){
            dot1.addImage(T2);
            dot1.scale=2;
          
            //player.updatePosition(pos1);
            player.updatePosition("pos1");
            
          }
          else if(mousePressedOver(dot1)&&player.index===2){
            dot1.addImage(T3);
            dot1.scale=0.5;
            
            player.updatePosition("pos1");
          }
          if(mousePressedOver(dot2)&&player.index===1){
            dot2.addImage(T2);
            dot2.scale=2;
            player.updatePosition("pos2");
            console.log("jatin");
          }
          else if(mousePressedOver(dot2)&&player.index===2){
            dot2.addImage(T3);
            dot2.scale=0.5;
            player.updatePosition("pos2");
          }
          if(mousePressedOver(dot3)&&player.index===1){
            dot3.addImage(T2);
            dot3.scale=2;
            player.updatePosition("pos3");
            console.log("jatin");
          }
          else if(mousePressedOver(dot3)&&player.index===2){
            dot3.addImage(T3);
            dot3.scale=0.5;
            player.updatePosition("pos3");
          }
          if(mousePressedOver(dot4)&&player.index===1){
            dot4.addImage(T2);
            dot4.scale=2;
            player.updatePosition("pos4");
            console.log("jatin");
          }
          else if(mousePressedOver(dot4)&&player.index===2){
            dot4.addImage(T3);
            dot4.scale=0.5;
            player.updatePosition("pos4");
          }
          if(mousePressedOver(dot5)&&player.index===1){
            dot5.addImage(T2);
            dot5.scale=2;
            player.updatePosition("pos5");
            console.log("jatin");
          }
          else if(mousePressedOver(dot5)&&player.index===2){
            dot5.addImage(T3);
            dot5.scale=0.5;
            player.updatePosition("pos5");
          }
          if(mousePressedOver(dot6)&&player.index===1){
            dot6.addImage(T2);
            dot6.scale=2;
            player.updatePosition("pos6");
            console.log("jatin");
          }
          else if(mousePressedOver(dot6)&&player.index===2){
            dot6.addImage(T3);
            dot6.scale=0.5;
            player.updatePosition("pos6");
          }
          if(mousePressedOver(dot7)&&player.index===1){
            dot7.addImage(T2);
            dot7.scale=2;
            player.updatePosition("pos7");
            console.log("jatin");
          }
          else if(mousePressedOver(dot7)&&player.index===2){
            dot7.addImage(T3);
            dot7.scale=0.5;
            player.updatePosition("pos7");
          }
          if(mousePressedOver(dot8)&&player.index===1){
            dot8.addImage(T2);
            dot8.scale=2;
            player.updatePosition("pos8");
            console.log("jatin");
          }
          else if(mousePressedOver(dot8)&&player.index===2){
            dot8.addImage(T3);
            dot8.scale=0.5;
            player.updatePosition("pos8");
          }
          if(mousePressedOver(dot9)&&player.index===1){
            dot9.addImage(T2);
            dot9.scale=2;
            player.updatePosition("pos9");
            console.log("jatin");
          }
          else if(mousePressedOver(dot9)&&player.index===2){
            dot9.addImage(T3);
            dot9.scale=0.5;
            player.updatePosition("pos9");
          }
          drawSprites();
       
    }
}