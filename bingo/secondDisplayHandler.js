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
        
        let $diagMenu = doc.createElement("div");
        $diagMenu.id = "diagMenu";
        $diagMenu.style = "position:fixed;padding: 5% 5%";
        $diagMenu.innerHTML = "Display Bingo Diagrams";
        
        doc.body.append($diagMenu);
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