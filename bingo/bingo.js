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
    
    AssignSpace(x,y,content){
        
        let $space = new cardSpace(x,y,content);
        this.spaces.push($space);
    }
}

class cardHandler {
    
    constructor(gameHandlerOwner){
        
        this.gameHandlerOwner = gameHandlerOwner;
        this.cards = [];

    }
    
    SetHeaders(){
        
    }
    
    GenerateCard(){
        
        //check to make sure card has standard number of spaces
    }
}

