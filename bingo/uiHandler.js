import {gameSettingsPageHTMLString} from "./gameSettingsPageString.js";
import {callPageHTMLString} from "./callPageString.js";
import {secondDisplayHandler} from "./secondDisplayHandler.js";

export class uiHandler {
    
    constructor(gameHandlerOwner){
        
        this.gameHandlerOwner = gameHandlerOwner;
        this.currentCallIndex = 0;
        this.secondDisplayHandler = new secondDisplayHandler(this);
    }
    
    DisplayGameSettingsPage(){
        
        document.getElementById("mainContent").innerHTML = "";
        
        document.getElementById("mainContent").style = "font-size:26px;margin-top:75px";
        document.getElementById("mainContent").innerHTML += "Game Languages<br><br>";
        
        const $ojibwemowinChkbxSpan = document.createElement("span");
        
        const $ojibwemowinChkbx = document.createElement("input");
        $ojibwemowinChkbx.type = "checkbox";
        $ojibwemowinChkbx.classList.add("langCheckbox");
        $ojibwemowinChkbx.setAttribute("data-language","ojibwemowin");
        
        $ojibwemowinChkbxSpan.append($ojibwemowinChkbx);
        $ojibwemowinChkbxSpan.append(" Ojibwemowin");
        $ojibwemowinChkbxSpan.innerHTML += "<br>";
        
        document.getElementById("mainContent").append($ojibwemowinChkbxSpan);
        
        const $cherokeeChkbxSpan = document.createElement("span");
        
        const $cherokeeChkbx = document.createElement("input");
        $cherokeeChkbx.type = "checkbox";
        $cherokeeChkbx.classList.add("langCheckbox");
        $cherokeeChkbx.setAttribute("data-language","cherokee");
        
        $cherokeeChkbxSpan.append($cherokeeChkbx);
        $cherokeeChkbxSpan.append(" Cherokee");
        
        document.getElementById("mainContent").append($cherokeeChkbxSpan);
        
        const $gameHandler = this.gameHandlerOwner;
        
        const $startButton = document.createElement("button");
        $startButton.innerHTML = "START";
        $startButton.addEventListener("click", function(){$gameHandler.gameSettingsHandler.ContinueWithQuickGameSettings()});
        
        
        document.getElementById("mainContent").innerHTML += "<br><br>";
        document.getElementById("mainContent").append($startButton);
    }
    
