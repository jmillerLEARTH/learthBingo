import {gameSettingsPageHTMLString} from "./gameSettingsPageString.js";
import {callPageHTMLString} from "./callPageString.js";

export class uiHandler {
    
    constructor(gameHandlerOwner){
        
        this.gameHandlerOwner = gameHandlerOwner;
        this.currentCallIndex = 0;
    }
    
    DisplayGameSettingsPage(){
        
        document.getElementById("mainContent").style = "font-size:26px;margin-top:75px";
        document.getElementById("mainContent").innerHTML = gameSettingsPageHTMLString;
    }
    
    DisplayCardPrintPage(){
        
        let $displayHTML = "";
        
        for(const ca of this.gameHandlerOwner.cardHandler.cards){
            
            $displayHTML = $displayHTML + this._SetHeaderHTML();
            
            $displayHTML = $displayHTML + this._SetRowsHTML(ca);
            
            $displayHTML = $displayHTML + "</tbody></table></div>";
        }
        
        document.getElementById("mainContent").innerHTML = $displayHTML;
        
        setTimeout(this.gameHandlerOwner.ProceedToCalls, 150);
    }
    
    _GetLongestWordLength(string){
    
        var splitWordsArray = string.replace("-<br>"," ");
        splitWordsArray= splitWordsArray.split(" ");

        var letterCount = 0;

        for(var i = 0; i < splitWordsArray.length; i++){

            if(splitWordsArray[i].length > letterCount){

                letterCount = splitWordsArray[i].length;

            }

        }

        return letterCount;
    
    }

    _TextScaleSelector(text) {

        //as the multiplier below does down, longer words will be scaled smaller
        var maxTextScaling = 0.78*(20/getLongestWordLength(text));
        if(maxTextScaling > 2.8){maxTextScaling = 2.8}
        //as the dividend below goes up, text will be allowed to scale larger
        textScaling = 33/text.length;
        if(textScaling > maxTextScaling){textScaling = maxTextScaling;}
        return textScaling;

    }
    
    _GetContentSize(content){
        
        if(String(content).length <= 3){
            
            return 90;
        }
        else{
            
            return this._TextScaleSelector(content);
        }
    }
    
    _SetHeaderHTML(){
        
        let bingoTableHTML = `<div style="page-break-after: always"><table><tr>`;
        
        for(var h=0; h < this.gameHandlerOwner.cardHandler.headers.length; h++){
            
            bingoTableHTML = bingoTableHTML + "<th>" + this.gameHandlerOwner.cardHandler.headers[h] +"</th>";
            
        }
        
        // close the table header row
        bingoTableHTML = bingoTableHTML + "</tr>";
        
        return bingoTableHTML;
    }
    
    _SetRowsHTML(card){
        
        let $displayHTML = "";
        
        for(let y=0; y < 5; y++){
            
            $displayHTML = $displayHTML + "<tr>";
            
            for(let x=0; x < 5; x++){
             
                for(const spa of card.spaces){
                    
                    if(spa.x == x && spa.y == y){
                        
                        let $con = spa.content;
                        
                        let $size = String(this._GetContentSize($con));
                        
                        $displayHTML = $displayHTML + `<td style="font-size:` + $size +`px">`+$con+"</td>";
                    }
                }
            }
            
            $displayHTML = $displayHTML + "</tr>";
            
        }
        
        return $displayHTML
    }
    
    DisplayCallPage(){
        
        document.getElementById("mainContent").style = "font-size:26px;margin-top:75px";
        document.getElementById("mainContent").innerHTML = callPageHTMLString;
        
        document.getElementById("header0Div").innerHTML = this.gameHandlerOwner.cardHandler.headers[0];
        document.getElementById("header1Div").innerHTML = this.gameHandlerOwner.cardHandler.headers[1];
        document.getElementById("header2Div").innerHTML = this.gameHandlerOwner.cardHandler.headers[2];
        document.getElementById("header3Div").innerHTML = this.gameHandlerOwner.cardHandler.headers[3];
        document.getElementById("header4Div").innerHTML = this.gameHandlerOwner.cardHandler.headers[4];
        
        this.gameHandlerOwner.ballHandler.SortBallsBySeed();
        
    }
    
    UpdateCallPage(headerIndex,header,content){
        
        this.currentCallIndex = this.gameHandlerOwner.ballHandler.pulledBalls.length - 1;
        
        this._AddCallToChronologicalCalls(header,content);
        
        this._AddCallToHeaderCalls(headerIndex,content);
    }
    
    _AddCallToHeaderCalls(headerIndex,content){
        
        let $displayArr = [];
        
        for(const b of this.gameHandlerOwner.ballHandler.pulledBalls){
            
            //console.log(b);
            
            if(b.headerIndex == headerIndex){
                
                $displayArr.push(b.callText);
            }
        }
        
        $displayArr.sort();
        
        let $headerText = this.gameHandlerOwner.cardHandler.headers[headerIndex];
        
        document.getElementById("header"+headerIndex+"Div").innerHTML = $headerText + " " + $displayArr;
        
    }
    
    _ExpandCallMenu(div){
        
        for (const l of this.gameHandlerOwner.gameSettingsHandler.gameCallLangs){
         
            this.gameHandlerOwner.audioCallLibrary.PlayPhrases(l,[div.getAttribute('data-content')],false,true)

        }
    }
    
    _AddCallToChronologicalCalls(header,content){
        
        let $html = document.getElementById("previousCalls").innerHTML;
        
        var $lastCreatedCallDiv = document.createElement("div");
        $lastCreatedCallDiv.id = "chronCall" + this.currentCallIndex;
        $lastCreatedCallDiv.setAttribute('data-content', content);
        //$lastCreatedCallDiv.style.border = '2px solid gray'
        
        var $lastCreatedCallLink = document.createElement('button');
        $lastCreatedCallLink.id = "chronCallLink" + this.currentCallIndex;
        $lastCreatedCallLink.innerHTML = header + " " + content;
        
        
        document.getElementById("previousCalls").prepend($lastCreatedCallDiv);
        $lastCreatedCallDiv.append($lastCreatedCallLink);
        
        
        let $transliteratedString = "";
        
        for(const l of this.gameHandlerOwner.gameSettingsHandler.gameCallLangs){
            
            $transliteratedString = $transliteratedString + this.gameHandlerOwner.audioCallLibrary.GetTransliteratedString(l,[header,content]);
            
            // will display name of each language in parentheses after transliteration IFF there are multiple game call languages
            
            if(this.gameHandlerOwner.gameSettingsHandler.gameCallLangs.length > 1){
                
                $transliteratedString = $transliteratedString + " (" + l + ")";
            }
        }
        
        $lastCreatedCallDiv.innerHTML = $lastCreatedCallDiv.innerHTML +"<br>" + $transliteratedString;
        
        $lastCreatedCallDiv.innerHTML = $lastCreatedCallDiv.innerHTML + "<br><br>";
        
        document.body.addEventListener( 'click', function ( event ) {
            if( event.target.id == $lastCreatedCallLink.id ) {
                window.gameHandler.uiHandler._ExpandCallMenu($lastCreatedCallDiv);
                };
            } );
    }
}