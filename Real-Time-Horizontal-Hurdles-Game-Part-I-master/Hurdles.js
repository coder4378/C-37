class Hurdles{

    constructor(){
        
    }

    erect(){
        for (var i=0; i<15;i++)  {
           for (var j=0;j<4;j++){ 
            obstacle=createSprite(300+250*j,(40+35*i),10,25);
    } 
        } 
    }
}