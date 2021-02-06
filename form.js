class Form{
        constructor(){
        this.title=createElement('h1');
        this.input=createInput('Name');
        this.button=createButton('PLAY');
        this.greeting=createElement('h2');
        this.reset=createButton('RESET');
        this.start=createButton('START');
        this.image1=loadImage("T2.png");
        this.image2=loadImage("T3.png");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        t4.visible=false;
        this.start.hide();
    }
    display(){
        this.title.html("Tic Tac Toe");
        this.title.position(displayWidth/2,20);
        this.input.position(500,300);
        this.button.position(500,400);
        this.reset.position(displayWidth-100,20);
      
        this.reset.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
    
        })
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.start.position(displayWidth/2+50,displayHeight/4+200);
            player.name=this.input.value();
            playerCount++;
            console.log(playerCount);
            player.index=playerCount;
            console.log(player.index);
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Hello " + player.name + " your token is:" );
            this.greeting.position(displayWidth/2-70,displayHeight/4);
            t4=createSprite(displayWidth/2+50,displayHeight/4+100,20,20);
if(playerCount===1){
   // console.log(this.image1)
    //image(this.image1,200,200,100,100);
    
  t4.addImage(this.image1);
}
else{
    t4.addImage(this.image2);
    t4.scale=0.3;
}
        }
        )
this.start.mousePressed(()=>{
    this.hide();
   
    game.updateState(1);
    game.play();
    console.log(player.index)
    
    background(T1);
    dot1=createSprite(279,159,50,50);
   
    dot2=createSprite(766,159,50,50);
    dot3=createSprite(1233,159,50,50);
    dot4=createSprite(279,436,50,50);
    dot5=createSprite(766,436,50,50);
    dot6=createSprite(1233,436,50,50);
    dot7=createSprite(279,715,50,50);
    dot8=createSprite(766,715,50,50);
    dot9=createSprite(1233,715,50,50);

   


    drawSprites();
}
)


    }
}