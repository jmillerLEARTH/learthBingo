export class secondDisplayHandler{
    
    constructor(owner){
        
        this.uiHandlerOwner = owner;
        this.secondWindowHasDisplayedElements = false;
        
        this.secondDisplay = null;
        
        this.displayTransliteratedString = false;
        this.displayBingoDiagrams = false;
        this.bingoDiagButtons = [];
    }
    
    OpenSecondWindow(){
        
        if(!this.secondWindowHasDisplayedElements) return
        
        console.warn(window.location.href);
        
        if(window.location.href == "https://jmillerlearth.github.io/learthBingo/"){
            
            this.secondDisplay = window.open("https://jmillerlearth.github.io/learthBingo/");
        }
        else {
            
            //console.log("redir");
            this.secondDisplay = window.open("./index.html");
            
        }
        
        //this.secondDisplay.gameHandler.uiHandler = {...this.uiHandlerOwner};
        
        this.CreateBingoDiagramsMenu();
    }
    
    InitializeSecondDisplay(doc){
        
        document.body.innerHTML = "";
        
        this.displayBingoCalls = window.opener.gameHandler.uiHandler.secondDisplayHandler.displayBingoCalls;
        this.displayTransliteratedString = window.opener.gameHandler.uiHandler.secondDisplayHandler.displayTransliteratedString;
        this.displayBingoDiagrams = window.opener.gameHandler.uiHandler.secondDisplayHandler.displayBingoDiagrams;
        
        const $openMessage = document.createElement("span");
        $openMessage.id = "openMessage";
        $openMessage.innerHTML = "This is a second display window that will show calls for participants. Please click the other window tab to call the game.";
        
        document.body.append($openMessage);
        
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
    
    _ClearOpenMessage(){
        
        if(this.secondDisplay.document.getElementById("openMessage") != null) this.secondDisplay.document.getElementById("openMessage").innerHTML = "";
    }
    
    UpdateBingoCalls(header,content){
        
        if(!this.displayBingoCalls) return
        
        this._ClearOpenMessage();
        
        this.secondDisplay.document.getElementById("bingoCalls").innerHTML = header + " " + content;
    }
    
    UpdateTransliteratedString(content){
        
        if(!this.displayTransliteratedString) return
        
        this._ClearOpenMessage();
        
        this.secondDisplay.document.getElementById("transliteratedStrings").innerHTML = content;
    }
    
    CreateBingoDiagramsMenu(){
        
        if(!this.displayBingoDiagrams) return
        
        this._ClearOpenMessage();
        
        let $diagMenuDiv = document.createElement("div");
        $diagMenuDiv.id = "diagMenu";
        $diagMenuDiv.style = "z-index:200;float:left;position:absolute;left: 5%";
        $diagMenuDiv.setAttribute('data-expandedBool', false);
        
        let $diagMenuButton = document.createElement("button");
        $diagMenuButton.id = "diagMenuButton";
        $diagMenuButton.innerHTML = "Display Bingo Diagrams";
        
        let $diagMenuButtonTray = document.createElement("div");
        $diagMenuButtonTray.id = "diagMenuButtonTray";
        
        $diagMenuButtonTray.style.display = "none";
        
        document.body.prepend($diagMenuDiv);
        $diagMenuDiv.append($diagMenuButton);
        $diagMenuDiv.append($diagMenuButtonTray);
        
        this._CreateBingoDiagButton("Across Bingo","acrossBingo");
        this._CreateBingoDiagButton("Up and Down Bingo","upanddownBingo");
        this._CreateBingoDiagButton("Four Corners Bingo", "fourcornersBingo");
        this._CreateBingoDiagButton("Diagonal Bingo", "diagBingo");
        this._CreateBingoDiagButton("L Bingo", "lBingo");
        this._CreateBingoDiagButton("Crazy L Bingo", "crazylBingo");
        this._CreateBingoDiagButton("T Bingo","tBingo");
        this._CreateBingoDiagButton("X Bingo", "xBingo");
        this._CreateBingoDiagButton("Picture Frame Bingo", "pictureframeBingo");
        this._CreateBingoDiagButton("Bowtie Bingo","bowtieBingo");
        this._CreateBingoDiagButton("Little Side Big Side Bingo", "littlesidebigsideBingo");
        this._CreateBingoDiagButton("Coverall Bingo", "coverallBingo");
        this._CreateBingoDiagClearButton();
        
        for(const butt of this.bingoDiagButtons){
            
            butt.style.display = "none";
        }
        
        console.log($diagMenuDiv);
        
        document.body.addEventListener( 'click', function ( event ) {
            if( event.target.id == "diagMenuButton" ) {
                window.gameHandler.uiHandler.secondDisplayHandler._ExpandBingoDiagramMenu($diagMenuButton);
                };
            } );
    }
    
    _CreateBingoDiagButton(buttonText,fileString){
        
        const $div = document.getElementById("diagMenuButtonTray");
        
        
        let $button = document.createElement("button");
        $button.id = fileString;
        $button.innerHTML = buttonText;
        $div.append($button);
        $div.innerHTML = $div.innerHTML + "<br>";
        
        document.body.addEventListener( 'click', function ( event ) {
            if( event.target.id == fileString ) {
                window.gameHandler.uiHandler.secondDisplayHandler.UpdateBingoDiagrams(fileString);
                };
            } );
        
        
    }
    
    _CreateBingoDiagClearButton(){
        
        const $div = document.getElementById("diagMenuButtonTray");
        
        let $button = document.createElement("button");
        $button.id = "clearDiags";
        $button.innerHTML = "Clear All Diagrams";
        $div.append($button)
        
        //if($div.getAttribute("data-expandedBool") == "false"){ 
            document.body.addEventListener( 'click', function ( event ) {
                if( event.target.id == "clearDiags" ) {
                    window.gameHandler.uiHandler.secondDisplayHandler.UpdateBingoDiagrams("clear");
                    };
                } );
        //}
        
    }
    
    _ExpandBingoDiagramMenu(button){
        
        const $div = document.getElementById("diagMenu");
        
        if($div.getAttribute("data-expandedBool") == "false"){  
            
            console.log("expand");
            
            $div.setAttribute('data-expandedBool', true);
            $div.innerHTML = $div.innerHTML + "<br>";
            
            document.getElementById("diagMenuButtonTray").style.display = "block"
            
        }
        else{
            
            document.getElementById("diagMenuButtonTray").style.display = "none"
            
//            document.getElementById("diagMenu").innerHTML = "";
//            document.getElementById("diagMenu").append(button);
            document.getElementById("diagMenu").setAttribute('data-expandedBool', false);
        }
        
    }
    
    UpdateBingoDiagrams(bingoDiagString){
        
        if(!this.displayBingoDiagrams) return
        
        this._ClearOpenMessage();
        
//        let $diag = document.createElement("img");
//        $diag.src = "bingo/bingoDiagrams/acrossBingo.png";
//        
//        this.secondDisplay.document.getElementById("bingoDiagrams").append($diag);
        
        if(bingoDiagString == "clear"){
            
            this.secondDisplay.document.getElementById("bingoDiagrams").innerHTML = "";
        }
        
        else {
            
            let $html = this.secondDisplay.document.getElementById("bingoDiagrams").innerHTML;
        
            this.secondDisplay.document.getElementById("bingoDiagrams").innerHTML = $html + ` <img src="bingo/bingoDiagrams/` + bingoDiagString + `.png">`;
        
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
    
    SetToDisplayBingoCall(){
        
        this.displayBingoCalls = true;
        this.secondWindowHasDisplayedElements = true;
        
    }
}