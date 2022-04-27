export function loadIn(){
    
    console.log("fire loadin");

    if(window.opener != null){
        
        console.log("I'm second!");
        
        //window.gameHandler.uiHandler = {...window.opener.gameHandler.uiHandler};
        console.log(window.gameHandler.uiHandler.secondDisplayHandler);
        window.gameHandler.uiHandler.secondDisplayHandler.InitializeSecondDisplay();
    }
}