export class secondDisplayHandler{
    
    constructor(owner){
        
        this.uiHandlerOwner = owner;
        this.secondWindowHasDisplayedElements = false;
        
        this.secondDisplay = null;
        
        this.displayTransliteratedString = false;
        this.displayBingoDiagrams = false;
    }
    
    InitializeSecondDisplay(){
        
        if(!this.secondWindowHasDisplayedElements) return
        
        this.secondDisplay = window.open();
        
        let $div;
        
        if(this.displayBingoDiagrams){
            
            $div = this.secondDisplay.document.createElement("div");
            $div.id = "bingoDiagrams";
            $div.style = "padding:2%";
            this.secondDisplay.document.body.append($div);
        }
        
        if(this.displayTransliteratedString){
            $div = this.secondDisplay.document.createElement("div");
            $div.id = "transliteratedStrings";
            $div.style = "font-size:72px;text-align:center;padding:5% 0;font-family:sans-serif";
            this.secondDisplay.document.body.append($div);
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
            
        }
        else{
            
            doc.getElementById("diagMenu").innerHTML = "";
            doc.getElementById("diagMenu").append(button);
            doc.getElementById("diagMenu").setAttribute('data-expandedBool', false);
        }
        
    }
    
    UpdateBingoDiagrams(diagArr){
        
        if(!this.displayBingoDiagrams) return
        
        let $displayHTML;
        
        for(const d of diagArr){
            
            $displayHTML = $displayHTML + ` <img src="bingoDiagrams/"` + d `.png>`;
        }
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