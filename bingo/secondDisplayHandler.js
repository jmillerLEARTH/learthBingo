export class secondDisplayHandler{
    
    constructor(owner){
        
        this.uiHandlerOwner = owner;
        this.secondWindowHasDisplayedElements = false;
        
        this.secondDisplay = null;
        
        this.displayTransliteratedString = false;
        this.displayBingoDiagrams = false;
    }
    
    InitializeSecondDisplay(){
        
        this.secondDisplay = window.open();
        let $div = this.secondDisplay.document.createElement("div");
        $div.id = "main";
        $div.style = "font-size:72px;text-align:center;padding:20% 0;font-family:sans-serif";
        this.secondDisplay.document.body.append($div);
    }
    
    DisplayTransliteratedString(){
        
        this.displayTransliteratedString = true;
        this.secondWindowHasDisplayedElements = true;
    }
    
    DisplayBingoDiagrams(){
        
        this.displayBingoDiagrams = true;
        this.secondWindowHasDisplayedElements = true;
    }
}