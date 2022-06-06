import {uiHandler} from "./uiHandler.js";
import {ballHandler} from "./ballHandler.js";
import {cardHandler} from "./cardHandler.js"


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
        this.displayTransliteratedStringOnSecondWindow;
    }
    
    AddGameCallLang(lang){ //takes a string
        
        this.gameCallLangs.push(lang);
    }
    
    ContinueWithQuickGameSettings(){
        
        console.log(document.querySelectorAll(".langCheckbox"));
        
        for(const chckbx of document.querySelectorAll(".langCheckbox")){
            
            if(chckbx.checked){
                
                this.AddGameCallLang(chckbx.getAttribute("data-language"));
            }
        }
        
        //this.AddGameCallLang("ojibwemowin");
        
        this.gameHandlerOwner.ballHandler.LoadBallsXToY(1,75);
        
        this.gameHandlerOwner.cardHandler.SetHeaders("Bear","Deer","Marten","Loon","Bird");
        
        this.gameHandlerOwner.cardHandler.GenerateCards(3);
        
        this.gameHandlerOwner.uiHandler.DisplayCardPrintPage();
        
        this.playAudioCalls = false;
        
        this.gameHandlerOwner.uiHandler.secondDisplayHandler.SetToDisplayTransliteratedString();
        
        this.gameHandlerOwner.uiHandler.secondDisplayHandler.SetToDisplayBingoDiagrams();
        
        this.gameHandlerOwner.uiHandler.secondDisplayHandler.SetToDisplayBingoCall();
        
//        this.gameHandlerOwner.uiHandler.DisplayCallPage();
//        
//        this.gameHandlerOwner.ballHandler.SortBallsBySeed();
    }
}

export class gameHandler {
    
    constructor(audioCallLibrary){
        
        this.gameSettingsHandler = new gameSettingsHandler(this);
        this.ballHandler = new ballHandler(this);
        this.cardHandler = new cardHandler(this);
        this.uiHandler = new uiHandler(this);
        this.audioCallLibrary = audioCallLibrary;
        this.failedAudioSources = [];
    }
    
    StartGame(){
        
        this.audioCallLibrary.InitiateLangs();
    
        this.uiHandler.DisplayGameSettingsPage();
        
        //console.log(window.location);
    }
    
    LoadCrashedGame(){
        
        
    }
    
    ProceedToCalls(){
        
        console.log("proceeded");
        
        if(confirm("Are you ready to call?")){
            
            //console.log(this);
        
            this.gameHandler.uiHandler.DisplayCallPage();
        
        }
    
        else {
        
            setTimeout(this.gameHandler.ProceedToCalls, 5000);
        
        }
        
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
