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
        
        document.getElementById("header0Div").innerHTML = this.gameHandlerOwner.cardHandler.headers[0];
        document.getElementById("header1Div").innerHTML = this.gameHandlerOwner.cardHandler.headers[1];
        document.getElementById("header2Div").innerHTML = this.gameHandlerOwner.cardHandler.headers[2];
        document.getElementById("header3Div").innerHTML = this.gameHandlerOwner.cardHandler.headers[3];
        document.getElementById("header4Div").innerHTML = this.gameHandlerOwner.cardHandler.headers[4];
        
    }
    
    UpdateCallPage(headerIndex,header,content){
        
        this._AddCallToChronologicalCalls(header,content);
        
        this._AddCallToHeaderCalls(headerIndex,content);
    }
    
    _AddCallToHeaderCalls(headerIndex,content){
        
        let $displayArr = [];
        
        for(const b of this.gameHandlerOwner.ballHandler.pulledBalls){
            
            console.log(b);
            
            if(b.headerIndex == headerIndex){
                
                $displayArr.push(b.callText);
            }
        }
        
        $displayArr.sort();
        
        let $headerText = this.gameHandlerOwner.cardHandler.headers[headerIndex];
        
        document.getElementById("header"+headerIndex+"Div").innerHTML = $headerText + " " + $displayArr;
        
    }
    
    _AddCallToChronologicalCalls(header,content){
        
        let $html = document.getElementById("previousCalls").innerHTML;
        
        document.getElementById("previousCalls").innerHTML =  header + " " + content + "<br><br>" + $html;
    }
}