    DisplayCardPrintPage(){
        
        let $displayHTML = "";
        
        let $cardCount = 0;
        
        for(const ca of this.gameHandlerOwner.cardHandler.cards){
            
            const $cardModulus = $cardCount % 2;
            
            if($cardModulus == 0){
                
                $displayHTML += `<div style="display: grid;
                    justify-items: center;
                    align-items: center;
                    gap: 10px;
                    padding: 5px;
                    grid-template-columns: auto auto;
                    page-break-after: always">`
            }
            
            $displayHTML = $displayHTML + this._SetHeaderHTML($cardModulus);
            
            $displayHTML = $displayHTML + this._SetRowsHTML(ca);
            
            $displayHTML = $displayHTML + "</tbody></table></div>";
            
            if($cardModulus != 0) $displayHTML += "</div>"
            
            $cardCount++;
        }
        
//        const $gridDisplayDiv = document.createElement("div");
//        $gridDisplayDiv.style = `display: grid;
//            justify-items: center;
//            align-items: center;
//            gap: 10px;
//            padding: 5px;`;
        
//        $gridDisplayDiv.style.gridTemplateColumns = "auto auto";
        
        document.getElementById("mainContent").innerHTML = $displayHTML;
        
//        document.getElementById("mainContent").append($gridDisplayDiv);
        
//        $gridDisplayDiv.insertAdjacentHTML("beforeend",$displayHTML);
        
        //document.getElementById("mainContent").innerHTML = $displayHTML;
        
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
            
            return 55;
        }
        else{
            
            return this._TextScaleSelector(content);
        }
    }
    
    _SetHeaderHTML(cardModulus){
        
        let bingoTableHTML 
        if(cardModulus ==0) bingoTableHTML = `<div style="background-color:white"><table><tr>`
        else bingoTableHTML = `<div style="background-color:white"><table><tr>`
        
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
        
        this.secondDisplayHandler.OpenSecondWindow();
        
        this.gameHandlerOwner.ballHandler.SortBallsBySeed();
        
    }
    
    UpdateCallPage(headerIndex,header,content){
        
        this.currentCallIndex = this.gameHandlerOwner.ballHandler.pulledBalls.length - 1;
        
        this._UpdateCallsCount();
        
        this._AddCallToChronologicalCalls(header,content);
        
        this._AddCallToHeaderCalls(headerIndex,content);
    }
    
    _UpdateCallsCount(){
        
        document.getElementById("callsNum").innerHTML = this.currentCallIndex + 1;
    }
    
    _AddCallToHeaderCalls(headerIndex,content){
        
        let $displayArr = [];
        
        for(const b of this.gameHandlerOwner.ballHandler.pulledBalls){
            
            //console.log(b);
            
            if(b.headerIndex == headerIndex){
                
                $displayArr.push(b.callText);
            }
        }
        
        $displayArr.sort((a, b) => a - b);
        
        let $headerText = this.gameHandlerOwner.cardHandler.headers[headerIndex];
        
        document.getElementById("header"+headerIndex+"Div").innerHTML = $headerText + " " + $displayArr;
        
    }
    
    _ExpandCallMenu(div){
        
        const $header = div.getAttribute('data-header');
        
        const $content = div.getAttribute(`data-content`);
        
        if(div.getAttribute("data-expanded") == false || div.getAttribute("data-expanded") == undefined){
            
            let $transliteratedString = this._GetTransliteratedStringForEachGameLang($header,$content);
        
            div.insertAdjacentHTML("beforeend","<br>");
        
            div.append($transliteratedString);
        
            div.setAttribute("data-expanded",true);
            
        }
        
        for (const l of this.gameHandlerOwner.gameSettingsHandler.gameCallLangs){
         
            this.gameHandlerOwner.audioCallLibrary.PlayPhrases(l,[$header,$content],false,true)

        }
    }
    
    _DisplayCallOnSeparateWindow(content){
        
        if(this.gameHandlerOwner.gameSettingsHandler.displayTransliteratedStringOnSecondWindow) return
        
        //this.callWindow.document.getElementById("callWindowDiv").innerHTML = content;
        
    }
    
    _CreateNewCallDiv(header,content){
        
        let $lastCreatedCallDiv = document.createElement("div");
        $lastCreatedCallDiv.id = "chronCall" + this.currentCallIndex;
        $lastCreatedCallDiv.setAttribute(`data-header`,header)
        $lastCreatedCallDiv.setAttribute('data-content', content);
        
        //console.log(content);
        
        return $lastCreatedCallDiv
    }
    
    _CreateTranslitStringDiv(header,content,callDiv){
        
        const $translitDiv = document.createElement("span");
        $translitDiv.style.height = "200px";
        $translitDiv.style.width = "200px";
        $translitDiv.setAttribute(`data-header`,header)
        $translitDiv.setAttribute('data-content', content);
        
        callDiv.append($translitDiv);
        
        console.log($translitDiv);
        
        console.log($translitDiv.parentElement);
        
        return $translitDiv
    }
    
    _CreateNewCallLink(header,content){
        
        let $lastCreatedCallLink = document.createElement('button');
        $lastCreatedCallLink.id = "chronCallLink" + this.currentCallIndex;
        $lastCreatedCallLink.innerHTML = header + " " + content;
        
        return $lastCreatedCallLink
    }
    
    _GetTransliteratedStringForEachGameLang(header,content){
        
         let $transliteratedString = "";
        
        for(const l of this.gameHandlerOwner.gameSettingsHandler.gameCallLangs){
            
            $transliteratedString = $transliteratedString + this.gameHandlerOwner.audioCallLibrary.GetTransliteratedString(l,[header,content]);
            
            // will display name of each language in parentheses after transliteration IFF there are multiple game call languages
            
            if(this.gameHandlerOwner.gameSettingsHandler.gameCallLangs.length > 1){
                
                $transliteratedString = $transliteratedString + " (" + l + ")";
            }
        }
        
        return $transliteratedString
    }
    
    _AddCallToChronologicalCalls(header,content){
        
        let $html = document.getElementById("previousCalls").innerHTML;
        
        let $lastCreatedCallDiv = this._CreateNewCallDiv(header,content);
        
        //$lastCreatedCallDiv.append($translitDiv);
        
        let $lastCreatedCallLink = this._CreateNewCallLink(header,content);
        
        document.getElementById("previousCalls").prepend($lastCreatedCallDiv);
            
        $lastCreatedCallDiv.append($lastCreatedCallLink);
        
        const $translitDiv = this._CreateTranslitStringDiv(header,content,$lastCreatedCallDiv);
        
        // -- Removed this in order to let myself practice. Transliterated string is now only shown when you hit the call button
        
        let $transliteratedString = this._GetTransliteratedStringForEachGameLang(header,content);
        
        //$lastCreatedCallDiv.innerHTML = $lastCreatedCallDiv.innerHTML +"<br>" + $transliteratedString;
        
        this.secondDisplayHandler.UpdateTransliteratedString($transliteratedString);
        
        this.secondDisplayHandler.UpdateBingoCalls(header,content);
        
        this._DisplayCallOnSeparateWindow($transliteratedString);
        
        //$lastCreatedCallDiv.innerHTML = $lastCreatedCallDiv.innerHTML + "<br><br>";
        
        $lastCreatedCallDiv.insertAdjacentHTML("beforeend","<br><br>");
        
        document.body.addEventListener( 'click', function ( event ) {
            if( event.target.id == $lastCreatedCallLink.id ) {
                console.log($translitDiv);
                window.gameHandler.uiHandler._ExpandCallMenu($translitDiv);
                };
            } );
    }
}