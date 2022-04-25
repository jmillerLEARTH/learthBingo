export class secondDisplayHandler{
    
    constructor(owner){
        
        this.uiHandlerOwner = owner;
        this.secondWindowHasDisplayedElements = false;
        
        this.secondDisplay = null;
        
        this.displayTransliteratedString = false;
        this.displayBingoDiagrams = false;
    }
    
    InitializeSecondDisplay(doc){
        
        if(!this.secondWindowHasDisplayedElements) return
        
        this.secondDisplay = window.open();
        
        if(this.displayBingoDiagrams){
            
            let $bingoDiagDiv = this.secondDisplay.document.createElement("div");
            $bingoDiagDiv.id = "bingoDiagrams";
            $bingoDiagDiv.style = "padding:2%";
            //$//bingoDiagDiv.innerHTML = `<img src="bingo/bingoDiagrams/acrossBingo.png"></img></img>`;
            this.secondDisplay.document.body.append($bingoDiagDiv);
            
            this.CreateBingoDiagramsMenu(doc);
        }
        
        if(this.displayTransliteratedString){
            let $transStringDiv = this.secondDisplay.document.createElement("div");
            $transStringDiv.id = "transliteratedStrings";
            $transStringDiv.style = "font-size:72px;text-align:center;padding:5% 0;font-family:sans-serif";
            this.secondDisplay.document.body.append($transStringDiv);
        }
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
        
        console.log(bingoDiagString);
        
        let $html = this.secondDisplay.document.getElementById("bingoDiagrams").innerHTML;
        
        //<img src="bingo/bingoDiagrams/acrossBingo.png"></img>
        
        this.secondDisplay.document.getElementById("bingoDiagrams").innerHTML = ` <img src="bingo/bingoDiagrams/` + bingoDiagString + `.png"><img src="bingo/bingoDiagrams/acrossBingo.png">`;
        
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
}