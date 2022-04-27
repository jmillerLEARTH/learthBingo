export class secondDisplayHandler{
    
    constructor(owner){
        
        this.uiHandlerOwner = owner;
        this.secondWindowHasDisplayedElements = false;
        
        this.secondDisplay = null;
        
        this.displayTransliteratedString = false;
        this.displayBingoDiagrams = false;
    }
    
    OpenSecondWindow(){
        
        if(!this.secondWindowHasDisplayedElements) return
        
        this.secondDisplay = window.open("http://localhost:3000/");
        
        //this.secondDisplay.gameHandler.uiHandler = {...this.uiHandlerOwner};
        
        this.CreateBingoDiagramsMenu(document);
    }
    
    InitializeSecondDisplay(doc){
        
        document.body.innerHTML = "";
        
        this.displayBingoCalls = window.opener.gameHandler.uiHandler.secondDisplayHandler.displayBingoCalls;
        this.displayTransliteratedString = window.opener.gameHandler.uiHandler.secondDisplayHandler.displayTransliteratedString;
        this.displayBingoDiagrams = window.opener.gameHandler.uiHandler.secondDisplayHandler.displayBingoDiagrams;
        
        if(this.displayBingoDiagrams){
            
            let $bingoDiagDiv = document.createElement("div");
            $bingoDiagDiv.id = "bingoDiagrams";
            $bingoDiagDiv.style = "padding:1%";
            //$bingoDiagDiv.innerHTML = `<img src="bingo/bingoDiagrams/acrossBingo.png">`;
            document.body.append($bingoDiagDiv);
            
        }
        
        if(this.displayBingoCalls){
            
            let $bingoCallDiv = document.createElement("div");
            $bingoCallDiv.id = "bingoCalls";
            $bingoCallDiv.style = "font-size:200px;text-align:center;padding:1.5% 0;font-family:sans-serif";
            document.body.append($bingoCallDiv);
            
            
        }
        
        if(this.displayTransliteratedString){
            let $transStringDiv = document.createElement("div");
            $transStringDiv.id = "transliteratedStrings";
            $transStringDiv.style = "font-size:90px;text-align:center;padding:1.5% 0;font-family:sans-serif";
            document.body.append($transStringDiv);
            
            //console.log(this.secondDisplay.document.body);
        }
    }
    
    UpdateBingoCalls(header,content){
        
        if(!this.displayBingoCalls) return
        
        //console.log(this.secondDisplay.document.body);
        
        this.secondDisplay.document.getElementById("bingoCalls").innerHTML = header + " " + content;
    }
    
    UpdateTransliteratedString(content){
        
        if(!this.displayTransliteratedString) return
        
        this.secondDisplay.document.getElementById("transliteratedStrings").innerHTML = content;
    }
    
    CreateBingoDiagramsMenu(doc){
        
        if(!this.displayBingoDiagrams) return
        
        let $diagMenuDiv = doc.createElement("div");
        $diagMenuDiv.id = "diagMenu";
        $diagMenuDiv.style = "z-index:200;float:left;position:absolute;left: 5%";
        $diagMenuDiv.setAttribute('data-expandedBool', false);
        
        let $diagMenuButton = doc.createElement("button");
        $diagMenuButton.id = "diagMenuButton";
        $diagMenuButton.innerHTML = "Display Bingo Diagrams";
        
        doc.body.prepend($diagMenuDiv);
        $diagMenuDiv.append($diagMenuButton);
        
        document.body.addEventListener( 'click', function ( event ) {
            if( event.target.id == "diagMenuButton" ) {
                window.gameHandler.uiHandler.secondDisplayHandler._ExpandBingoDiagramMenu(doc,$diagMenuButton);
                };
            } );
    }
    
    _ExpandBingoDiagramMenu(doc,button){
        
        const $div = doc.getElementById("diagMenu");
        
        if($div.getAttribute("data-expandedBool") == "false"){
                    
            let $button0 = doc.createElement("button");
            $button0.id = "acrossBingo";
            $button0.innerHTML = "Across Bingo";
            
            $div.setAttribute('data-expandedBool', true);
            $div.innerHTML = $div.innerHTML + "<br>";
            $div.append($button0);
            
            doc.body.addEventListener( 'click', function ( event ) {
            if( event.target.id == "acrossBingo" ) {
                window.gameHandler.uiHandler.secondDisplayHandler.UpdateBingoDiagrams("acrossBingo");
                };
            } );
            
        }
        else{
            
            doc.getElementById("diagMenu").innerHTML = "";
            doc.getElementById("diagMenu").append(button);
            doc.getElementById("diagMenu").setAttribute('data-expandedBool', false);
        }
        
    }
    
    UpdateBingoDiagrams(bingoDiagString){
        
        if(!this.displayBingoDiagrams) return
        
//        let $diag = document.createElement("img");
//        $diag.src = "bingo/bingoDiagrams/acrossBingo.png";
//        
//        this.secondDisplay.document.getElementById("bingoDiagrams").append($diag);
        
        let $html = this.secondDisplay.document.getElementById("bingoDiagrams").innerHTML;
        
        //<img src="bingo/bingoDiagrams/acrossBingo.png"></img>
        
        this.secondDisplay.document.getElementById("bingoDiagrams").innerHTML = ` <img src="bingo/bingoDiagrams/` + bingoDiagString + `.png">`;
        
        //let $displayHTML;
        
//        for(const d of diagArr){
//            
//            $displayHTML = $displayHTML + ` <img src="bingoDiagrams/"` + d `.png>`;
//        }
    }
        
    
    
    SetToDisplayTransliteratedString(){
        
        this.displayTransliteratedString = true;
        this.secondWindowHasDisplayedElements = true;
    }
    
    SetToDisplayBingoDiagrams(){
        
        this.displayBingoDiagrams = true;
        this.secondWindowHasDisplayedElements = true;
    }
    
    SetToDisplayBingoCall(){
        
        this.displayBingoCalls = true;
        this.secondWindowHasDisplayedElements = true;
        
    }
}