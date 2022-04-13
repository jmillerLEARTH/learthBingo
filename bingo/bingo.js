import {uiHandler} from "./uiHandler.js";
import {ballHandler} from "./ballHandler.js";


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
        
        this.gameHandlerOwner.cardHandler.SetHeaders("bear","bird","marten","deer","loon");
        
        this.gameHandlerOwner.cardHandler.GenerateCards(3);
        
        this.gameHandlerOwner.uiHandler.DisplayCallPage();
    }
}

export class gameHandler {
    
    constructor(audioCallLibrary){
        
        this.gameSettingsHandler = new gameSettingsHandler(this);
        this.ballHandler = new ballHandler(this);
        this.cardHandler = new cardHandler(this);
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
    
    constructor(cardOwner,x,y,content){
        
        this.cardOwner = cardOwner;
        this.x = x;
        this.y = y;
        this.content = content;
    }
}

class card {
    
    constructor(cardHandlerOwner){
        
        this.cardHandlerOwner = cardHandlerOwner;
        this.nextXPlace = 0;
        this.nextYPlace = 0;
        this.spaces = [];
        
    }
    
    AssignSpace(){
        
        let $pulledBall = this.cardHandlerOwner.gameHandlerOwner.ballHandler.PullBall(false);
        
        console.log($pulledBall);
        
        $pulledBall.SetHeader(this.cardHandlerOwner.headers[this.nextYPlace]);
        
        let $space = new cardSpace(this,this.nextXPlace,this.nextYPlace,$pulledBall.cardText);
        this.spaces.push($space);
        
        this._MoveToNextYPlace();
    }
    
    _MoveToNextYPlace(){
    
        this.nextYPlace++;
        
        if(this.nextYPlace == 5){
            
            this.nextXPlace++;
            this.nextYPlace = 0;
        }
    }
}

class cardHandler {
    
    constructor(gameHandlerOwner){
        
        this.gameHandlerOwner = gameHandlerOwner;
        this.cards = [];
        this.headers = [];

    }
    
    SetHeaders(hdr0,hdr1,hdr2,hdr3,hdr4){
        
        this.headers.push(hdr0);
        this.headers.push(hdr1);
        this.headers.push(hdr2);
        this.headers.push(hdr3);
        this.headers.push(hdr4);
    }
    
    GenerateCards(num){
        
        console.warn("assigned spaces are not sorted so you might have 1 and 52 in the same column");
        
        //determine how evenly the total number of balls divides into 5 and then put them into header0Bucket, header1Bucket, etc.
        //and draw out of those
        
        for(let i=0; i<num+1; i++){
            
            let $card = new card(this);
            
            for(let s=0; s<51; s++){
                
                $card.AssignSpace();
            }
            
            this.gameHandlerOwner.ballHandler.ReturnAllPulledBalls();
        }
        
        console.log(this);
        console.log(this.gameHandlerOwner.ballHandler);
    }
}

