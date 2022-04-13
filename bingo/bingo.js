import {uiHandler} from "./uiHandler.js";

class ball {
    
    constructor(cardText,callText){
        
        this.cardText = cardText;
        this.callText = callText;
        this.pullSeed = null;
    }
}

class ballHandler {
    
    constructor(gameHandlerOwner){
        
        this.gameHandlerOwner = gameHandlerOwner;
        this.balls = [];
        this.pulledBalls = [];
        this.pullSeeds = [];
        
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
    
    ReturnAllPulledBalls(){
        
        for(const b of this.pulledBalls){
            
            this.balls.push[b];
        }
        
        this.pulledBalls = [];
    }
    
    _AssignBallSeeds(){
        
        this.pullSeeds = [];
        
        for(const b of this.balls){
            
            let $seed = Math.random();
            b.pullSeed = $seed;
            this.pullSeeds.push($seed);
        }
    }
    
    _GetHighestPullSeedBall(){
        
        for(const b of this.balls){
            
            if(b.pullSeed == Math.max(...this.pullSeeds)) return b
        }
    }
    
    PullBall(){
        
        this._AssignBallSeeds();
        
        let $pulledBall = this._GetHighestPullSeedBall();
        
        this.balls = this.balls.filter((e) => e != $pulledBall);
        
        this.pulledBalls.push($pulledBall);
        
        console.log($pulledBall);
        console.log(this.balls);
        console.log(this.pulledBalls);
        
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
    
    AddGameCallLang(lang){ //takes a string
        
        this.gameCallLangs.push(lang);
    }
    
    ContinueWithQuickGameSettings(){
        
        this.AddGameCallLang("ojibwemowin");
        this.gameHandlerOwner.ballHandler.LoadBallsXToY(1,50);
        
        this.gameHandlerOwner.ballHandler.PullBall();
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
    
    StartGame(){
        
        this.audioCallLibrary.InitiateLangs();
    
        this.uiHandler.DisplayGameSettingsPage();
    }
    
    TestCall(sound){
        
        this.ballHandler.LoadBallsXToY(1,50);
        console.log(this.ballHandler.balls);
        
        const $ball = new ball();
        $ball.callText = "two";
        this.gameSettingsHandler.gameCallLangs.push("ojibwemowin");
        this.ballHandler.CallBall($ball);
    }
    
    WindowTest(){
        console.log("window");
        console.log(this);
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

