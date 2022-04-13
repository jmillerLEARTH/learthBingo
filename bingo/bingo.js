import {uiHandler} from "./uiHandler.js";

class ball {
    
    constructor(cardText,callText){
        
        this.cardText = cardText;
        this.callText = callText;
    }
}

class ballHandler {
    
    constructor(gameHandlerOwner){
        
        this.gameHandlerOwner = gameHandlerOwner;
        this.balls = [];
        
    }
    
    LoadBallsXToY(x,y){
        
        for(let i=x; i<y+1; i++){
            
            this.LoadNewBall(i,i);
        }
        
    }
    
    LoadNewBall(cardText,callText){
        
        let $ball = new ball(cardText,callText);
        this.balls.push($ball);
    }
    
    PullBall(){
        
    }
    
    CallBall(ball){
        
        if(this.gameHandlerOwner.gameSettingsHandler.playAudioCalls){
            
            for(const l of this.gameHandlerOwner.gameSettingsHandler.gameCallLangs){
                         
                this.gameHandlerOwner.audioCallLibrary.PlayLangSound(l,ball.callText,false,true);      
            }
        }   
    }
}

class prevCallHandler {
    
    constructor(){
        
    }
    
    DisplayChronological(){
        
    }
    
    DisplayByHeader(){
        
    }
}

class gameSettingsHandler{
    
    constructor(gameHandlerOwner){
        
        this.gameHandlerOwner = gameHandlerOwner;
        this.playAudioCalls = true;
        this.gameCallLangs = [];
    }
    
    AddGameCallLang(lang){
        
        this.gameCallLangs.push(lang);
    }
}
        
//class callHandler {
//
//    constructor(gameHandlerOwner){
//        
//        this.gameHandlerOwner = gameHandlerOwner;
//    }
//    
////    PullBall(){
////        
////    }
//    
//
//}

export class gameHandler {
    
    constructor(audioCallLibrary){
        
        this.gameSettingsHandler = new gameSettingsHandler(this);
        this.ballHandler = new ballHandler(this);
        this.uiHandler = new uiHandler(this);
        this.audioCallLibrary = audioCallLibrary;
    }
    
    TestCall(sound){
        
        this.ballHandler.LoadBallsXToY(1,50);
        console.log(this.ballHandler.balls);
        
        const $ball = new ball();
        $ball.callText = "two";
        this.gameSettingsHandler.gameCallLangs.push("ojibwemowin");
        this.ballHandler.CallBall($ball);
    }
}

class cardSpace {
    
    constructor(x,y,content){
        
        this.x = x;
        this.y = y;
        this.content = content;
    }
}

class card {
    
    constructor(){
        
        this.spaces = [];
        this.headers = [];
        
    }
    
    SetHeaders(){
        
    }
    
    AssignSpace(x,y,content){
        
        let $space = new cardSpace(x,y,content);
        this.spaces.push($space);
    }
}

class cardPrinterHandler {
    
    constructor(cardHandlerOwner){
        
        this.cardHandlerOwner = cardHandlerOwner;
    }
    
    DisplayCardsToPrint(){
        
        for(const card of this.cardHandlerOwner.cards){
            
            
        }
    }
}

class cardHandler {
    
    constructor(){
        
        this.cards = [];
     
        this.cardPrinterHandler = new cardPrinterHandler(this);
    }
    
    GenerateCard(){
        
        //check to make sure card has standard number of spaces
    }
}

