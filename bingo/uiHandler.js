import {gameSettingsPageHTMLString} from "./gameSettingsPageString.js";
import {callPageHTMLString} from "./callPageString.js";

export class uiHandler {
    
    constructor(gameHandlerOwner){
        
        this.gameHandlerOwner = gameHandlerOwner;
    }
    
    DisplayGameSettingsPage(){
        
        document.getElementById("mainContent").style = "font-size:26px;margin-top:75px";
        document.getElementById("mainContent").innerHTML = gameSettingsPageHTMLString;
    }
    
    DisplayCardPrintPage(){
        
    }
    
    DisplayCallPage(){
        
        document.getElementById("mainContent").style = "font-size:26px;margin-top:75px";
        document.getElementById("mainContent").innerHTML = callPageHTMLString;
    }
}