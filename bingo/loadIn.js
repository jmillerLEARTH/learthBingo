export function loadIn(){
    
    //console.log("fire loadin");

    if(window.opener != null){
        
    //    console.log("I'm second!");
        
        //window.gameHandler.uiHandler = {...window.opener.gameHandler.uiHandler};
        //console.log(window.gameHandler.uiHandler.secondDisplayHandler);
        window.gameHandler.uiHandler.secondDisplayHandler.InitializeSecondDisplay();
    }
    
    if(sessionStorage.length > 0){
        
        console.log(sessionStorage);
    }
    
    if(Number(sessionStorage.pulledBalls) > 0){
        
        let $loadButton = document.createElement("button");
        
        $loadButton.id = "loadButton";
        $loadButton.innerHTML = "Load Crashed Game";
        document.getElementById("mainContent").append($loadButton);
        
        document.body.addEventListener( 'click', function ( event ) {
            if( event.target.id == "loadButton" ) {
                window.gameHandler.LoadCrashedGame();
                };
            } );
        
        
    }
}