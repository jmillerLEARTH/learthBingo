class ball {
    
    constructor(){
        
        ball.cardText;
        ball.callText;
        ball.soundFunction;
    }
}

class ballHandler {
    
    constructor(){
        
        balls = [];
        
    }
    
    LoadNewBall(){
        
        
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
        
class callHandler {

    constructor(gameHandlerOwner){
        
        this.gameHandlerOwner = gameHandlerOwner;
    }
    
    PullBall(){
        
    }
    
    CallBall(ball){
        
        if(this.gameHandlerOwner.gameSettingsHandler.playAudioCalls){
            
            for(const l of this.gameHandlerOwner.gameSettingsHandler.gameCallLangs){
                
                console.warn("callHandler.CallBall needs to be able to PlayLangSound from English ball.callText since the ball doesn't know the in-language name of the call")
             
                this.gameHandlerOwner.audioCallLibrary.PlayLangSound(l,ball.callText);
                
            }
        }
        
    }
}

export class gameHandler {
    
    constructor(audioCallLibrary){
        
        this.gameSettingsHandler = new gameSettingsHandler(this);
        this.callHandler = new callHandler(this);
        this.audioCallLibrary = audioCallLibrary;
    }
    
    TestCall(sound){
        
        const $ball = new ball();
        $ball.callText = "bezhig";
        this.gameSettingsHandler.gameCallLangs.push("ojibwemowin");
        this.callHandler.CallBall($ball);
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

