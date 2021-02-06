class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.token=null;
        this.pos1=false;
        this.pos2=false;
        this.pos3=false;
        this.pos4=false;
        this.pos5=false;
        this.pos6=false;
        this.pos7=false;
        this.pos8=false;
        this.pos9=false;
        this.value=true;

    }
    getPlayerCount(){
        var playerRef=database.ref('playerCount');
        playerRef.on("value",(data)=>{
            playerCount=data.val();
        })
        console.log(playerCount);
    }
    updateCount(x){
        database.ref('/').update({
            playerCount:x
        })
    }
    update(position){
    
        var playerIndex="players/player"+this.index;
        if(this.index===1){
           this.token=0;
        }
        else{this.token=1};
        database.ref(playerIndex).set({
            name:this.name,
            token:this.token,
        })
           
                   
    }
 updatePosition(position){
    if(position==="pos1"){
        this.pos1=true;
    }
    else  if(position==="pos2"){
      this.pos2=true;
  }
  else  if(position==="pos3"){
      this.pos3=true;
  }
  else  if(position==="pos4"){
      this.pos4=true;
  }
  else  if(position==="pos5"){
      this.pos5=true;
  }
  else  if(position==="pos6"){
      this.pos6=true;
  }
  else  if(position==="pos7"){
      this.pos7=true;
  }
  else  if(position==="pos8"){
      this.pos8=true;
  }
  else  if(position==="pos9"){
      this.pos9=true;
  }
  database.ref("players/player"+this.index+"/Position").update({
    pos1:this.pos1,
    pos2:this.pos2,
    pos3:this.pos3,
    pos4:this.pos4,
    pos5:this.pos5,
    pos6:this.pos6,
    pos7:this.pos7,
    pos8:this.pos8,
    pos9:this.pos9,
  })

  
 }
 getPosition(){
     database.ref("players/player"+this.index+"/Position").on("value",(data)=>{
         allPos=data.val();

     })
     console.log(allPos)
 }
}